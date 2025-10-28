export const $defsKey = Symbol();

export const SCHEMA_ITEM_TYPES = {
  STRING: "string",
  INTEGER: "integer",
  BOOLEAN: "boolean",
  OBJECT: "object",
  ARRAY: "array",
  NULL: "null",
  NUMBER: "number",
};

export const SCHEMA_COMPOSITIONS = {
  ALL_OF: "allOf",
  ANY_OF: "anyOf",
  ONE_OF: "oneOf",
};

export const SCHEMA_REFERENCE_KEY = "$ref";

export const SCHEMA_ITEM_SETTINGS = {
  [SCHEMA_ITEM_TYPES.STRING]: {
    fields: [
      {
        dataField: "format",
        editorType: "dxAutocomplete",
        editorOptions: {
          items: [
            "date-time",
            "date",
            "time",
            "duration",
            "email",
            "idn-email",
            "hostname",
            "idn-hostname",
            "ipv4",
            "ipv6",
            "uri",
            "uri-reference",
            "iri",
            "iri-reference",
            "uuid",
            "uri-template",
            "json-pointer",
            "relative-json-pointer",
            "regex",
            "binary",
            "byte",
            "password",
            "char",
          ],
          minSearchLength: 0,
          openOnFieldClick: true,
        },
        colSpan: 1,
      },
      {
        dataField: "behavior",
        editorType: "dxSelectBox",
        editorOptions: {
          items: ["Read/Write", "Read Only", "Write Only"],
        },
        colSpan: 1,
      },
      {
        dataField: "minLength",
        editorType: "dxNumberBox",
        editorOptions: {
          placeholder: ">= 0",
          min: 0,
        },
        colSpan: 1,
      },
      {
        dataField: "maxLength",
        editorType: "dxNumberBox",
        editorOptions: {
          placeholder: ">= 0",
          min: 0,
        },
        colSpan: 1,
      },
      {
        dataField: "default",
        editorType: "dxTextBox",
        editorOptions: {
          placeholder: "default",
        },
        colSpan: 1,
      },
      {
        dataField: "pattern",
        editorType: "dxTextBox",
        editorOptions: {
          placeholder: "^[A-Za-z0-9-_]+",
        },
        colSpan: 1,
      },
      {
        dataField: "examples",
        editorType: "dxTagBox",
        editorOptions: {
          acceptCustomValue: true,
        },
        colSpan: 2,
      },
      {
        dataField: "title",
        editorType: "dxTextBox",
        colSpan: 2,
      },
    ],
  },
  [SCHEMA_ITEM_TYPES.INTEGER]: {
    fields: [
      {
        dataField: "format",
        editorType: "dxAutocomplete",
        editorOptions: {
          items: [
            "int32",
            "int64",
            "long",
            "uint32",
            "uint64",
            "uint",
            "ulong",
            "sint32",
            "sint64",
            "fixed32",
            "fixed64",
            "sfixed32",
            "sfixed64",
            "bignum",
            "fixnum",
          ],
          minSearchLength: 0,
          openOnFieldClick: true,
        },
        colSpan: 1,
      },
      {
        dataField: "behavior",
        editorType: "dxSelectBox",
        editorOptions: {
          items: ["Read/Write", "Read Only", "Write Only"],
        },
        colSpan: 1,
      },
      {
        dataField: "default",
        editorType: "dxNumberBox",
        editorOptions: {
          showSpinButtons: true,
          step: 1,
        },
        colSpan: 2,
      },
      {
        dataField: "examples",
        editorType: "dxTagBox",
        editorOptions: {
          acceptCustomValue: true,
        },
        colSpan: 2,
      },
      {
        dataField: "minimum",
        editorType: "dxNumberBox",
        editorOptions: {
          placeholder: ">= 0",
          min: 0,
          showSpinButtons: true,
          step: 1,
        },
        colSpan: 1,
      },
      {
        dataField: "maximum",
        editorType: "dxNumberBox",
        editorOptions: {
          placeholder: ">= 0",
          min: 0,
          showSpinButtons: true,
          step: 1,
        },
        colSpan: 1,
      },
      {
        dataField: "multipleOf",
        editorType: "dxNumberBox",
        editorOptions: {
          placeholder: ">= 0",
          min: 0,
          showSpinButtons: true,
          step: 1,
        },
        colSpan: 2,
      },
      {
        dataField: "title",
        editorType: "dxTextBox",
        colSpan: 2,
      },
    ],
  },
  [SCHEMA_ITEM_TYPES.BOOLEAN]: {
    fields: [
      {
        dataField: "default",
        editorType: "dxSelectBox",
        editorOptions: {
          items: [true, false],
          showClearButton: true,
        },
        colSpan: 1,
      },
      {
        dataField: "behavior",
        editorType: "dxSelectBox",
        editorOptions: {
          items: ["Read/Write", "Read Only", "Write Only"],
        },
        colSpan: 1,
      },
      {
        dataField: "title",
        editorType: "dxTextBox",
        colSpan: 2,
      },
    ],
  },
  [SCHEMA_ITEM_TYPES.ARRAY]: {
    fields: [
      {
        dataField: "minItems",
        editorType: "dxNumberBox",
        editorOptions: {
          min: 0,
          placeholder: ">= 0",
          showSpinButtons: true,
        },
        colSpan: 1,
      },
      {
        dataField: "maxItems",
        editorType: "dxNumberBox",
        editorOptions: {
          min: 0,
          placeholder: ">= 0",
          showSpinButtons: true,
        },
        colSpan: 1,
      },
      {
        dataField: "uniqueItems",
        editorType: "dxSwitch",
        colSpan: 1,
      },
      {
        dataField: "behavior",
        editorType: "dxSelectBox",
        editorOptions: {
          items: ["Read/Write", "Read Only", "Write Only"],
        },
        colSpan: 1,
      },
      {
        dataField: "title",
        editorType: "dxTextBox",
        colSpan: 2,
      },
    ],
  },
  [SCHEMA_ITEM_TYPES.OBJECT]: {
    fields: [
      {
        dataField: "minProperties",
        editorType: "dxNumberBox",
        editorOptions: {
          placeholder: ">= 0",
          min: 0,
          showSpinButtons: true,
        },
        colSpan: 1,
      },
      {
        dataField: "maxProperties",
        editorType: "dxNumberBox",
        editorOptions: {
          placeholder: ">= 0",
          min: 0,
          showSpinButtons: true,
        },
        colSpan: 1,
      },
      {
        dataField: "additionalProperties",
        editorType: "dxSelectBox",
        editorOptions: {
          items: ["Default", "Allow", "Deny"],
        },
        colSpan: 1,
      },
      {
        dataField: "behavior",
        editorType: "dxSelectBox",
        editorOptions: {
          items: ["Read/Write", "Read Only", "Write Only"],
        },
        colSpan: 1,
      },
      {
        dataField: "title",
        editorType: "dxTextBox",
        colSpan: 2,
      },
    ],
  },
  [SCHEMA_ITEM_TYPES.NUMBER]: {
    fields: [
      {
        dataField: "format",
        editorType: "dxAutocomplete",
        editorOptions: {
          items: ["float", "double", "float32", "float64"],
        },
        colSpan: 1,
      },
      {
        dataField: "behavior",
        editorType: "dxSelectBox",
        editorOptions: {
          items: ["Read/Write", "Read Only", "Write Only"],
        },
        colSpan: 1,
      },
      {
        dataField: "default",
        editorType: "dxNumberBox",
        editorOptions: {
          placeholder: "default",
          showSpinButtons: true,
        },
        colSpan: 2,
      },
      {
        dataField: "examples",
        editorType: "dxTagBox",
        editorOptions: {
          placeholder: "examples",
          acceptCustomValue: true,
        },
        colSpan: 2,
      },
      {
        dataField: "minimum",
        editorType: "dxNumberBox",
        editorOptions: {
          placeholder: ">= 0",
          min: 0,
          showSpinButtons: true,
          step: 1,
        },
        colSpan: 1,
      },
      {
        dataField: "maximum",
        editorType: "dxNumberBox",
        editorOptions: {
          placeholder: ">= 0",
          min: 0,
          showSpinButtons: true,
          step: 1,
        },
        colSpan: 1,
      },
      {
        dataField: "multipleOf",
        editorType: "dxNumberBox",
        editorOptions: {
          placeholder: ">= 0",
          min: 0,
          showSpinButtons: true,
          step: 1,
        },
        colSpan: 2,
      },
      {
        dataField: "title",
        editorType: "dxTextBox",
        colSpan: 2,
      },
    ],
  },
  [SCHEMA_ITEM_TYPES.NULL]: {
    fields: [
      {
        dataField: "title",
        editorType: "dxTextBox",
        colSpan: 2,
      },
    ],
  },
};

export const DEFAULT_SORT_ANIMATION_DURATION = 300;

export const SORT_OPTIONS = {
  handle: ".handle",
  animation: DEFAULT_SORT_ANIMATION_DURATION,
  bubbleScroll: true,
};

export function getBlankSchema() {
  return {
    type: SCHEMA_ITEM_TYPES.OBJECT,
    properties: {},
  };
}
