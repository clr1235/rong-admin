import { createApp } from 'vue';
import MakeitCaptcha from 'makeit-captcha';
import 'makeit-captcha/dist/captcha.min.css';
import './styles/tailwind.css';
import { setupStore } from './store';
import router, { setupRouter } from './router';
import { setupNaive } from '@/plugins';

import App from './App.vue';
async function init() {
  const app = createApp(App);
  // 全局注册滑块组件
  app.use(MakeitCaptcha);
  // 全局注册一些常用的ui组件
  setupNaive(app);
  // 全局注册自定义组件

  // 全局注册自定义指令

  // 注册全局的store
  setupStore(app);
  // 挂载路由
  await setupRouter(app);
  // 路由准备就绪之后挂载实例
  await router.isReady();
  // 挂载
  app.mount('#app', true);
}
void init();
