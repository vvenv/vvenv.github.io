# vvenv.github.io

个人主页。纯静态，无构建、无依赖——全部内容就在 [`index.html`](index.html) 一个文件里：样式内联在 `<style>` 中，五张项目横图是手写的内联 SVG，配色走 CSS 变量，跟随深浅色主题自动换色。

## 本地预览

直接用浏览器打开 `index.html` 即可，或者：

```sh
python3 -m http.server 8000
```

## 部署

GitHub Pages，源为 `master` 分支根目录，自定义域 [5yong.com](https://5yong.com)（见 `CNAME`）。推上去就生效。

## 目录

```
index.html              # 站点全部内容（含样式、插图）
og.png                  # 分享卡片图 1200×630
apple-touch-icon.png    # iOS 主屏图标 180×180
icon-32.png             # PNG favicon 回退（现代浏览器走内联 SVG）
CNAME                   # 自定义域
.nojekyll               # 跳过 Jekyll 处理
```

没有构建脚本、没有依赖、没有 workflow 文件。
发布走 GitHub 内置的 `pages-build-deployment`，不需要在仓库里维护。
