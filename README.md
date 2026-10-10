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

## 发布方式

将修改提交并推送到 `main` 分支后，GitHub Actions 会自动构建网站并发布到 GitHub Pages。
