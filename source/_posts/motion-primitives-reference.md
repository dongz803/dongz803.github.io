---
title: 开源参考：MPL 与运动基元轨迹规划
date: 2026-11-09 10:00:00
updated: 2026-11-09 10:00:00
permalink: notes/motion-primitives-reference/
categories:
  - 开源参考
tags: [MPL, 运动规划, ROS]
learning_order: 20
---

<div class="learning-article-label">开源收藏 · 待整理个人复现 · 根据公开仓库整理</div>

收藏的 mpl_ros 是上游开源项目的 Fork。本页介绍它提供的学习入口，个人复现过程与结果尚未整理。

<!-- more -->

## 这个仓库是什么

mpl_ros 为 Motion Primitive Library 提供 ROS 接口。我的仓库是 sikang/mpl_ros 的 Fork，目前没有整理出个人实验记录，因此这里先将其作为开源参考。

它提供了一个理解轨迹规划的入口：在地图和运动约束下，如何搜索由运动片段组成的轨迹，再通过 ROS 消息与 RViz 展示结果。

<figure class="learning-figure"><img src="/images/projects/mpl-upstream-example.png" alt="MPL 上游项目展示的二维占据地图规划示例" loading="lazy" decoding="async"><figcaption>上游 sikang/mpl_ros 的演示图片，来自个人 Fork 保留的示例；不是我的复现实验结果。<a href="/images/projects/MPL_LICENSE.txt">Apache-2.0 许可证</a>。</figcaption></figure>

## 可以从中学习什么

| 阅读入口 | 关注的问题 |
| --- | --- |
| 占据栅格与体素地图 | 地图怎样表示可通行区域和障碍物 |
| 运动基元与轨迹 | 状态变化如何同时考虑运动约束 |
| ROS 消息与显示 | 规划结果怎样传递并可视化 |
| 动态障碍与多机器人示例 | 上游如何组织更复杂的规划场景 |

这些是上游提供的能力和示例，不表示我已经逐项完成复现。

## 后续整理方式

重新运行感兴趣的示例，保留环境、输入地图、配置与结果，再把实际完成的部分补充到移动底盘学习记录中。

## 来源与致谢

- [个人 Fork](https://github.com/dongz803/mpl_ros)
- [上游原项目 sikang/mpl_ros](https://github.com/sikang/mpl_ros)

本页图片与相关项目内容保留上游来源和许可说明。
