# Keep Learning

这是一个用于记录个人学习过程和技术实践的静态网站，内容主要包括 ROS 环境搭建、机器人底盘、机械臂、神经网络，以及开发过程中遇到的问题与解决方法。

## 网站地址

- 在线访问：[https://dongz803.github.io](https://dongz803.github.io)

## 主要栏目

- 首页：网站内容概览
- 个人简历：个人经历与技能介绍
- 机器人底盘：底盘开发和控制相关记录
- 机械臂：机械臂学习与实践笔记
- 神经网络：机器学习和神经网络相关内容
- 学习笔记：按照时间整理的技术文章

## 技术说明

网站使用 [Hexo](https://hexo.io/) 生成静态页面，采用 [NexT](https://theme-next.js.org/) 主题，并通过 GitHub Pages 发布。

主要内容位于 `source/` 目录：

```text
source/
├── _posts/          # 技术文章
├── arm/             # 机械臂栏目
├── chassis/         # 机器人底盘栏目
├── neural-network/  # 神经网络栏目
├── resume/          # 个人简历
└── index.md         # 网站首页
```

## 本地预览

请先安装 Node.js，然后在项目根目录运行：

```bash
npm install
npm run server
```

启动成功后，在浏览器访问：

```text
http://localhost:4000/
```

如需生成静态文件，可以运行：

```bash
npm run build
```

生成结果位于 `public/` 目录。

`npm run build` 还会自动将同一份生成结果复制到 `dist/`，供 Sites 发布。
因此，文章、栏目和样式都只需在本仓库维护一份。

## 发布方式

将修改提交并推送到 `main` 分支后，GitHub Actions 会自动构建网站并发布到 GitHub Pages。

## GitHub Pages 与 ChatGPT Sites 共用源码

这个项目保留 Hexo、NexT 和现有 Markdown 写作方式，同时接入 ChatGPT Sites。

| 项目 | GitHub Pages | ChatGPT Sites |
| --- | --- | --- |
| 内容来源 | `source/` | 同一份 `source/` |
| 页面与主题配置 | `_config.yml`、`_config.next.yml` | 同一份配置 |
| 静态输出 | `public/` | `dist/`，由 `public/` 原样复制 |
| 发布方式 | 推送至 GitHub `main` 后运行现有 Actions | 通过 Sites 保存版本并发布 |
| 网站身份 | `https://dongz803.github.io` | `.openai/hosting.json` 中的已有 Sites 项目 |

GitHub 是原始内容仓库；Sites 的源码仓库存放同一套源码及其版本。
Sites 初始为仅本人可访问，不改变原 GitHub Pages 网站的公开访问方式。
原网址仍作为页面的 canonical 地址，避免将两个部署当作两套独立内容。

### 日常编辑

1. 修改 `source/` 中的 Markdown、主题配置或 `source/_data/` 中的样式。
2. 运行 `npm run build`，同时得到两边可用的静态文件。
3. 要更新 GitHub Pages，正常提交并推送 GitHub 仓库。
4. 要更新 Sites，在 ChatGPT/Codex 中要求“使用这个已有 Sites 项目，发布当前 Hexo 网站”。
   发布时必须使用 `.openai/hosting.json` 的已有项目 ID。

### 同步规则

两个托管平台不会自动双向同步。每次更新前先检查双方源码，更新后再分别发布。
本地可用 `sites` 作为 Sites 源码仓库的额外远程名，`origin` 始终保留为原 GitHub 仓库；
源码仓库地址来自 Sites 工具返回值，凭证仅在发布时获取，不能写入文件或 Git 配置。

从 Sites 对话修改内容后，应先将对应源码提交合并回原 GitHub 仓库，再更新 GitHub Pages。
如果双方都有新提交，先检查差异并正常合并；不要强制推送或覆盖任意一边。
希望两边更新时，可明确要求：“同步当前 Hexo 源码，同时发布 GitHub Pages 和已有 Sites。”
