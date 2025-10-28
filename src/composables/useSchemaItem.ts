import { SCHEMA_COMPOSITIONS, SCHEMA_ITEM_TYPES, SCHEMA_REFERENCE_KEY } from '@/lib/constants';
import { computed, ref, watch, watchEffect, type Ref } from 'vue';

export function useSchemaItem(modelValue: Ref) {
  const isConst = ref(false);
  const isEnum = ref(false);

  const type = computed({
    get() {
      if (isReference(modelValue.value)) {
        return SCHEMA_REFERENCE_KEY;
      }
      if (isComposition(modelValue.value)) {
        return getCompositionKey(modelValue.value);
      }
      return Array.isArray(modelValue.value?.type)
        ? modelValue.value?.type?.[0]
        : modelValue.value?.type;
    },
    set(newType) {
      if (newType === type.value) return;
      let obj;
      if (isReference(newType)) {
        obj = {
          $ref: ''
        };
      } else if (isComposition(newType)) {
        obj = {
          [newType]: [
            {
              type: SCHEMA_ITEM_TYPES.OBJECT,
              properties: {}
            },
            {
              type: SCHEMA_ITEM_TYPES.OBJECT,
              properties: {}
            }
          ],
          description: modelValue.value?.description
        };
      } else {
        obj = {
          type: newType,
          description: modelValue.value?.description
        };
        if (newType === SCHEMA_ITEM_TYPES.OBJECT) {
          obj.properties = {};
        }
        if (newType === SCHEMA_ITEM_TYPES.ARRAY) {
          obj.items = {
            type: SCHEMA_ITEM_TYPES.STRING
          };
        }
      }
      modelValue.value = obj;
      isConst.value = false;
      isEnum.value = false;
    }
  });

  const isNullable = computed({
    get() {
      if (
        Array.isArray(modelValue.value?.type) &&
        modelValue.value?.type?.[1] === SCHEMA_ITEM_TYPES.NULL
      )
        return true;
      return false;
    },
    set(newValue) {
      if (type.value === SCHEMA_ITEM_TYPES.NULL) return;
      modelValue.value = {
        ...modelValue.value,
        type: newValue ? [type.value, SCHEMA_ITEM_TYPES.NULL] : type.value
      };
    }
  });

  const isDeprecated = computed({
    get() {
      return modelValue.value?.deprecated === true;
    },
    set(newValue) {
      if (newValue) {
        modelValue.value = {
          ...modelValue.value,
          deprecated: true
        };
      } else {
        delete modelValue.value.deprecated;
      }
    }
  });

  const constValue = computed({
    get() {
      return modelValue.value?.const;
    },
    set(newValue) {
      modelValue.value = {
        ...modelValue.value,
        const: newValue
      };
    }
  });

  const enumValue = computed({
    get() {
      return modelValue.value?.enum || [];
    },
    set(newValue) {
      modelValue.value = {
        ...modelValue.value,
        enum: newValue
      };
    }
  });

  const $ref = computed({
    get() {
      if (!modelValue.value[SCHEMA_REFERENCE_KEY]) return null;
      const splits = modelValue.value[SCHEMA_REFERENCE_KEY]?.split('/');
      return splits?.[2] || null;
    },
    set(newValue) {
      modelValue.value = {
        ...modelValue.value,
        $ref: `#/$defs/${newValue}`
      };
    }
  });

  watchEffect(() => {
    isConst.value = modelValue.value?.const !== undefined;
    isEnum.value = modelValue.value?.enum !== undefined;
  });

  watch(isConst, value => {
    if (value) {
      isEnum.value = false;
    } else {
      delete modelValue.value.const;
    }
  });

  watch(isEnum, value => {
    if (value) {
      isConst.value = false;
    } else {
      delete modelValue.value.enum;
    }
  });

  function isPrimitive(schemaOrType: any) {
    const primitiveKeys = Object.values(SCHEMA_ITEM_TYPES);
    if (typeof schemaOrType === 'string') return primitiveKeys.includes(schemaOrType);
    if (typeof schemaOrType === 'object') return primitiveKeys.includes(schemaOrType.type);
    return false;
  }

  /**
   * Checks if a given value is a schema composition type or contains composition keywords.
   *
   * @param {string|object} schemaOrType - The value to check. Can be either a string type
   *        or a schema object.
   * @returns {boolean} Returns `true` if:
   *          - The input is a string that matches a known schema composition type, OR
   *          - The input is an object that contains any schema composition keyword.
   *          Otherwise returns `false`.
   * @example
   * isComposition('allOf'); // returns true since 'allOf' is a composition type
   * isComposition({ anyOf: [...] }); // returns true
   * isComposition({ type: 'string' }); // returns false
   */
  function isComposition(schemaOrType: any) {
    const compositionKeys = Object.values(SCHEMA_COMPOSITIONS);

    if (typeof schemaOrType === 'string') return compositionKeys.includes(schemaOrType);

    if (typeof schemaOrType === 'object') {
      const schema = schemaOrType;
      if (schema === null || Array.isArray(schema)) return false;
      return compositionKeys.some(c => c in schema);
    }

    return false;
  }

  function getCompositionKey(schema: any) {
    if (typeof schema !== 'object' || schema === null) return null;
    return Object.values(SCHEMA_COMPOSITIONS).find(key => key in schema) || null;
  }

  function isReference(schemaOrType: any) {
    if (typeof schemaOrType === 'string') return schemaOrType === SCHEMA_REFERENCE_KEY;
    if (typeof schemaOrType === 'object') return SCHEMA_REFERENCE_KEY in schemaOrType;
    return false;
  }

  return {
    $ref,
    type,
    isNullable,
    isDeprecated,
    isConst,
    isEnum,
    constValue,
    enumValue,
    isPrimitive,
    isComposition,
    isReference,
    getCompositionKey
  };
}
