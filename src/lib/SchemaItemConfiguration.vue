<template>
  <Dialog v-model:open="open">
    <DialogScrollContent>
      <DialogHeader>
        <DialogTitle>Advanced Settings</DialogTitle>
        <DialogDescription>
          Configure the advanced settings for the {{ type }} type.
        </DialogDescription>
      </DialogHeader>

      <div class="space-y-5">
        <Select v-if="canChangeType" v-model="type">
          <SelectTrigger class="w-full">
            <SelectValue placeholder="Select a type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel class="text-muted-foreground text-xs"
                >Reference</SelectLabel
              >
              <SelectItem :value="SCHEMA_REFERENCE_KEY">
                <Box class="text-purple-500" />
                reference
              </SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel class="text-muted-foreground text-xs"
                >Primitives</SelectLabel
              >
              <SelectItem
                v-for="item in Object.values(SCHEMA_ITEM_TYPES)"
                :key="item"
                :value="item"
              >
                {{ item }}
              </SelectItem>
            </SelectGroup>
            <SelectGroup>
              <SelectLabel class="text-muted-foreground text-xs"
                >Compositions</SelectLabel
              >
              <SelectItem
                v-for="item in Object.values(SCHEMA_COMPOSITIONS)"
                :key="item"
                :value="item"
              >
                {{ item }}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <div class="flex items-center gap-2">
          <div
            v-if="isPrimitive(parentType)"
            class="flex items-center space-x-2"
          >
            <Switch v-model="isRequired" id="is-required" />
            <Label for="is-required">Required</Label>
          </div>
          <div class="flex items-center space-x-2">
            <Switch v-model="isNullable" id="is-nullable" />
            <Label for="is-nullable">Nullable</Label>
          </div>
          <div class="flex items-center space-x-2">
            <Switch v-model="isDeprecated" id="is-deprecated" />
            <Label for="is-deprecated">Deprecated</Label>
          </div>
        </div>

        <Separator class="my-2" />

        <template v-if="isTypeValidForConstOrEnum">
          <div class="space-y-4">
            <div class="flex items-center gap-2">
              <div class="flex items-center space-x-2">
                <Switch v-model="isEnum" id="is-enum" />
                <Label for="is-enum">Enum</Label>
              </div>
              <div class="flex items-center space-x-2">
                <Switch v-model="isConst" id="is-const" />
                <Label for="is-const">Const</Label>
              </div>
            </div>

            <div v-if="isConst">
              <Input
                v-if="type === SCHEMA_ITEM_TYPES.STRING"
                v-model="constValue"
                placeholder="const value"
              />
              <Input
                v-else
                v-model="constValue"
                type="number"
                placeholder="const value"
              />
            </div>

            <div v-if="isEnum">
              <TagsInput
                v-model="enumValue"
                :add-on-tab="true"
                :add-on-paste="true"
                :duplicate="false"
              >
                <TagsInputItem
                  v-for="item in enumValue"
                  :key="item"
                  :value="item"
                >
                  <TagsInputItemText />
                  <TagsInputItemDelete />
                </TagsInputItem>

                <TagsInputInput placeholder="Enum values..." />
              </TagsInput>
            </div>
          </div>

          <Separator class="my-2" />
        </template>

        <div class="w-full space-y-5">
          <template v-if="type === SCHEMA_ITEM_TYPES.STRING">
            <Popover>
              <PopoverTrigger class="w-full">
                <div class="grid w-full items-center gap-1.5">
                  <Label for="format">Format</Label>
                  <Input
                    v-model="modelValue.format"
                    class="w-full"
                    id="format"
                    type="email"
                    placeholder="Select format"
                  />
                </div>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                class="max-h-[50dvh] overflow-y-auto p-2"
              >
                <div>
                  <div
                    v-for="item in stringFormats"
                    :key="item"
                    class="hover:bg-muted transform-gpu cursor-pointer rounded-md p-2 transition-colors duration-300"
                    @click="modelValue.format = item"
                  >
                    {{ item }}
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <div class="flex items-center gap-4">
              <NumberField
                v-model="modelValue.minLength"
                class="w-1/2"
                id="min_length"
                placeholder=">= 0"
                :default-value="0"
                :min="0"
              >
                <Label for="min_length">Min Length</Label>
                <NumberFieldContent>
                  <NumberFieldDecrement />
                  <NumberFieldInput />
                  <NumberFieldIncrement />
                </NumberFieldContent>
              </NumberField>

              <NumberField
                v-model="modelValue.maxLength"
                class="w-1/2"
                id="max_length"
                placeholder=">= 0"
                :default-value="0"
                :min="0"
              >
                <Label for="max_length">Max Length</Label>
                <NumberFieldContent>
                  <NumberFieldDecrement />
                  <NumberFieldInput />
                  <NumberFieldIncrement />
                </NumberFieldContent>
              </NumberField>
            </div>

            <div class="grid w-full items-center gap-1.5">
              <Label for="default">Default</Label>
              <Input
                v-model="modelValue.default"
                id="default"
                type="text"
                placeholder="Default"
              />
            </div>

            <div class="grid w-full items-center gap-1.5">
              <Label for="pattern">Pattern</Label>
              <Input
                v-model="modelValue.pattern"
                id="pattern"
                type="text"
                placeholder="^[A-Za-z0-9-_]+"
              />
            </div>
          </template>

          <template v-if="type === SCHEMA_ITEM_TYPES.INTEGER">
            <Popover>
              <PopoverTrigger class="w-full">
                <div class="grid w-full items-center gap-1.5">
                  <Label for="format">Format</Label>
                  <Input
                    v-model="modelValue.format"
                    class="w-full"
                    id="format"
                    type="email"
                    placeholder="Select format"
                  />
                </div>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                class="max-h-[50dvh] overflow-y-auto p-2"
              >
                <div>
                  <div
                    v-for="item in integerFormats"
                    :key="item"
                    class="hover:bg-muted transform-gpu cursor-pointer rounded-md p-2 transition-colors duration-300"
                    @click="modelValue.format = item"
                  >
                    {{ item }}
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <NumberField
              v-model="modelValue.default"
              id="default"
              placeholder=">= 0"
              :default-value="0"
              :min="0"
            >
              <Label for="default">Default</Label>
              <NumberFieldContent>
                <NumberFieldDecrement />
                <NumberFieldInput />
                <NumberFieldIncrement />
              </NumberFieldContent>
            </NumberField>

            <div class="flex items-center gap-4">
              <NumberField
                v-model="modelValue.minimum"
                class="w-1/2"
                id="minimum"
                placeholder=">= 0"
                :default-value="0"
                :min="0"
              >
                <Label for="minimum">Minimum</Label>
                <NumberFieldContent>
                  <NumberFieldDecrement />
                  <NumberFieldInput />
                  <NumberFieldIncrement />
                </NumberFieldContent>
              </NumberField>

              <NumberField
                v-model="modelValue.maximum"
                class="w-1/2"
                id="maximum"
                placeholder=">= 0"
                :default-value="0"
                :min="0"
              >
                <Label for="maximum">Maximum</Label>
                <NumberFieldContent>
                  <NumberFieldDecrement />
                  <NumberFieldInput />
                  <NumberFieldIncrement />
                </NumberFieldContent>
              </NumberField>
            </div>

            <NumberField
              v-model="modelValue.multipleOf"
              id="multiple_of"
              placeholder=">= 0"
              :default-value="0"
              :min="0"
            >
              <Label for="multiple_of">Multiple Of</Label>
              <NumberFieldContent>
                <NumberFieldDecrement />
                <NumberFieldInput />
                <NumberFieldIncrement />
              </NumberFieldContent>
            </NumberField>
          </template>

          <template v-if="type === SCHEMA_ITEM_TYPES.BOOLEAN">
            <div class="grid w-full items-center gap-1.5">
              <Label for="default">Default</Label>
              <Select v-model="modelValue.default">
                <SelectTrigger class="w-full">
                  <SelectValue placeholder="Default value" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem :value="true">True</SelectItem>
                    <SelectItem :value="false">False</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </template>

          <template v-if="type === SCHEMA_ITEM_TYPES.ARRAY">
            <div class="flex items-center gap-4">
              <NumberField
                v-model="modelValue.minItems"
                class="w-1/2"
                id="min_items"
                placeholder=">= 0"
                :default-value="0"
                :min="0"
              >
                <Label for="min_items">Minimum Items</Label>
                <NumberFieldContent>
                  <NumberFieldDecrement />
                  <NumberFieldInput />
                  <NumberFieldIncrement />
                </NumberFieldContent>
              </NumberField>

              <NumberField
                v-model="modelValue.maxItems"
                class="w-1/2"
                id="max_items"
                placeholder=">= 0"
                :default-value="0"
                :min="0"
              >
                <Label for="max_items">Maximum Items</Label>
                <NumberFieldContent>
                  <NumberFieldDecrement />
                  <NumberFieldInput />
                  <NumberFieldIncrement />
                </NumberFieldContent>
              </NumberField>
            </div>

            <div class="flex items-center space-x-2">
              <Switch id="unique_items" />
              <Label for="unique_items">Unique Items</Label>
            </div>
          </template>

          <template v-if="type === SCHEMA_ITEM_TYPES.OBJECT">
            <div class="flex items-center gap-4">
              <NumberField
                v-model="modelValue.minProperties"
                class="w-1/2"
                id="min_properties"
                placeholder=">= 0"
                :default-value="0"
                :min="0"
              >
                <Label for="min_properties">Minimum Properties</Label>
                <NumberFieldContent>
                  <NumberFieldDecrement />
                  <NumberFieldInput />
                  <NumberFieldIncrement />
                </NumberFieldContent>
              </NumberField>

              <NumberField
                v-model="modelValue.maxProperties"
                class="w-1/2"
                id="max_properties"
                placeholder=">= 0"
                :default-value="0"
                :min="0"
              >
                <Label for="max_properties">Maximum Properties</Label>
                <NumberFieldContent>
                  <NumberFieldDecrement />
                  <NumberFieldInput />
                  <NumberFieldIncrement />
                </NumberFieldContent>
              </NumberField>
            </div>

            <div class="grid w-full items-center gap-1.5">
              <Label for="additional_properties">Additional Properties</Label>
              <Select v-model="modelValue.additionalProperties">
                <SelectTrigger class="w-full">
                  <SelectValue
                    id="additional_properties"
                    placeholder="Additional Properties"
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="Default">Default</SelectItem>
                    <SelectItem value="Allow">Allow</SelectItem>
                    <SelectItem value="Deny">Deny</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </template>

          <template v-if="type === SCHEMA_ITEM_TYPES.NUMBER">
            <Popover>
              <PopoverTrigger class="w-full">
                <div class="grid w-full items-center gap-1.5">
                  <Label for="format">Format</Label>
                  <Input
                    v-model="modelValue.format"
                    class="w-full"
                    id="format"
                    type="email"
                    placeholder="Select format"
                  />
                </div>
              </PopoverTrigger>
              <PopoverContent
                align="start"
                class="max-h-[50dvh] overflow-y-auto p-2"
              >
                <div>
                  <div
                    v-for="item in numberFormats"
                    :key="item"
                    class="hover:bg-muted transform-gpu cursor-pointer rounded-md p-2 transition-colors duration-300"
                    @click="modelValue.format = item"
                  >
                    {{ item }}
                  </div>
                </div>
              </PopoverContent>
            </Popover>

            <NumberField
              v-model="modelValue.default"
              id="default"
              placeholder=">= 0"
              :default-value="0"
              :min="0"
            >
              <Label for="default">Default</Label>
              <NumberFieldContent>
                <NumberFieldDecrement />
                <NumberFieldInput />
                <NumberFieldIncrement />
              </NumberFieldContent>
            </NumberField>

            <div class="flex items-center gap-4">
              <NumberField
                v-model="modelValue.minimum"
                class="w-1/2"
                id="minimum"
                placeholder=">= 0"
                :default-value="0"
                :min="0"
              >
                <Label for="minimum">Minimum</Label>
                <NumberFieldContent>
                  <NumberFieldDecrement />
                  <NumberFieldInput />
                  <NumberFieldIncrement />
                </NumberFieldContent>
              </NumberField>

              <NumberField
                v-model="modelValue.maximum"
                class="w-1/2"
                id="maximum"
                placeholder=">= 0"
                :default-value="0"
                :min="0"
              >
                <Label for="maximum">Maximum</Label>
                <NumberFieldContent>
                  <NumberFieldDecrement />
                  <NumberFieldInput />
                  <NumberFieldIncrement />
                </NumberFieldContent>
              </NumberField>
            </div>

            <NumberField
              v-model="modelValue.multipleOf"
              id="multiple_of"
              placeholder=">= 0"
              :default-value="0"
              :min="0"
            >
              <Label for="multiple_of">Multiple Of</Label>
              <NumberFieldContent>
                <NumberFieldDecrement />
                <NumberFieldInput />
                <NumberFieldIncrement />
              </NumberFieldContent>
            </NumberField>
          </template>

          <div
            v-if="isPrimitive(type) && type !== SCHEMA_ITEM_TYPES.NULL"
            class="grid w-full items-center gap-1.5"
          >
            <Label for="behavior">Behavior</Label>
            <Select v-model="modelValue.behavior">
              <SelectTrigger class="w-full">
                <SelectValue id="behavior" placeholder="Select a behavior" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Behaviors</SelectLabel>
                  <SelectItem
                    v-for="item in behaviors"
                    :key="item"
                    :value="item"
                  >
                    {{ item }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <div
            v-if="
              type === SCHEMA_ITEM_TYPES.STRING ||
              type === SCHEMA_ITEM_TYPES.INTEGER ||
              type === SCHEMA_ITEM_TYPES.NUMBER
            "
            class="grid w-full items-center gap-1.5"
          >
            <Label for="examples">Examples</Label>
            <TagsInput v-model="modelValue.examples">
              <TagsInputItem
                v-for="item in modelValue.examples"
                :key="item"
                :value="item"
              >
                <TagsInputItemText />
                <TagsInputItemDelete />
              </TagsInputItem>

              <TagsInputInput placeholder="Examples..." />
            </TagsInput>
          </div>

          <div
            v-if="isPrimitive(type)"
            class="grid w-full items-center gap-1.5"
          >
            <Label for="title">Title</Label>
            <Input
              v-model="modelValue.title"
              id="title"
              type="text"
              placeholder="Title"
            />
          </div>

          <div v-if="isComposition(type)" class="flex flex-col gap-2">
            <span>Select an option below to combine your schemas</span>
            <div>
              <RadioGroup v-model="type">
                <div
                  class="flex cursor-pointer items-start gap-2 rounded-md border p-4 transition-colors"
                  :class="[
                    type === SCHEMA_COMPOSITIONS.ALL_OF && 'border-primary',
                  ]"
                  @click="type = SCHEMA_COMPOSITIONS.ALL_OF"
                >
                  <RadioGroupItem :value="SCHEMA_COMPOSITIONS.ALL_OF" />
                  <div class="flex flex-col gap-1">
                    <p class="text-sm font-bold">AND</p>
                    <span class="text-muted-foreground">
                      allOf, must be valid against all sub-schemas
                    </span>
                  </div>
                </div>
                <div
                  class="flex cursor-pointer items-start gap-2 rounded-md border p-4 transition-colors"
                  :class="[
                    type === SCHEMA_COMPOSITIONS.ANY_OF && 'border-primary',
                  ]"
                  @click="type = SCHEMA_COMPOSITIONS.ANY_OF"
                >
                  <RadioGroupItem :value="SCHEMA_COMPOSITIONS.ANY_OF" />
                  <div class="flex flex-col gap-1">
                    <p class="text-sm font-bold">OR</p>
                    <span class="text-muted-foreground">
                      anyOf, must be valid against any of the sub-schemas
                    </span>
                  </div>
                </div>
                <div
                  class="flex cursor-pointer items-start gap-2 rounded-md border p-4 transition-colors"
                  :class="[
                    type === SCHEMA_COMPOSITIONS.ONE_OF && 'border-primary',
                  ]"
                  @click="type = SCHEMA_COMPOSITIONS.ONE_OF"
                >
                  <RadioGroupItem :value="SCHEMA_COMPOSITIONS.ONE_OF" />
                  <div class="flex flex-col gap-1">
                    <p class="text-sm font-bold">XOR</p>
                    <span class="text-muted-foreground">
                      oneOf, must be valid against exactly one of the
                      sub-schemas
                    </span>
                  </div>
                </div>
              </RadioGroup>
            </div>
          </div>

          <div v-if="isReference(type)">
            <Select v-model="$ref">
              <SelectTrigger class="w-full">
                <SelectValue placeholder="Select a schema reference">
                  <div v-if="$ref" class="flex items-center gap-2">
                    <Box class="text-purple-500" />
                    {{ $ref }}
                  </div>
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    v-for="item in definitions"
                    :key="item"
                    :value="item"
                  >
                    <div class="flex items-center gap-2">
                      <Box class="text-purple-500" />
                      <SelectItemText>
                        {{ item }}
                      </SelectItemText>
                    </div>
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </DialogScrollContent>
  </Dialog>
</template>

<script setup>
import { computed, inject } from "vue";
import {
  $defsKey,
  SCHEMA_COMPOSITIONS,
  SCHEMA_ITEM_TYPES,
  SCHEMA_REFERENCE_KEY,
} from "./constants";

import { useSchemaItem } from "@/composables/useSchemaItem";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectItemText,
} from "@/components/ui/select";
import {
  NumberField,
  NumberFieldContent,
  NumberFieldDecrement,
  NumberFieldInput,
  NumberFieldIncrement,
} from "@/components/ui/number-field";
import {
  TagsInput,
  TagsInputInput,
  TagsInputItem,
  TagsInputItemDelete,
  TagsInputItemText,
} from "@/components/ui/tags-input";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogScrollContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Box } from "lucide-vue-next";

const modelValue = defineModel({
  type: Object,
  required: true,
  default: () => ({}),
});

const definitions = inject($defsKey, []);

const {
  $ref,
  type,
  isNullable,
  isDeprecated,
  isEnum,
  isConst,
  enumValue,
  constValue,
  isPrimitive,
  isComposition,
  isReference,
} = useSchemaItem(modelValue);

const open = defineModel("open", {
  type: Boolean,
  default: false,
});

const isRequired = defineModel("isRequired", {
  type: Boolean,
  default: false,
});

const { parentType = undefined, canChangeType = true } = defineProps({
  parentType: String,
  canChangeType: Boolean,
});

const stringFormats = [
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
];

const integerFormats = [
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
];

const numberFormats = ["float", "double", "float32", "float64"];

const behaviors = ["Read/Write", "Read Only", "Write Only"];

const isTypeValidForConstOrEnum = computed(() => {
  const arr = [
    SCHEMA_ITEM_TYPES.STRING,
    SCHEMA_ITEM_TYPES.INTEGER,
    SCHEMA_ITEM_TYPES.INTEGER,
  ];
  return arr.includes(type.value);
});
</script>
