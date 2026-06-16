# AI词典网站

这是 `AI概念字典` 的本地静态网站版本。

支持深色 / 明亮两种模式，顶部月亮或太阳按钮可以切换外观。

已补充 Codex 工作台专题概念，包括 Worktree、Skills、Plugins、AGENTS.md、Permissions、Hooks 等，现有 57 个概念。

## 打开方式

直接打开：

- `index.html`

## 更新方式

如果后续新增或修改概念卡片，在本目录运行：

```bash
node build-data.mjs
node build-audio.mjs
```

`build-data.mjs` 会重新读取上层 Markdown 概念卡片，`build-audio.mjs` 会为新增概念补英文发音音频。
