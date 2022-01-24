import { UserConfig, ConfigEnv, loadEnv } from 'vite'
import { resolve } from 'path';
import vue from '@vitejs/plugin-vue'
// 支持ts的日期工具
import { format } from 'date-fns'

import { wrapperEnv } from './build/utils'
import pkg from './package.json';

const { dependencies, devDependencies, name, version } = pkg;
const __APP_INFO__ = {
  pkg: { dependencies, devDependencies, name, version },
  lastBuildTime: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
};

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// 如果配置文件需要基于（dev/serve 或 build）命令或者不同的 模式 来决定选项，则可以选择导出这样一个函数
export default ({ command, mode }): UserConfig => {
  // 开发环境下 command值为serve；生产环境下command值为build
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  const { VITE_PUBLIC_PATH, VITE_DROP_CONSOLE, VITE_PORT, VITE_GLOB_PROD_MOCK, VITE_PROXY } =
    viteEnv;
  const prodMock = VITE_GLOB_PROD_MOCK;
  const isBuild = command === 'build';
  console.log(env, 'viteEnv----', process.cwd())
  return {
    // 开发或生产环境服务的公共基础路径。默认为 /
    base: VITE_PUBLIC_PATH,
    esbuild: {},
    resolve: {
      alias: [
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
        {
          find: '@',
          replacement: pathResolve('src') + '/',
        },
      ],
      dedupe: ['vue'],
    },
    // 定义全局常量替换方式。其中每项在开发环境下会被定义在全局，而在构建时被静态替换。
    define: {
      __APP_INFO__: JSON.stringify(__APP_INFO__),
    },
    plugins: [vue()],
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {},
          javascriptEnabled: true,
          additionalData: `@import "src/styles/var.less";`,
        },
      },
    },
  }
}
