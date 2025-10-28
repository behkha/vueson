<template>
  <div class="flex min-w-0 flex-wrap">
    <div class="relative max-w-full shrink-0 grow-0 basis-full">
      <div>
        <div
          class="group/schema hover:bg-muted flex h-8 w-full items-center gap-2 rounded border-b leading-6 transition-colors"
        >
          <div class="flex-2/5 flex h-full">
            <p :style="{ width: `${rowIndent}px` }"></p>
            <div
              v-if="isSortable"
              class="handle flex h-full shrink-0 grow-0 basis-auto items-center justify-center"
            >
              <GripVertical
                class="invisible my-auto size-4 cursor-grab text-xl group-hover/schema:visible"
              />
            </div>
            <div
              v-if="isExpandable"
              class="flex-basis-auto flex h-full shrink-0 grow-0 items-center justify-center"
            >
              <ChevronRight
                class="size-4 transform-gpu transition-transform"
                :class="[isExpanded && 'rotate-90']"
                @click="isExpanded = !isExpanded"
              />
            </div>
            <div
              v-if="isRoot"
              class="flex items-center justify-center rounded px-1.5"
            >
              <span class="select-none text-xs font-bold text-purple-500"
                >ROOT</span
              >
            </div>
            <div
              v-else-if="parentType === SCHEMA_ITEM_TYPES.ARRAY"
              class="flex items-center justify-center rounded px-1.5"
            >
              <span class="select-none text-xs font-bold text-purple-500"
                >ITEMS</span
              >
            </div>
            <input
              v-else
              :value="fieldName"
              class="hover:bg-background w-full rounded-md border-none bg-transparent px-2 outline-none hover:border focus:border active:border"
              :class="[isComposition(parentType) && 'cursor-not-allowed']"
              placeholder="field name"
              :disabled="isComposition(parentType)"
              @blur="fieldName = $event.target.value"
            />
          </div>
          <div class="flex-1/5 flex h-full items-center gap-1">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <span
                  class="cursor-pointer font-medium hover:underline"
                  :class="[getTypeColor]"
                >
                  {{
                    isReference(type) && modelValue[SCHEMA_REFERENCE_KEY]
                      ? $ref
                      : type
                  }}
                </span>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="right" align="start" class="min-w-40">
                <template v-if="useRef">
                  <DropdownMenuLabel class="text-muted-foreground text-xs">
                    Reference
                  </DropdownMenuLabel>
                  <DropdownMenuRadioGroup v-model="type">
                    <DropdownMenuRadioItem :value="SCHEMA_REFERENCE_KEY">
                      <Box class="text-purple-500" />
                      reference
                    </DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </template>
                <DropdownMenuLabel class="text-muted-foreground text-xs">
                  Primitives
                </DropdownMenuLabel>
                <DropdownMenuRadioGroup v-model="type">
                  <DropdownMenuRadioItem
                    v-for="(item, index) in Object.values(SCHEMA_ITEM_TYPES)"
                    :key="index"
                    :value="item"
                  >
                    {{ item }}
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
                <DropdownMenuLabel class="text-muted-foreground text-xs">
                  Compositions
                </DropdownMenuLabel>
                <DropdownMenuRadioGroup v-model="type">
                  <DropdownMenuRadioItem
                    v-for="(item, index) in Object.values(SCHEMA_COMPOSITIONS)"
                    :key="index"
                    :value="item"
                  >
                    {{ item }}
                  </DropdownMenuRadioItem>
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger as-child>
                  <div
                    class="invisible flex size-5 cursor-pointer items-center justify-center rounded-md p-1 group-hover/schema:visible"
                    :style="{
                      order: getOrder('settings'),
                    }"
                    @click="showSettings = !showSettings"
                  >
                    <Settings />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Advanced Settings</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider v-if="!isRoot && !isComposition(parentType)">
              <Tooltip>
                <TooltipTrigger as-child>
                  <div
                    class="flex size-5 cursor-pointer items-center justify-center rounded-md p-1"
                    :class="[
                      isRequired
                        ? 'bg-primary text-accent'
                        : 'invisible group-hover/schema:visible',
                    ]"
                    :style="{
                      order: getOrder('required'),
                    }"
                    @click="isRequired = !isRequired"
                  >
                    <Asterisk />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Required</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger as-child>
                  <div
                    class="flex size-5 items-center justify-center rounded-md p-1"
                    :class="[
                      type === 'null'
                        ? 'text-danger cursor-not-allowed'
                        : 'cursor-pointer',
                      isNullable
                        ? 'bg-primary text-accent'
                        : 'invisible group-hover/schema:visible',
                    ]"
                    :style="{
                      order: getOrder('nullable'),
                    }"
                    @click="isNullable = !isNullable"
                  >
                    <span class="text-[.6rem]">N</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Nullable</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          <div class="flex-2/5 flex h-full min-w-0">
            <textarea
              :value="modelValue?.description || ''"
              placeholder="Description"
              class="hover:bg-background not-focus:truncate z-1! focus:z-1000! focus:min-h-70 !focus:overflow-auto focus:bg-background w-full resize-none rounded-md bg-transparent p-1 outline-none hover:border focus:m-auto focus:overflow-auto focus:wrap-break-word focus:border"
              @input="updateDescription"
            />
          </div>
          <div
            v-if="parentType === SCHEMA_ITEM_TYPES.ARRAY"
            class="flex h-full shrink-0 grow-0 justify-end"
          >
            <div v-for="i in 5" :key="i" class="size-3" />
          </div>
          <div
            v-else
            class="flex h-full shrink-0 grow-0 items-center justify-end"
          >
            <TooltipProvider v-if="addMode === 'child'">
              <Tooltip>
                <TooltipTrigger as-child>
                  <Button size="icon" variant="ghost" @click="addChildNode">
                    <CirclePlus class="text-green-500" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left" align="start">
                  Add a Child Node
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <TooltipProvider v-if="addMode === 'sibling'">
              <Tooltip>
                <TooltipTrigger as-child>
                  <Button size="icon" variant="ghost" @click="addSiblingNode">
                    <CirclePlus class="text-green-500" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="left" align="start">
                  Add a Sibling Node
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            <DropdownMenu v-if="addMode === 'both'">
              <DropdownMenuTrigger>
                <Button size="icon" variant="ghost">
                  <CirclePlus class="text-green-500" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent side="left" align="start">
                <DropdownMenuGroup>
                  <DropdownMenuItem @click="addSiblingNode"
                    >Add a Sibling Node</DropdownMenuItem
                  >
                  <DropdownMenuItem @click="addChildNode"
                    >ADd a Child Node</DropdownMenuItem
                  >
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button
              size="icon"
              variant="ghost"
              class="-ml-3 transition-all duration-300"
              :class="[
                !isDeletable && 'invisible',
                isRemoving && 'text-destructive hover:text-destructive',
              ]"
              @click="removeHandler"
            >
              <component :is="isRemoving ? CircleX : CircleMinus" />
            </Button>
          </div>
        </div>
        <div v-if="isExpanded" ref="childrenContainer">
          <template v-if="type === SCHEMA_ITEM_TYPES.OBJECT">
            <SchemaItem
              v-for="key in properties"
              :key="key"
              v-model="modelValue.properties[key]"
              :level="level + 1"
              :field-name="key"
              :parent-type="type"
              :is-required="modelValue?.required?.includes(key)"
              :use-ref
              @update:field-name="updatePropertyKey(key, $event)"
              @update:is-required="updateRequired(key, $event)"
              @add-sibling="addChildNode"
              @on-delete="removeProperty(key)"
            />
            <div v-if="properties.length === 0" class="my-1 flex">
              <div :style="{ width: `${rowIndent + baseIndent * 2}px` }"></div>
              <div class="space-x-2">
                <span class="opacity-50">No fields defined</span>
                <span
                  class="cursor-pointer hover:underline"
                  @click="addChildNode"
                >
                  Add
                </span>
              </div>
            </div>
          </template>

          <template v-if="type === SCHEMA_ITEM_TYPES.ARRAY">
            <SchemaItem
              v-model="modelValue.items"
              :level="level + 1"
              :parent-type="type"
              :use-ref
            />
          </template>

          <template v-if="isComposition(type)">
            <SchemaItem
              v-for="(item, index) in modelValue[type]"
              :key="index"
              v-model="modelValue[type][index]"
              :level="level + 1"
              :field-name="index"
              :parent-type="type"
              :use-ref
              @on-delete="removeCompositionItem(index)"
            />
          </template>
        </div>
      </div>
    </div>

    <SchemaItemConfiguration
      v-model="modelValue"
      v-model:open="showSettings"
      v-model:is-required="isRequired"
      :parent-type
    />
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent, ref, watch } from "vue";
import { useSortable } from "@vueuse/integrations/useSortable";
import {
  SCHEMA_ITEM_TYPES,
  SCHEMA_COMPOSITIONS,
  SCHEMA_REFERENCE_KEY,
  SORT_OPTIONS,
} from "@/lib/constants";

import { useSchemaItem } from "@/composables/useSchemaItem";

import SchemaItemConfiguration from './SchemaItemConfiguration.vue';

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";


import {
  Asterisk,
  Box,
  ChevronRight,
  CircleMinus,
  CirclePlus,
  CircleX,
  GripVertical,
  Settings,
} from "lucide-vue-next";
// import { toast } from "vue-sonner";

const SchemaItem = defineAsyncComponent(() => import("./SchemaItem.vue"));

const emits = defineEmits(["onDelete", "addSibling"]);
const modelValue = defineModel({
  type: Object,
  required: true,
});

const fieldName = defineModel("fieldName", {
  type: [String, Number],
  default: null,
  required: true,
});

const isRequired = defineModel("isRequired", {
  type: Boolean,
  default: false,
});

const {
  level = 0,
  parentType = undefined,
  useRef = false,
} = defineProps({
  level: Number,
  parentType: String,
  useRef: Boolean,
});

const { $ref, type, isNullable, isComposition, isReference } =
  useSchemaItem(modelValue);

const baseIndent = 16;
const isExpanded = ref(level === 0 || parentType === SCHEMA_ITEM_TYPES.OBJECT);
const childrenContainer = ref(null);
const showSettings = ref(false);
const isRemoving = ref(false);

const isRoot = computed(() => level === 0);

const isExpandable = computed(() => {
  const expandableTypes = [
    SCHEMA_ITEM_TYPES.OBJECT,
    SCHEMA_ITEM_TYPES.ARRAY,
    ...Object.values(SCHEMA_COMPOSITIONS),
  ];
  return expandableTypes.includes(type.value);
});

const isSortable = computed(() => {
  return (
    !isRoot.value &&
    parentType !== SCHEMA_ITEM_TYPES.ARRAY &&
    !isComposition(parentType)
  );
});

const isDeletable = computed(() => {
  if (isComposition(parentType)) {
    // first item from schema composition is not deletable
    return fieldName.value != 0;
  }
  return !isRoot.value && parentType !== SCHEMA_ITEM_TYPES.ARRAY;
});

const rowIndent = computed(() => {
  const multiplier = isExpandable.value ? Math.max(level, 1) : level + 1;
  const value = baseIndent * multiplier;

  if (!isRoot.value && !isSortable.value) {
    return value + baseIndent;
  }

  return value;
});

const addMode = computed(() => {
  if (isRoot.value) {
    if (type.value === SCHEMA_ITEM_TYPES.OBJECT) return "child";
    else if (isComposition(type.value)) return "child";
    else return "none";
  } else {
    if (type.value === SCHEMA_ITEM_TYPES.OBJECT || isComposition(type.value))
      return "both";
    else return "sibling";
  }
});

const getTypeColor = computed(() => {
  switch (type.value) {
    case SCHEMA_ITEM_TYPES.ARRAY:
      return "text-red-500";
    case SCHEMA_ITEM_TYPES.STRING:
      return "text-green-500";
    case SCHEMA_ITEM_TYPES.NUMBER:
    case SCHEMA_ITEM_TYPES.INTEGER:
    case SCHEMA_REFERENCE_KEY:
      return "text-purple-500";
    case SCHEMA_ITEM_TYPES.BOOLEAN:
      return "text-pink-500";
    case SCHEMA_ITEM_TYPES.OBJECT:
      return "text-blue-500";
    case SCHEMA_ITEM_TYPES.NULL:
      return "text-yellow-500";
    case SCHEMA_COMPOSITIONS.ALL_OF:
    case SCHEMA_COMPOSITIONS.ANY_OF:
    case SCHEMA_COMPOSITIONS.ONE_OF:
      return "text-orange-500";
    default:
      return "text-gray-500";
  }
});

const properties = computed(() => {
  return Object.keys(modelValue.value?.properties || {});
});

watch(type, (value) => {
  if (isReference(value)) {
    showSettings.value = true;
  }
});

watch($ref, () => {
  showSettings.value = false;
});

useSortable(childrenContainer, properties, {
  ...SORT_OPTIONS,
  onEnd: (e) => {
    const { oldIndex, newIndex } = e;
    const entries = Object.entries(modelValue.value.properties);
    const [removed] = entries.splice(oldIndex, 1);
    entries.splice(newIndex, 0, removed);
    modelValue.value = {
      ...modelValue.value,
      properties: Object.fromEntries(entries),
    };
  },
});

function getOrder(elementType) {
  const state = `${isRequired.value ? "R" : ""}${isNullable.value ? "N" : ""}`;

  const orders = {
    settings: {
      R: 2,
      RN: 3,
      "": 1,
      N: 2,
    },
    required: {
      R: 1,
      RN: 1,
      "": 2,
      N: 3,
    },
    nullable: {
      R: 3,
      RN: 2,
      "": 3,
      N: 1,
    },
  };

  return orders[elementType][state] || 1;
}

function updateDescription(e) {
  modelValue.value = {
    ...modelValue.value,
    description: e.target.value,
  };
}

function updatePropertyKey(oldKey, newKey) {
  if (!modelValue.value.properties[oldKey] || oldKey === newKey) return;

  const entries = Object.entries(modelValue.value.properties);
  const isDuplicateKey = entries.some((o) => o[0] === newKey);
  if (isDuplicateKey) {
    // toast.error("Duplicated Field!", {
    //   description: `Field of '${newKey}' is duplicated. Please check.`,
    //   duration: 3000,
    // });
    return;
  }

  const newEntries = entries.map(([key, value]) =>
    key === oldKey ? [newKey, value] : [key, value]
  );
  modelValue.value = {
    ...modelValue.value,
    properties: Object.fromEntries(newEntries),
  };
}

function updateRequired(key, value) {
  let required = modelValue.value?.required ?? [];
  if (value) {
    required.push(key);
  } else {
    required = required.filter((v) => v !== key);
  }

  modelValue.value = {
    ...modelValue.value,
    required,
  };
}

function addChildNode() {
  if (isComposition(type.value)) {
    const child = {
      type: SCHEMA_ITEM_TYPES.OBJECT,
      properties: {},
    };
    modelValue.value[type.value].push(child);
  } else if (
    type.value === SCHEMA_ITEM_TYPES.OBJECT ||
    parentType === SCHEMA_ITEM_TYPES.OBJECT
  ) {
    console.log(modelValue.value)
    if (!modelValue.value.properties) {
      modelValue.value = {
        ...modelValue.value,
        properties: {},
      };
    }
    const entries = Object.entries(modelValue.value.properties);
    entries.push(["", { type: SCHEMA_ITEM_TYPES.STRING }]);
    modelValue.value = {
      ...modelValue.value,
      properties: Object.fromEntries(entries),
    };
  }
}

function addSiblingNode() {
  emits("addSibling");
}

function removeHandler() {
  if (!isRemoving.value) {
    isRemoving.value = true;
    setTimeout(() => {
      isRemoving.value = false;
    }, 3000);
  } else {
    emits("onDelete");
  }
}

function removeProperty(key) {
  const entries = Object.entries(modelValue.value.properties);
  const newEntries = entries.filter((p) => p[0] !== key);
  modelValue.value = {
    ...modelValue.value,
    properties: Object.fromEntries(newEntries),
  };
}

function removeCompositionItem(index) {
  modelValue.value[type.value].splice(index, 1);
}
</script>
