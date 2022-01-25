import type { App } from 'vue';
import { createStore } from 'vuex';

// 创建store
const initState = {
  count: 0,
};
const store = createStore({
  state: initState,
});
export function setupStore(app: App<Element>) {
  app.use(store);
}
