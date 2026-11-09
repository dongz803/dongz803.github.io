---
title: 移动底盘
layout: page
comments: false
header: false
toc:
  enable: false
---

# 移动机器人与底盘

以 P3 底盘工作区为起点，学习驱动、消息通信、手柄交互和相机可视化如何协同工作。
<figure class="learning-figure"><img src="/images/projects/p3-system.svg" alt="P3 底盘、手柄、舵机与 RealSense 相机的系统关系" loading="lazy" decoding="async"><figcaption>依据 P3- 仓库启动配置绘制的系统示意，不是底盘实物照片。</figcaption></figure>

## P3 底盘集成实践

P3 工作区包含 RosAria 底盘驱动及交互示例、手柄输入、串口舵机控制和 RealSense 相机组件。总启动配置把这些模块组合起来，并提供 RViz 可视化入口。

| 学习模块 | 重点理解的内容 |
| --- | --- |
| 底盘驱动 | 速度指令如何进入驱动，状态与里程计如何反馈 |
| 交互控制 | 手柄输入、舵机角度与底盘交互各自承担什么职责 |
| 相机接入 | 深度相机数据和机器人状态如何共同可视化 |
| 系统组织 | 驱动、消息和启动配置如何在工作区中连接 |

这部分按底盘系统集成练习整理。公开工作区中的启动配置能说明组件如何组织；完整自主导航和建图效果还需要对应实验记录。

[阅读 P3 学习记录 →](/notes/p3-chassis/) · [查看公开仓库 ↗](https://github.com/dongz803/P3-)

## 运动基元规划：开源参考

收藏的 mpl_ros 是 sikang/mpl_ros 的 Fork，为 Motion Primitive Library 提供 ROS 接口，涉及占据栅格、体素地图及轨迹可视化。它用于后续理解“在约束下搜索可执行轨迹”的思路。

当前没有整理出个人复现记录，因此在本站标记为开源参考。

[了解这个参考项目 →](/notes/motion-primitives-reference/)

## 后续学习方向

把底盘集成与里程计、定位、地图和导航连接起来，逐步补充实验设置、运行现象与结果。计划中的内容会在实际完成后更新。
