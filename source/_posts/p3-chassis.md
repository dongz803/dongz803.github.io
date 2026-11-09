---
title: P3 移动底盘：驱动、手柄与相机的系统集成
date: 2026-11-09 10:00:00
updated: 2026-11-09 10:00:00
permalink: notes/p3-chassis/
categories:
  - 移动底盘
tags: [ROS, P3, RealSense]
learning_order: 3
---

<div class="learning-article-label">底盘集成学习 · 根据公开仓库整理</div>

围绕 P3 底盘工作区，理解底盘驱动、交互控制、串口舵机和深度相机如何在同一个 ROS 系统中组织起来。

<!-- more -->

## 从一个能启动的工作区开始

P3 是我的移动底盘相关工作区。公开内容包含 RosAria 驱动与交互示例、手柄输入、串口舵机控制，以及 RealSense 相机驱动和描述文件。

这份记录先关注系统集成：有哪些模块、它们传递什么信息，以及怎样把设备运行状态放在同一个视图中观察。

<figure class="learning-figure"><img src="/images/projects/p3-system.svg" alt="P3 工作区中手柄、ROS、底盘、舵机和相机的关系" loading="lazy" decoding="async"><figcaption>系统示意来自仓库启动配置；图中不包含实物外观或运行结果。</figcaption></figure>

## 工作区中的主要组成

| 模块 | 在系统中的作用 |
| --- | --- |
| RosAria | 对接移动底盘，接收速度目标并提供机器人状态 |
| 交互示例 | 提供运动与状态查看等基础交互入口 |
| 手柄与舵机 | 读取交互输入，转换成舵机角度目标 |
| RealSense | 提供相机接入、图像和点云可视化相关配置 |
| RViz | 在统一界面中观察机器人与感知数据 |

总启动配置把这些模块组合在一起，同时对底盘速度和里程计消息进行名称对齐。这是理解 ROS 系统组织方式的一个具体入口。

## 我主要在理解什么

第一，驱动层和上层交互层的职责不同。交互模块决定想让设备做什么，驱动模块负责把目标传递到设备并反馈状态。

第二，多个设备同时工作时，串口、消息名称和参数需要对应起来。单独运行一个节点并不足以说明整个系统已经连接正确。

第三，相机接入与导航能力需要分开看。工作区包含相机和点云相关配置，为观察环境提供基础；完整建图、定位和自主导航还需要各自的实验记录。

## 下一步如何整理

继续补充底盘硬件照片、运行场景、里程计观察和设备联调现象，再逐步连接到地图、定位与导航学习。

## 资料来源

- [P3- 公开工作区](https://github.com/dongz803/P3-)
- [工作区总启动配置](https://github.com/dongz803/P3-/blob/main/src/launch/start.launch)
- [RosAria 交互示例的原始说明](https://github.com/dongz803/P3-/blob/main/src/rosaria_client/README.md)

本页根据已有文件整理模块关系，没有把驱动和配置文件的存在写成完整导航实验成果。
