---
title: 从数据到槽口检测：机器人视觉的学习记录
date: 2026-11-09 10:00:00
updated: 2026-11-09 10:00:00
permalink: notes/robot-vision-learning/
categories:
  - 神经网络
tags: [YOLO, RGB-D, D435]
learning_order: 6
---

<div class="learning-article-label">项目中的视觉学习 · 根据公开仓库整理</div>

以换盘项目为背景，整理图像采集、标注、训练、运行时检测，以及检测结果走向几何定位的学习过程。

<!-- more -->

## 先明确检测对象，再讨论模型

机器人视觉的目标不是只在图片上画一个框，而是输出后续任务能够理解的信息。换盘项目的当前视觉主线是识别目标槽口，并进一步理解相机与面板的相对方向。

因此，我把学习过程拆成数据、模型和几何三个层次，分别检查每一层的输入与输出。

<figure class="learning-figure"><img src="/images/projects/vision-pipeline.svg" alt="数据采集、YOLO 粗定位、正视反馈和严格精定位的流程" loading="lazy" decoding="async"><figcaption>视觉阶段示意；严格精定位与实机闭环仍需后续验证。</figcaption></figure>

## 数据准备也是模型学习的一部分

采集图像时，需要关注视角、距离、反光和背景变化。标注时，目标定义和边界应保持一致。划分数据时，还要避免把同一段视频里的近似帧分散到训练与验证两侧。

这些问题会影响指标的含义。只看训练是否收敛，容易忽略模型是否见过足够多的实际情况。

## 通过训练记录理解模型过程

公开仓库保留了一组槽口检测训练曲线。它能帮助观察损失、精确率、召回率和检测指标如何随训练变化。

<figure class="learning-figure"><img src="/images/projects/slot-training-results.png" alt="公开仓库保留的槽口检测模型训练曲线" loading="lazy" decoding="async"><figcaption>来自 huanpan_ws 的 slot_opening_v1 训练输出，仅展示训练过程。数据范围与独立测试尚需进一步整理，图中指标不代表实机定位精度或换盘成功率。</figcaption></figure>

这类曲线是过程记录。要讨论泛化能力，还需要清楚的数据数量、划分方法和独立测试条件；要讨论机器人任务效果，则还需要运动与执行的验证。

## 从检测框走向几何定位

YOLO 提供的是图像中的目标位置。项目进一步结合对齐深度，研究面板平面、法线和图像方向，用于相机正视姿态反馈。

严格精定位则继续利用边缘与角点几何估计槽口位姿。它要求目标边界稳定、深度可靠，并且需要明确输出所在的坐标系。

## 当前学习收获

逐渐把“检测到目标”“估计目标位姿”和“机器人到达目标”分开理解。每一步都需要自己的数据、误差解释和验证方式。

接下来继续整理训练样本与独立测试，补充基础网络知识，并与几何方法、手眼标定和机器人坐标变换联系起来。

## 资料来源

- [项目主说明](https://github.com/dongz803/huanpan_ws)
- [真实视觉模块](https://github.com/dongz803/huanpan_ws/tree/main/src/huanpan_perception)
- [训练输出与曲线](https://github.com/dongz803/huanpan_ws/tree/main/outputs/perception/runs/slot_opening_v1)

[查看完整项目背景 →](/notes/huanpan-robot/)
