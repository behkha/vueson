<template>
  <div class="vueson group rounded-xl border flex flex-col">
    <slot name="header">
      <div class="min-h-13 flex items-center justify-between border-b p-2">
        <slot name="title">
          <span class="text-sm font-bold">Vueson</span>
        </slot>
        <slot name="action" />
      </div>
    </slot>

    <div>
      <SchemaItem v-model="modelValue" :use-ref="true" />
    </div>

    <div v-if="useDefinitions" class="border-t mt-auto">
      <div
        class="hover:bg-accent flex cursor-pointer items-center gap-2 p-2"
        :class="[definitionsExpanded ? '' : 'rounded-b-md']"
        @click="toggleDefinitions"
      >
        <component
          :is="definitionsExpanded ? ChevronDown : ChevronRight"
          class="size-4"
        />
        <span class="select-none text-sm">$defs</span>
      </div>
      <div v-if="definitionsExpanded" class="space-y-4 p-2">
        <div v-for="(key, index) in definitions" :key="key">
          <Vueson
            v-model="modelValue.$defs[key]"
            :title="key"
            :use-definitions="false"
          >
            <template #title>
              <div>
                <Input
                  :model-value="key"
                  placeholder="Key"
                  @blur="updateDefinitionKey(key, $event)"
                />
              </div>
            </template>

            <template #action>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger as-child>
                    <Button
                      size="icon"
                      variant="ghost"
                      @click="removeDefinition(index)"
                    >
                      <Trash2 class="text-destructive-foreground" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Remove</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </template>
          </Vueson>
        </div>
        <div :class="[definitions.length && 'mt-2']">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger as-child>
                <Button size="icon" @click="addDefinition">
                  <Plus />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>New definition</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, provide } from "vue";
import { $defsKey, SCHEMA_ITEM_TYPES } from "./constants";

import SchemaItem from "./SchemaItem.vue";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChevronDown, ChevronRight, Trash2, Plus } from "lucide-vue-next";

const modelValue = defineModel({
  type: Object,
  default: () => ({
    type: "object",
    properties: {},
  }),
  required: true,
});

const { useDefinitions = true } = defineProps({
  useDefinitions: Boolean,
});

const definitionsExpanded = ref(false);

const definitions = computed(() => {
  return Object.keys(modelValue.value?.$defs || {}) || [];
});
provide(
  $defsKey,
  computed(() => definitions.value)
);

function updateDefinitionKey(oldKey: string, event: Event) {
  const newKey = (event.target as HTMLInputElement).value || oldKey;
  if (newKey === oldKey) return;

  const entries = Object.entries(modelValue.value?.$defs || {});
  const isDuplicated = entries.some((item) => item[0] === newKey);
  if (isDuplicated) {
    // toast.error("Duplicated Key!", {
    //   description: `Key of '${newKey}' is duplicated. Please check.`,
    //   duration: 3000,
    // });
    return;
  }

  const newEntries = entries.map(([key, value]) =>
    key === oldKey ? [newKey, value] : [key, value]
  );
  modelValue.value = {
    ...modelValue.value,
    $defs: Object.fromEntries(newEntries),
  };
}

function toggleDefinitions() {
  if (!useDefinitions) return;
  definitionsExpanded.value = !definitionsExpanded.value;
}

function addDefinition() {
  const entries = Object.entries(modelValue.value?.$defs || {});
  entries.push(["", { type: SCHEMA_ITEM_TYPES.OBJECT, properties: {} }]);
  modelValue.value = {
    ...modelValue.value,
    $defs: Object.fromEntries(entries),
  };
}

function removeDefinition(index: number) {
  const entries = Object.entries(modelValue.value?.$defs || {});
  entries.splice(index, 1);
  modelValue.value = {
    ...modelValue.value,
    $defs: Object.fromEntries(entries),
  };
}
</script>
