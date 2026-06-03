# 夸夸水水大王 · 一日通行卡

一个动森（动物森友会）风格的「彩虹屁 / 夸夸」单页应用，基于 [animal-island-ui](https://www.npmjs.com/package/animal-island-ui) 组件库构建。

## 技术栈

- Vite 6 + React 18 + TypeScript
- UI 组件库：`animal-island-ui`（Title / Card / Button / Switch / Checkbox / Radio / Tabs / Time / Modal / Divider / Footer / WeddingInvitation / Phone）
- 自定义图标：`src/icons/` 内置 33 个手绘 SVG（库自带 Icon 仅 10 个且不支持 color，故页面图标用自定义版本）

## 本地开发

```bash
npm install
npm run dev      # 本地开发服务器
npm run build    # 构建到 dist/
npm run preview  # 预览构建产物
```

## 部署

推送到 `main` 分支后，GitHub Actions（`.github/workflows/deploy.yml`）自动构建并发布到 GitHub Pages：<https://b41dr.github.io>

## 目录结构

```
src/
  main.tsx        入口，引入 animal-island-ui/style
  App.tsx         页面主体
  styles.css      页面级布局样式（组件样式由库提供）
  icons/
    Icon.tsx      图标组件
    paths.tsx     33 个 SVG path 数据 + ICON_LIST
```
