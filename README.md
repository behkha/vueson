# Vueson

A visual JSON Schema builder component for Vue 3, built with TailwindCSS and shadcn-vue components.

## Features

- 🎨 Visual JSON Schema editing
- 🎯 Support for all JSON Schema data types
- 🔄 Schema composition (allOf, anyOf, oneOf) 
- 📝 Custom definitions with $refs
- 🎮 Advanced schema configuration options
- 🎭 Dark/Light theme support
- 🔧 Fully customizable UI
- ✨ Built with TypeScript

## Installation

```bash
# npm
npm install vueson
```

## Usage

### Register the Component

```ts
// main.ts
import { createApp } from 'vue'
import Vueson from 'vueson'

const app = createApp(App)
app.use(Vueson)
app.mount('#app')
```

### Use in Component

```vue
<script setup>
import { ref } from 'vue'
import { Vueson } from 'vueson'

const schema = ref({
  type: 'object',
  properties: {
    name: {
      type: 'string',
      description: 'The user name'
    }
  }
})
</script>

<template>
  <Vueson v-model="schema" />
</template>
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `modelValue` | `Object` | `{ type: 'object', properties: {} }` | The JSON Schema object |
| `useDefinitions` | `Boolean` | `true` | Enable/disable schema definitions ($defs) |

## Slots

| Name | Description |
|------|-------------|
| `header` | Custom header content |
| `title` | Custom title content |
| `action` | Custom action buttons in header |

## Features

### Data Types
- String
- Number
- Integer
- Boolean
- Array
- Object
- Null
- References ($ref)

### String Formats
- date-time
- date
- time
- email
- uri
- uuid
- And more...

### Schema Compositions
- allOf (AND)
- anyOf (OR)
- oneOf (XOR)

### Advanced Settings
- Validation rules
- Default values
- Examples
- Custom formats
- Pattern validation
- Min/Max constraints
- And more...

## Dependencies

- Vue 3
- TailwindCSS
- shadcn-vue components
- reka-ui
- lucide-vue-next

## Browser Support

Modern browsers and Internet Explorer 11+

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b feature/my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin feature/my-new-feature`
5. Submit a pull request

## License

MIT License © 2024-PRESENT [Behzad Khanlar](https://github.com/behkha)

## Credits

Built with ❤️ by [behkha](https://github.com/behkha)

## Support

- [Report issues](https://github.com/behkha/vueson/issues)
- [Request features](https://github.com/behkha/vueson/issues)
