---
title: 神经网络
layout: page
comments: false
header: false
toc:
  enable: false
---

# 神经网络学习

以换盘项目中的槽口检测为入口，记录数据准备、模型训练、推理和几何定位之间的联系。
<figure class="learning-figure"><img src="/images/projects/vision-pipeline.svg" alt="D435 数据、YOLO 检测与槽口姿态反馈的处理流程" loading="lazy" decoding="async"><figcaption>依据公开项目文档绘制；严格精定位处于验证阶段，尚未完成实机闭环。</figcaption></figure>

## YOLO 槽口检测实践

换盘项目使用真实 D435 图像，围绕目标槽口建立采集、标注、训练、评估和运行时检测流程。这里关注的不只是训练模型，还包括数据怎样进入机器人感知系统。

| 环节 | 学习重点 |
| --- | --- |
| 数据与标注 | 目标定义、样本多样性、标签质量与数据划分 |
| 模型训练 | 预训练模型的迁移使用、损失变化与训练记录 |
| 推理与调试 | 检测框、状态输出和运行时图像的对应关系 |
| 检测到定位 | 结合深度与几何，从图像目标走向姿态反馈 |

[阅读视觉学习记录 →](/notes/robot-vision-learning/) · [查看项目背景 →](/notes/huanpan-robot/)

## 几何感知基础：PCL

在学习检测网络的同时，我也通过 PCL 练习点云读取、滤波、空间搜索、法线与特征、曲面重建。几何方法帮助我理解深度数据和物体表面，也为机器人视觉打下基础。

[阅读点云处理学习记录 →](/notes/pcl-learning/)


> **基础学习计划**
> 后续继续整理损失函数、梯度下降、反向传播与 PyTorch 的基础实验。当前公开仓库主要提供视觉应用记录，因此这里先展示已有实践。
