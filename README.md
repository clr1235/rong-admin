# Vue 3 + Typescript + Vite

## .env文件
  .env                    # 所有情况下都会加载
  .env.local              # 所有情况下都会加载，但会被git忽略
  .env.[mode]             # 只在指定模式下加载
  .env.[mode].local       #只在指定模式下加载，但会被git忽略
  这些文件中存放一些项目中需要用到的环境变量。
  Vite 使用 dotenv 从你的 环境目录[.env] 中的下列文件加载额外的环境变量。
  只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码。
  加载的环境变量也会通过 import.meta.env 暴露给客户端源码。

## 根目录下创建build文件夹
  其内放置一些配置vite.config.ts文件相关的东西
## 根目录下创建types文件夹
  其内放置一些 ts 的类型
