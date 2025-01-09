# eslint-plugin-config-base
## 使用及初始化
### 安装
npm install eslint-plugin-config-base -D
### 如果项目使用typescript
项目根目录下tsconfig.json配置修改，参考如下其他根据项目需要配置：
{
  "compilerOptions": {
    "jsx": "preserve", // 这里需要改成preserve
    "target": "esnext",
    "module": "esnext",
    "baseUrl": "./",
    "moduleResolution": "node",
    "strictNullChecks": true, // 这里需要开启
    "importHelpers": true,
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
    "lib": [
      "esnext",
      "dom",
      "dom.iterable",
      "scripthost"
    ]
  },
  "include": [ // 这里需要配置
    "src/**/*.tsx",
    "src/**/*.ts",
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.vue"
  ],
  "exclude": [
    "node_modules"
  ]
}
.eslintrs.js配置，如果继承了其他插件，plugins、extends中最好请将本插件放到最后，因为本插件关闭了部分vue、typescript、sonarjs、eslint的规则
module.exports = {
  plugins: ['config-base'],
  extends: ['plugin:config-base/recommended'],
}
### 这里分为两个校验，一个校验代码合规性【目录：.husky/pre-commit.sh】，一个校验提交的合规性【目录：.husky/commit-msg.sh一次提交不能超过1000行代码，必填任务单，任务单格式】
#### 如果使用husky和lint-staged结合校验，配置package.json
- 默认使用husky和lint-staged结合校验，配置如下：
pckage.json文件中加上
"husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
 "lint-staged": {
    "src/**/*.{vue,jsx,js,ts,tsx}": [
      "prettier --write",
      "eslint --fix",
      "git add ."
    ]
  },
pckage.json中scripts对象下添加以下可执行脚本，先执行1再执行2
1、"config-base:husky": "config-base husky" 执行完后会在项目根目录下创建.husky文件夹
2、"copy-commit-all": "config-base copy", 将pre-commit.sh和commit-msg拷贝到当前项目录.husky下
#### 如果不使用husky,使用其他的插件校验的话，可以将需要的生命周期钩子代码拷贝到自己想要的目录，如果代码不完全适用，可以自行修改钩子中的代码
举个例子：将钩子函数直接拷贝到项目根目录的githook文件夹下
1、"copy-commit-all": "config-base copy ./githook", 将pre-commit.sh和commit-msg拷贝到当前项目./githook下
2、如果只需要拷贝pre-commit.sh文件，"copy-pre-commit": "config-base copy-pre-commit ./githook", 将pre-commit.sh拷贝到当前项目./githook下
3、如果只需要拷贝commit-msg.sh文件，"copy-ommit-msg": "config-base copy-commit-msg ./githook", 将commit-msg.sh拷贝到当前项目./githook下
## eslint开启校验规则
|规则|描述|状态|
|-|-|-|
|for-direction|禁止永远无法停止的for循环|error|
|no-var|要求使用let或const|error|
|prefer-const|常量类型数据使用const定义|error|
|no-shadow-restricted-names||error|
|no-global-assign||error|
|no-extra-boolean-cast||error|
|no-empty-pattern||error|
|no-duplicate-case||error|
|no-dupe-else-if||error|
|no-constant-condition||error|
|no-cond-assign||error|
|no-class-assign||error|
|no-debugger||error|
|eqeqeq||error|
|no-return-assign||error|
|max-lines||error|
|max-len||error|
|no-unneeded-ternary||error|
|no-eval||error|
|no-unused-expressions||error|
|no-use-before-define||error|
|max-lines-per-function||error|
|no-useless-catch||warn|
|no-unsafe-optional-chaining||warn|
|no-self-assign||warn|
|no-extra-parens||warn|
|default-case|要求switch函数提供default条件|warn|
|no-alert|禁止使用alert|warn|
|no-console|禁止打印日志|warn|
|no-duplicate-imports|禁止重复的导入|warn|
|max-depth|嵌套深度最大10|warn|
|max-params|函数最多7个参数|warn|
|default-case-last|要求switch函数的default条件放到最后|warn|

## prettier 规则配置
|规则|描述|值|
|-|-|-|
|singleQuote||true|
|semi||true|
|printWidth||180|
|tabWidth||2|
|trailingComma||es5|
|bracketSameLine||false|
|jsxBracketSameLine||true|
|jsxSingleQuote||true|
|arrowParens||avoid|
|htmlWhitespaceSensitivity||ignore|
|endOfLine||auto|
|vueIndentScriptAndStyle||true|
## vue开启的规则
|规则|描述|等级|
|-|-|-|
|jsx-uses-vars|防止jsx中使用的变量标记为未使用|error|
|no-dupe-keys|禁止重复字段名|error|
|no-dupe-v-else-if|禁止重复条件|error|
|no-duplicate-attributes|禁止属性重复|error|
|no-mutating-props|禁止修改组件属性|error|
|no-ref-as-operand|不允许使用ref()包装的值作为操作数|error|
|no-reserved-component-names|禁止在组件定义使用保留关键字|error|
|no-reserved-keys|禁止覆盖保留关键字|error|
|no-reserved-props|不允许在props中使用保留关键字|error|
|no-side-effects-in-computed-properties|禁止计算属性中的副作用|error|
|no-unused-component|禁止注册模板中未使用的组件|warn|
|no-unused-vars|禁止使用v-for指令或作用域属性的未使用变量定义|warn|
|no-use-computed-property-like-method|禁止像使用方法一样使用计算属性|error|
|require-render-return|要求render返回结果|error|
|require-slots-like-functions|强制将solts的属性用作函数|error|
|return-in-computed-preoperty|强制在计算属性中存在return语句|error|
## typescript开启的规则
|规则|描述|等级|
|-|-|-|
|@typescript-eslint/await-thenable|要求await用于thenable对象，比如Promise|error|
|@typescript-eslint/require-array-sort-compare|确保对原生排序方法都提供比较的回调函数|error|
|@typescript-eslint/no-unnecessary-condition|确保代码中出现不不必要的检查条件时报告错误，如总是返回true的条件|error|
|@typescript-eslint/no-unused-vars|不允许使用未使用的变量|error|
|@typescript-eslint/prefer-as-const|强制在字面量类型上使用const|error|
|@typescript-eslint/consistent-type-imports|确保类型倒入和值导入分开|error|
|@typescript-eslint/ban-types|不允许某些类型|warn|
|@typescript-eslint/no-extra-non-null-assertion|不允许额外的非空断言|warn|
|@typescript-eslint/no-inferrable-types|确保原始类型从已初始化或已默认的声明中省略|warn|
## sonar开启的规则
|规则|描述|级别|
|-|-|-|
|sonarjs/no-all-duolicated-branches|条件结构中所有的分支不应该有相同的实现|error|
|sonarjs/no-duolicated-branches|条件结构中的两个分支不应该有相同的实现|error|
|sonarjs/no-identical-conditions|条件结构中不应该有相同的条件|error|
|sonarjs/no-identical-functions|函数不应该有相同的实现|error|
|sonarjs/no-existent-operator|=+、=—、=！不可用|error|
|sonarjs/no-duolicate-string|字符串重复不要超过3次|warn|
|sonarjs/prefer-immediate-return|局部变量不应声明后立即抛出或返回|warn|
|sonarjs/prefer-single-boolean-return|布尔表达式的返回不应该包装成if-else的形式|warn|
|sonarjs/no-redundant-boolean|布尔值不应该用于比较|warn|
|sonarjs/no-inverted-boolean-check|布尔检查不应倒置|warn|
## no-useless-assign开启的规则
|规则|描述|级别|
|-|-|-|
|no-useless-assign/no-useless-assign|不允许无用的赋值|error|