---
title: 换盘机器人：仿真执行与真实视觉的两条验证路线
date: 2026-11-09 10:00:00
updated: 2026-11-09 10:00:00
permalink: notes/huanpan-robot/
categories:
  - 项目实践
tags: [UR5e, MoveIt 2, MuJoCo, 机器人视觉]
learning_order: 2
---

<div class="learning-article-label">机器人项目 · 阶段进展 · 根据公开仓库整理</div>

围绕 UR5e、AG95 和服务器硬盘架，开展运动仿真、接触保护和 RGB-D 槽口定位；分别记录已有进展与尚未完成的实机闭环。

<!-- more -->

## 项目要解决的问题

服务器硬盘槽位操作需要把识别、对齐、规划和执行联系起来。换盘项目以 UR5e 与 AG95 为机器人平台，围绕硬盘架建立仿真场景，并使用 D435 开展真实视觉验证。

当前公开版本按两条路线推进：一条在 MuJoCo 中验证运动与保护原型，另一条在真实相机上验证槽口检测和姿态反馈。

<figure class="learning-figure"><img src="/images/projects/huanpan-workflow.svg" alt="换盘项目的仿真执行路线与真实视觉路线" loading="lazy" decoding="async"><figcaption>按公开项目文档整理的阶段示意；不表示完整实机换盘已经完成。</figcaption></figure>

## 仿真执行：先建立可检查的任务场景

公开工作区包含 UR5e、AG95、固定在末端的任务硬盘和四列三行机架。MoveIt 2 生成轨迹，再通过仿真桥驱动 MuJoCo 中的机械臂。

在此基础上，项目记录了扰动、接触监测、超限中止和历史路径回退等仿真保护原型。它们用于研究执行过程中的异常响应，不能直接视作经过实机标定的力控能力。

<figure class="learning-figure"><img src="/images/projects/ur5e-reference.png" alt="UR5e 的 MuJoCo Menagerie 参考模型图" loading="lazy" decoding="async"><figcaption>UR5e 参考模型图，来自项目保留的 MuJoCo Menagerie 模型目录；不是完整换盘工作站。<a href="/credits/">来源与许可证</a>。</figcaption></figure>

## 真实视觉：从粗框到姿态反馈

视觉部分使用 D435 的彩色与对齐深度数据。YOLO 先提供槽口粗定位，再结合深度平面与图像方向估计，输出相机的正视姿态修正。

严格精定位路线还包括边缘精修、角点几何和相机坐标系下的位姿估计。目前公开说明仍将这一部分标为待稳定性验收的原型。

[进一步阅读视觉学习记录 →](/notes/robot-vision-learning/)

## 当前进展与边界

| 内容 | 公开版本记录的状态 |
| --- | --- |
| 机器人与机架场景 | 已建立仿真模型 |
| MoveIt 2 到 MuJoCo | 已记录仿真规划与执行链路 |
| 超力保护与回退 | 已有仿真原型 |
| D435 槽口粗定位 | 已有真实相机运行记录 |
| 正视姿态反馈 | 当前视觉验证阶段 |
| 严格精定位 | 已有代码链路，仍需稳定性与重复性验收 |
| 手眼标定与实机闭环 | 尚未完成 |

当前任务硬盘固定连接在末端，尚未实现实际抓取、释放和完整换盘状态切换。视觉与运动链路也仍保持解耦。

本页进度依据公开仓库截至 2026 年 10 月 19 日的说明，于 2026 年 11 月 9 日整理。仓库中的早期周记用于理解过程，当前状态以较新的主 README 为准。

## 这项项目实践中的学习

我在这个项目中持续学习如何划分模型、规划、执行和感知的职责，也更重视每一步输出的坐标系、含义与验证条件。

后续重点是固定相机、完成手眼标定与坐标变换，再让经过验证的视觉输出逐步进入真实机械臂的小步闭环。

## 资料来源

- [huanpan_ws 主说明与最新公开进展](https://github.com/dongz803/huanpan_ws)
- [真实视觉模块说明](https://github.com/dongz803/huanpan_ws/tree/main/src/huanpan_perception)
- [项目过程记录](https://github.com/dongz803/huanpan_ws/tree/main/docs)

图像与上游模型来源见[内容与配图来源](/credits/)。
