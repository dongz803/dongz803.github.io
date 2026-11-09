---
title: 内容与配图来源
layout: page
comments: false
header: false
toc:
  enable: false
---

# 内容与配图来源

让每一段介绍和每一张图片，都有清楚的出处。

## 内容整理依据

本站根据 dongz803 的公开仓库以及本人对项目归属的说明整理，整理日期为 2026 年 11 月 9 日。仓库中的方案说明、已完成内容和待验证事项分别呈现。

| 来源 | 在本站的定位 |
| --- | --- |
| [ros2_openarm](https://github.com/dongz803/ros2_openarm) | 基于开源软件的自搭机械臂实践，采用达妙关节电机 |
| [P3-](https://github.com/dongz803/P3-) | 移动底盘与外围设备的集成学习 |
| [huanpan_ws](https://github.com/dongz803/huanpan_ws) | 换盘机器人项目，按公开版本区分仿真、视觉与待完成闭环 |
| [my_pyroki](https://github.com/dongz803/my_pyroki) | 基于 PyRoki 的逆解与 MoveIt 接入练习 |
| [mypcl_learning](https://github.com/dongz803/mypcl_learning) | PCL 点云处理学习练习 |
| [mpl_ros](https://github.com/dongz803/mpl_ros) | 上游项目 Fork，作为开源参考，未标为个人复现成果 |

## 配图说明

- OpenArm 控制链路、P3 系统、PyRoki 接入、点云流程和视觉阶段图：依据公开资料重新绘制的说明图。它们不是实物照片，也不是实验结果。
- UR5e 图片：来自 [huanpan_ws 中保留的 UR5e 模型目录](https://github.com/dongz803/huanpan_ws/tree/main/models/universal_robots_ur5e)，原模型来自 [MuJoCo Menagerie](https://github.com/google-deepmind/mujoco_menagerie)。图片用于说明参考机器人模型，不代表完整换盘工作站。保留 [BSD-3-Clause 许可证](/images/projects/UR5E_LICENSE.txt)。
- 槽口训练曲线：来自 [huanpan_ws 的 slot_opening_v1 训练输出](https://github.com/dongz803/huanpan_ws/tree/main/outputs/perception/runs/slot_opening_v1)，用于展示已有训练过程，不作为实机定位精度或换盘成功率的证明。
- 运动基元规划图片：来自 [sikang/mpl_ros](https://github.com/sikang/mpl_ros)，在个人 Fork 中保留。它是上游演示，未作为个人实验结果。保留 [Apache-2.0 许可证](/images/projects/MPL_LICENSE.txt)。

## 开源致谢

感谢 OpenArm、PyRoki、MuJoCo Menagerie、MPL、ROS、MoveIt、PCL 等开源项目。本站相关介绍侧重个人的理解、运行与接入实践，原始工具和算法归原作者所有。
