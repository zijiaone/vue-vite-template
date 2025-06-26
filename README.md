# Frontend Standard Template

这是一个基于 Vue 3 + Vite 的前端标准化模板项目。

## 项目特性

- 🚀 Vue 3 + Vite + TypeScript
- 📦 Pinia 状态管理
- 🌍 Vue I18n 国际化
- 🔌 Axios 网络请求
- 🎨 Less CSS 预处理器
- 📝 ESLint + Prettier + Stylelint 代码规范
- 🎯 Simple Git Hooks + Commitlint 提交规范

## 项目设置

### 环境要求

- Node.js >= 18.0.1
- npm >= 9.0.0（推荐）

### 安装依赖

```sh
npm install
```

### 开发环境编译和热重载

```sh
npm run dev
```

### 生产环境类型检查、编译和压缩

```sh
npm run build
```

## 功能使用说明

### Pinia 状态管理

项目使用 Pinia 作为状态管理方案，相比 Vuex 具有更好的 TypeScript 支持和更简洁的 API。

```typescript
// 在组件中使用
import { useCounterStore } from '@/stores';

const counter = useCounterStore();
```

### 国际化配置

项目使用 Vue I18n 实现多语言支持，语言文件位于 `src/locales` 目录。

```typescript
// 在组件中使用
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
console.log(t('hello')); // 输出对应语言的翻译文本

// 切换语言
const { locale } = useI18n();
locale.value = 'en-US'; // 切换到英文
```

### Axios 请求封装

项目对 Axios 进行了封装，支持请求拦截、响应拦截、统一错误处理等功能。

开发环境下需要创建 `.env.development` 文件：

```typescript
// 配置 api 域名
VITE_API_BASE_URL = 'http://api.example.com';
```

## 开发规范

### Git 提交规范

项目使用 Commitlint 规范化提交信息，提交格式如下：

```sh
# 格式
type(scope?): subject

# 示例
feat(user): add user login
fix(auth): fix token expired
chore: update dependencies
```

常用的提交类型：

- feat: 新功能
- fix: 修复 Bug
- docs: 文档更新
- style: 代码格式（不影响代码运行的变动）
- refactor: 重构（既不是新增功能，也不是修复 Bug）
- perf: 性能优化
- test: 增加测试
- chore: 构建过程或辅助工具的变动

### 代码风格

项目使用 ESLint、Prettier 和 Stylelint 进行代码规范和格式化，确保代码风格的一致性。在提交代码前，请确保代码已经过相关工具的检查和格式化。

```sh
# 运行 ESLint 检查
npm run lint

# 运行 Prettier 格式化
npm run format
```
