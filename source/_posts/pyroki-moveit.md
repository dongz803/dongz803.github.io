---
title: PyRoki 与 MoveIt：把独立逆解接入规划系统
date: 2026-11-09 10:00:00
updated: 2026-11-09 10:00:00
permalink: notes/pyroki-moveit/
categories:
  - 机械臂
tags: [PyRoki, MoveIt, 逆运动学]
learning_order: 4
---

<div class="learning-article-label">开源工具接入练习 · 根据公开仓库整理</div>

在 PyRoki 开源工具基础上，通过 MoveIt 插件与独立 Python Worker 的分工，学习逆运动学求解器的接入与调试。

<!-- more -->

## 为什么把求解器单独运行

这项练习的出发点是环境衔接：MoveIt 的插件运行环境，与 PyRoki 所依赖的 Python 和 JAX 环境不完全相同。把求解器作为独立进程运行，可以让规划侧和计算侧分别承担自己的职责。

使用已有工具时，我更关注怎样把输入、模型和输出对应起来，而不是重新实现整套机器人规划系统。

<figure class="learning-figure"><img src="/images/projects/pyroki-bridge.svg" alt="MoveIt 插件通过独立 Worker 使用 PyRoki 逆解的流程" loading="lazy" decoding="async"><figcaption>模块关系与残差含义的学习示意，不表示性能评测结果。</figcaption></figure>

## 一次逆解请求怎样流动

1. 规划侧提供目标位姿和当前关节状态。
2. MoveIt 插件把请求传给独立的 Python Worker。
3. Worker 根据机器人模型构建并求解逆运动学问题。
4. 求得的关节角返回规划侧，继续参与后续轨迹规划。

这里需要同时关注通信是否正确、机器人模型是否一致，以及关节解能否被规划侧正确解释。

## 三类目标帮助我理解优化问题

| 目标或约束 | 对应的直观问题 |
| --- | --- |
| 末端位姿误差 | 机械臂是否到达想要的位置和朝向 |
| 关节限位 | 解是否处在允许的关节范围内 |
| 初始姿态偏好 | 多个可行解中，是否能减少不必要的关节变化 |

学习优化求解器时，我也开始区分首次编译和稳定运行时的开销，以及算法计算时间与整个请求往返时间。

## 接入时值得记录的细节

关节角具有等价表示。如果求解结果跨过角度周期，而规划侧没有按当前姿态解释它，就可能引入多余旋转。因此，关节顺序、坐标系、角度表示和初始状态同样是逆解接入的一部分。

仓库保留了不同 Worker 版本和测试入口。本页仅整理已有结构和学习重点；其中说明性时间、成功率或精度数值，没有作为经过复核的比较结论发布。

## 后续学习

在统一机器人模型、目标集合和计时方法的条件下，补充更规范的求解记录，再讨论不同配置的表现。

## 资料来源与归属

- [my_pyroki 学习仓库](https://github.com/dongz803/my_pyroki)
- [个人 PyRoki 教程与接入笔记](https://github.com/dongz803/my_pyroki/blob/main/Pyroki教程.md)
- [PyRoki 原始项目](https://github.com/chungmin99/pyroki)

PyRoki 与 JAX 是已有开源工具；这里展示的是个人学习和接入练习。
