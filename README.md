# AI词典网站

这是 `AI概念字典` 的本地静态网站版本。

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
