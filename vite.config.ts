import { UserConfig, ConfigEnv, loadEnv } from 'vite'
import { resolve } from 'path';
// 支持ts的日期工具
import { format } from 'date-fns'

import { createVitePlugins } from './build/vite/plugin';
import { OUTPUT_DIR } from './build/constant';
import { wrapperEnv } from './build/utils'
import { createProxy } from './build/vite/proxy';
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
export default ({ command, mode }: ConfigEnv): UserConfig => {
  // 开发环境下 command值为serve；生产环境下command值为build
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const viteEnv = wrapperEnv(env);
  const { VITE_PUBLIC_PATH, VITE_DROP_CONSOLE, VITE_PORT, VITE_GLOB_PROD_MOCK, VITE_PROXY } =
    viteEnv;
  const prodMock = VITE_GLOB_PROD_MOCK;
  const isBuild = command === 'build';
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
    plugins: createVitePlugins(viteEnv, isBuild, prodMock),
    css: {
      preprocessorOptions: {
        less: {
          modifyVars: {},
          javascriptEnabled: true,
          additionalData: `@import "src/styles/var.less";`,
        },
      },
    },
    // 开发服务器配置
    server: {
      host: true,
      port: VITE_PORT,
      proxy: createProxy(VITE_PROXY),
    },
    // 依赖优化配置
    optimizeDeps: {
      include: [],
      exclude: ['vue-demi'],
    },
    // 打包构建配置
    build: {
      // 构建目标
      target: 'es2015',
      // 打包文件的输出路径，相对于根目录而言，默认为dist
      outDir: OUTPUT_DIR,
      terserOptions: {
        compress: {
          // keep_infinity设置为true方式无限压缩，导致Chrome上的性能问题
          keep_infinity: true,
          // 是否丢弃 console
          drop_console: VITE_DROP_CONSOLE,
        },
      },
      // chunk 大小警告的限制（以 kbs 为单位）
      chunkSizeWarningLimit: 2000,
    },
  }
}
