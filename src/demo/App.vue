<template>
  <div class="p-4 space-y-4 h-screen">
    <h1 class="text-xl font-semibold">Vueson Demo</h1>
    <Vueson v-model="schema" class="basis-1/2" />
    <div class="overflow-auto">
      <pre>{{ schema }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import Vueson from "@/lib/Vueson.vue";

const schema = ref({
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Schema Builder",
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "description": "The display name of the form or schema"
    },
    "description": {
      "type": "string",
      "description": "Optional description explaining the purpose of the form"
    },
    "fields": {
      "type": "array",
      "description": "List of form fields that make up the schema",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string",
            "description": "Unique identifier for the field, used in form data"
          },
          "label": {
            "type": "string",
            "description": "User-friendly label displayed next to the field"
          },
          "type": {
            "type": "string",
            "enum": ["text", "number", "email", "select", "checkbox", "date"],
            "description": "The data type and input widget for this field"
          },
          "required": {
            "type": "boolean",
            "description": "Whether this field must be filled out before submission"
          },
          "placeholder": {
            "type": "string",
            "description": "Hint text shown inside empty input fields"
          },
          "options": {
            "type": "array",
            "description": "Available choices for select/dropdown fields",
            "items": {
              "type": "object",
              "properties": {
                "value": {
                  "type": "string",
                  "description": "The actual value stored when this option is selected"
                },
                "label": {
                  "type": "string",
                  "description": "The display text shown for this option in the dropdown"
                }
              }
            }
          }
        },
        "required": ["id", "label", "type"]
      }
    }
  },
  "required": ["name", "fields"]
});
</script>
