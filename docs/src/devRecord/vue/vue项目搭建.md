## vite创建项目
``` js
pnpm create vite
```

## eslint

安装eslint
``` js
pnpm i eslint -D
```

生成eslint配置文件
``` js
npx eslint --init
```

按照eslint给的配置项一步步配置完毕之后会生成对应的配置文件，其配置内容大致说明如下

::: details 查看详情
``` js
module.exports = {
    // 运行环境
    "env": {
        "browser": true, // 浏览器端
        "es2021": true 
    },
    // 运行规则
    "extends": [
        "eslint:recommended", // 配置项开启推荐规则，推荐规则参考文档
        "plugin:vue/vue3-essential", // vue3语法规则
        "plugin:@typescript-eslint/recommended" // ts语法规则
    ],
    // 要为特定类型的文件指定处理器
    "overrides": [
    ],
    // 指定解析器
    "parser": "@typescript-eslint/parser", // ts解析器
    // 指定解析器选项
    "parserOptions": {
        "ecmaVersion": "latest", // 校验ECMA最新版本
        "sourceType": "module" // 设置为“script”（默认），或者“module”代码在ECMAScript模块中
    },
    // ESlint支持的第三方插件，在使用该插件前需要先进行安装，该eslint-plugin-前缀可从插件名称被省略
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    // eslint规则
    "rules": {}
}
```
:::

安装eslint校验插件

接下来安装vue3环境代码校验的一系列插件，主要解决规则冲突问题和优先级问题等。
``` js
pnpm install -D 
    eslint-plugin-import 
    eslint-plugin-vue 
    eslint-plugin-node
    eslint-plugin-prettier
    eslint-config-prettier
    eslint-plugin-node
    @babel/eslint-parser
```

安装完各种插件之后，接下来对eslint配置文件进行修改

::: details 查看详情
``` js
// @see https://eslint.bootcss.com/docs/rules/
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  /* 指定如何解析语法 */
  parser: "vue-eslint-parser",
  /** 优先级低于 parse 的语法解析配置 */
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
    jsxPragma: "React",
    ecmaFeatures: {
      jsx: true,
    },
  },
  /* 继承已有的规则 */
  extends: [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  plugins: ["vue", "@typescript-eslint"],
  /*
   * "off" 或 0    ==>  关闭规则
   * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
   */
  rules: {
    // eslint（https://eslint.bootcss.com/docs/rules/）
    "no-var": "error", // 要求使用 let 或 const 而不是 var
    "no-multiple-empty-lines": ["warn", { max: 1 }], // 不允许多个空行
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unexpected-multiline": "error", // 禁止空余的多行
    "no-useless-escape": "off", // 禁止不必要的转义字符
 
    // typeScript (https://typescript-eslint.io/rules)
    "@typescript-eslint/no-unused-vars": "error", // 禁止定义未使用的变量
    "@typescript-eslint/prefer-ts-expect-error": "error", // 禁止使用 @ts-ignore
    "@typescript-eslint/no-explicit-any": "off", // 禁止使用 any 类型
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-namespace": "off", // 禁止使用自定义 TypeScript 模块和命名空间。
    "@typescript-eslint/semi": "off",
 
    // eslint-plugin-vue (https://eslint.vuejs.org/rules/)
    "vue/multi-word-component-names": "off", // 要求组件名称始终为 “-” 链接的单词
    "vue/script-setup-uses-vars": "error", // 防止<script setup>使用的变量<template>被标记为未使用
    "vue/no-mutating-props": "off", // 不允许组件 prop的改变
    "vue/attribute-hyphenation": "off", // 对模板中的自定义组件强制执行属性命名样式
  },
};
```
:::

配置eslint的忽略文件 .eslintignore 内容配置如下：
``` js
dist
node_modules
```

新增针对eslint的package.json运行脚本

``` js
"lint":"eslint src",
"fix":"eslint src --fix"
```

## prettier

安装prettier
``` js
pnpm install -D eslint-plugin-prettier prettier eslint-config-prettier
```

安装完插件之后，在项目根目录下新建prettier的配置文件.prettierrc.json
``` js
{
  "singleQuote": true, // 要求字符串都是单引号
  "semi": false, // 设置分号取消
  "bracketSpacing": true,
  "htmlWhitespaceSensitivity": "ignore",
  "endOfLine": "auto",
  "trailingComma": "all",
  "tabWidth": 2  // 缩进占两个位置
}
```

配置prettier的忽略文件 .eslintignore 内容配置如下：
``` js
/dist/*
/html/*
.local
/node_modules/**
**/*.svg
**/*.sh
/public/*
```


新增针对prettier的package.json运行脚本

``` js
"format": "prettier --write \"./**/*.{html,vue,ts,js,json,md}\""
```


## stylelint

stylelint为css的lint工具。可格式化css代码，检查css语法错误与不合理的写法，指定css书写顺序等。我们的项目中使用scss作为预处理器，安装以下依赖：

安装stylelint
``` js
pnpm add -D
sass sass-loader postcss postcss-scss postcss-html  
stylelint stylelint-config-prettier stylelint-config-recess-order 
stylelint-config-recommended-scss stylelint-config-standard 
stylelint-config-standard-vue stylelint-scss stylelint-order 
stylelint-config-standard-scss 
```

安装完成之后开始对stylelint进行配置，在根目录下新建配置文件 .stylelintrc.cjs，其配置项内容如下：

::: details 查看详情
``` js
// @see https://stylelint.bootcss.com/
module.exports = {
  extends: [
    'stylelint-config-standard', // 配置stylelint拓展插件
    'stylelint-config-html/vue', // 配置 vue 中 template 样式格式化
    'stylelint-config-standard-scss', // 配置stylelint scss插件
    'stylelint-config-recommended-vue/scss', // 配置 vue 中 scss 样式格式化
    'stylelint-config-recess-order', // 配置stylelint css属性书写顺序插件,
    'stylelint-config-prettier', // 配置stylelint和prettier兼容
  ],
  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],
  ignoreFiles: [
    '**/*.js',
    '**/*.jsx',
    '**/*.tsx',
    '**/*.ts',
    '**/*.json',
    '**/*.md',
    '**/*.yaml',
  ],
  /**
   * null  => 关闭该规则
   * always => 必须
   */
  rules: {
    'value-keyword-case': null, // 在 css 中使用 v-bind，不报错
    'no-descending-specificity': null, // 禁止在具有较高优先级的选择器后出现被其覆盖的较低优先级的选择器
    'function-url-quotes': 'always', // 要求或禁止 URL 的引号 "always(必须加上引号)"|"never(没有引号)"
    'no-empty-source': null, // 关闭禁止空源码
    'selector-class-pattern': null, // 关闭强制选择器类名的格式
    'property-no-unknown': null, // 禁止未知的属性(true 为不允许)
    'block-opening-brace-space-before': 'always', //大括号之前必须有一个空格或不能有空白符
    'value-no-vendor-prefix': null, // 关闭 属性值前缀 --webkit-box
    'property-no-vendor-prefix': null, // 关闭 属性前缀 -webkit-mask
    'selector-pseudo-class-no-unknown': [
      // 不允许未知的选择器
      true,
      {
        ignorePseudoClasses: ['global', 'v-deep', 'deep'], // 忽略属性，修改element默认样式的时候能使用到
      },
    ],
  },
}
```
:::

配置stylelint的忽略文件 .stylelintignore  内容配置如下：
``` js
/node_modules/*
/dist/*
/html/*
/public/*
```


新增针对stylelint的package.json运行脚本
``` js
"lint:eslint": "eslint src/**/*.{ts,vue} --cache --fix",
"lint:style": "stylelint src/**/*.{css,scss,vue} --cache --fix"
```

## husky

我们虽然已经集成好了代码校验工具，但是需要每次手动的去执行命令才会格式化我们的代码。如果有人没有对代码进行格式化就提交到了远程仓库中，那这个规范显然就没什么用。所以我们需要强制让开发人员按照约定好的代码规范来提交。

要做到这件事情，就需要利用husky在代码提交之前触发git hook(git在客户端的钩子)，让git hook执行 pnpm run format 来自动的格式化我们的代码。 

::: danger 注意
你要先进行 git init 创建本地库husky才会起作用
:::

安装husky
``` js
pnpm install -D husky
```

生成husky配置目录及文件
``` js
npx husky-init
```

执行完该命令之后，会在根目录下生成个一个.husky目录，在这个目录下面会有一个pre-commit文件，在我们执行git commit的时候会先执行pre-commit文件里面的命令

配置pre-commit文件
``` js 
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
pnpm run format
```

## commitlint

对于我们的commit信息，也是有统一规范的，不能随便写，要让每个人都按照统一的格式填写，对此我们可以利用 commitlint 来实现。

安装commitlint
``` js
pnpm add @commitlint/config-conventional @commitlint/cli -D
```

新建commitlint配置文件

在根目录新建 commitlint.config.cjs 文件，添加如下配置代码

::: details 查看详情
``` js
module.exports = {
  extends: ['@commitlint/config-conventional'],
  // 校验规则
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'build',
      ],
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72],
  },
}
```
:::


新增针对commitlint的package.json运行脚本
``` js
"commitlint": "commitlint --config commitlint.config.cjs -e -V"
```

配置完后，现在当我们填写 commit 信息的时候，就必须要携带着下面的 subject 了。
``` js
'feat', //新特性、新功能
'fix', //修改bug
'docs', //文档修改
'style', //代码格式修改, 注意不是 css 修改
'refactor', //代码重构
'perf', //优化相关，比如提升性能、体验
'test', //测试用例修改
'chore', //其他修改, 比如改变构建流程、或者增加依赖库、工具等
'revert', //回滚到上一个版本
'build', //编译相关的修改，例如发布版本、对项目构建或者依赖的改动
```

接下来继续配置husky，执行如下命令生成commit-msg文件
``` js
npx husky add .husky/commit-msg 
```

配置commit-msg文件
``` js
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"
pnpm commitlint
```

当我们 commit 提交信息时，就不能再随意写了，必须是 git commit -m 'fix: xxx' 符合类型的才可以。

::: danger 注意
subject的后面需要用英文的冒号 : ，且冒号后面是需要空一格的，这个空格是不能省略的
:::

## 强制使用pnpm包管理工具

团队开发项目的时候，需要统一包管理器工具，因为不同的包管理器工具下载同一个依赖，可能版本不一样，导致项目出现bug问题，因此包管理器工具需要统一管理

在根目录创建 scripts/preinstall.js 文件并进行配置
``` js
if (!/pnpm/.test(process.env.npm_execpath || '')) {
  console.warn(
    `\u001b[33mThis repository must using pnpm as the package manager ` +
      ` for scripts to work properly.\u001b[39m\n`,
  )
  process.exit(1)
}
```

新增检测包管理工具的package.json运行脚本
``` js
"preinstall": "node ./scripts/preinstall.js"
```

配置完命令之后，当我们使用npm或者yarn来安装包的时候，就会报错了。原理就是在install的时候会触发preinstall（npm提供的生命周期钩子）这个文件里面的代码。

## src别名配置

在vite.config.ts中进行如下配置：
``` js
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
export default defineConfig({
    plugins: [vue()],
    resolve: {
        alias: {
            "@": path.resolve("./src") // 相对路径别名配置，使用 @ 代替 src
        }
    }
})
```

在tsconfig.json文件中进行如下配置
``` js
{
  "compilerOptions": {
    "baseUrl": "./", // 解析非相对模块的基地址，默认是当前目录
    "paths": { //路径映射，相对于baseUrl
      "@/*": ["src/*"] 
    }
  }
}
```

## 环境变量配置

项目开发过程中，至少会经历开发环境、测试环境和生产环境(即正式环境)三个阶段。不同阶段请求的状态(如接口地址等)不尽相同，若手动切换接口地址是相当繁琐且易出错的。于是环境变量配置的需求就应运而生，我们只需做简单的配置，把环境状态切换的工作交给代码完成。

根目录新增.env.development文件并进行如下配置
``` js
NODE_ENV = 'development'
VITE_APP_TITLE = '商品后台管理系统'
VITE_APP_BASE_API = '/dev-api'
```

根目录新增.env.production文件并进行如下配置
``` js
NODE_ENV = 'production'
VITE_APP_TITLE = '商品后台管理系统'
VITE_APP_BASE_API = '/prod-api'
```

根目录新增.env.test文件并进行如下配置
``` js
NODE_ENV = 'test'
VITE_APP_TITLE = '商品后台管理系统'
VITE_APP_BASE_API = '/test-api'
```
::: warning 提示
变量必须以 VITE_ 为前缀才能暴露给外部读取

在项目中可以通过 import.meta.env 的方式获取环境变量 
:::


## 自动导入vue相关的api

安装插件
``` js
npm i unplugin-auto-import -D
```

配置vite.config.ts
``` js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
 
export default defineConfig({
 
  plugins: [vue(),
    AutoImport({
      imports: ['vue','vue-router', 'pinia'], // [!code highlight]
      //注意这个配置和src同级 // [!code highlight]
      dts: './auto-imports.d.ts' // [!code highlight]
    })
  ],
  base: '/',
})
```

::: warning 提示
配置完成后，运行 npm run dev 命令，会自动在项目根目录位置下生成 auto-imports.d.ts 这个文件
:::

配置tsconfig.json
``` js
  "include": [
    "src/**/*.ts",
    "src/**/*.d.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "./*.d.ts", 
    "./auto-imports.d.ts",  // [!code highlight]
  ]
```

