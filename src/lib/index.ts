import type { App } from "vue";
import Vueson from "./Vueson.vue";

export { Vueson };

export default {
  install(app: App) {
    app.component("Vueson", Vueson);
  },
};
