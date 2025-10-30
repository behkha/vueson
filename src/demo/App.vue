<template>
  <div class="p-4 space-y-4 h-screen flex flex-col">
    <div class="flex items-center gap-2 justify-center">
      <Braces />
      <h1 class="text-xl font-semibold">Vueson Demo</h1>
    </div>
    <div class="flex h-full gap-4 overflow-auto">
      <Vueson v-model="schema" class="basis-1/2" />
      <div
        ref="editorRef"
        class="flex h-full w-full shrink-0 grow flex-col basis-1/2 border rounded-xl"
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, shallowRef, watch } from "vue";
import * as monaco from 'monaco-editor';
import Vueson from "@/lib/Vueson.vue";
import { Braces } from "lucide-vue-next";

import { useColorMode } from "@vueuse/core";
const colorMode = useColorMode()

const editorRef = ref(null)
const editor = shallowRef(null)
const schema = ref({
  type: "object",
  properties: {
    name: {
      type: "string",
      description: "The display name of the form or schema",
    },
    description: {
      type: "string",
      description: "Optional description explaining the purpose of the form",
    },
    fields: {
      type: "array",
      description: "List of form fields that make up the schema",
      items: {
        type: "object",
        properties: {
          id: {
            type: "string",
            description: "Unique identifier for the field, used in form data",
          },
          label: {
            type: "string",
            description: "User-friendly label displayed next to the field",
          },
          type: {
            type: "string",
            enum: ["text", "number", "email", "select", "checkbox", "date"],
            description: "The data type and input widget for this field",
          },
          required: {
            type: "boolean",
            description:
              "Whether this field must be filled out before submission",
          },
          placeholder: {
            type: "string",
            description: "Hint text shown inside empty input fields",
          },
          options: {
            type: "array",
            description: "Available choices for select/dropdown fields",
            items: {
              type: "object",
              properties: {
                value: {
                  type: "string",
                  description:
                    "The actual value stored when this option is selected",
                },
                label: {
                  type: "string",
                  description:
                    "The display text shown for this option in the dropdown",
                },
              },
            },
          },
        },
        required: ["id", "label", "type"],
      },
    },
  },
  required: ["name", "fields"],
});

const theme = computed(() => {
  return colorMode.value === 'dark' ? 'vs-dark' : 'vs';
});

watch(theme, value => {
  editor.value?.updateOptions({
    theme: value
  });
});

onMounted(() => {
  editor.value = monaco.editor.create(editorRef.value, {
    value: JSON.stringify(schema.value, null, 2),
    language: 'json',
    theme: theme.value,
    automaticLayout: true,
    minimap: { enabled: false },
    suggest: {
      preview: true,
      showMethods: true,
      showFunctions: true,
      showConstructors: true,
      showFields: true,
      showVariables: true,
      showClasses: true,
      showStructs: true,
      showInterfaces: true,
      showModules: true,
      showProperties: true,
      showEvents: true,
      showOperators: true,
      showUnits: true,
      showValues: true,
      showConstants: true,
      showEnums: true,
      showEnumMembers: true,
      showKeywords: true,
      showWords: true,
      showColors: true,
      showFiles: true,
      showReferences: true,
      showFolders: true,
      showTypeParameters: true,
      showSnippets: true
    },
    quickSuggestions: {
      other: true,
      comments: true,
      strings: true
    },
    stickyScroll: {
      enabled: false
    },
    scrollBeyondLastLine: false
  });

  editor.value.onDidChangeModelContent(() => {
    const value = editor.value.getValue();
    try {
      const tempValue = JSON.parse(value);
      if (tempValue) {
        schema.value = tempValue
      }
    } catch (error) {
      //
    }
  });

  beautify()
});

function beautify() {
  editor.value?.getAction('editor.action.formatDocument').run();
}
</script>
