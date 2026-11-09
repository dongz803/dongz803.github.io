---
title: 机械臂
layout: page
comments: false
header: false
toc:
  enable: false
---

# 机械臂研究与学习

围绕自搭机械臂、逆运动学和换盘机器人，逐步理解模型、规划、控制与视觉之间的联系。
<figure class="learning-figure"><img src="/images/projects/openarm-stack.svg" alt="OpenArm 仿真与实物的控制链路" loading="lazy" decoding="async"><figcaption>控制链路示意：基于公开学习记录绘制，不是实物照片。</figcaption></figure>

## 自搭机械臂与 OpenArm

机械臂硬件由自己搭建，采用达妙关节电机；软件基于已有 OpenArm 开源代码运行和适配。我的学习重点是读懂各模块的职责，并让机器人模型、控制器和实际关节状态对应起来。

实践内容包括 MuJoCo 仿真接口、MoveIt 2 轨迹规划、CAN 通信、电机控制模式，以及零位和关节限位的一致性排查。这一部分以平台搭建和调试记录为主。

[阅读完整实践记录 →](/notes/openarm-practice/) · [公开仓库 ↗](https://github.com/dongz803/ros2_openarm)

## PyRoki 与逆运动学

在已有 PyRoki 工具的基础上，我学习了如何把 Python 求解器接入 MoveIt：由插件接收目标位姿与初始关节状态，通过独立 Worker 计算逆解，再把结果交回规划流程。

关注的问题包括位姿误差、关节限位、初始姿态偏好、首次编译开销，以及关节角等价表示带来的连续性问题。这是工具接入与算法理解练习，尚不以仓库中的说明性数值作为正式性能结论。

[阅读逆运动学学习记录 →](/notes/pyroki-moveit/) · [公开仓库 ↗](https://github.com/dongz803/my_pyroki)

## 换盘机器人项目

面向服务器硬盘槽位操作，项目采用 UR5e、AG95、MoveIt 2 和 MuJoCo，另以 D435 开展槽口检测与姿态反馈。

公开版本已记录仿真执行链路、接触力保护原型及视觉验证；严格精定位仍需稳定性验收，手眼标定和真实机械臂闭环尚未完成。

[查看项目进展与阶段边界 →](/notes/huanpan-robot/)


> **继续深入的方向**
> 在现有基础上，进一步整理逆解比较、目标位姿到规划坐标系的转换，以及感知结果如何进入运动任务。新增实验会在获得结果后单独记录。
