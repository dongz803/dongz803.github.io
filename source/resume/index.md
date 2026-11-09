---
title: 个人简历
layout: page
comments: false
header: false
toc:
  enable: false
---

# 李子同

机器人系统与视觉感知方向。通过项目和学习练习，持续理解移动底盘、机械臂运动学，以及感知到执行的系统连接。

[GitHub](https://github.com/dongz803) · [联系我](mailto:13235811227@qq.com)

## 关注方向

- 机器人系统集成：ROS / ROS 2 中的设备、通信、状态和执行链路。
- 机械臂与运动规划：自搭机械臂、MoveIt、MuJoCo 与逆运动学。
- 视觉与几何感知：D435、YOLO 目标检测及 PCL 点云处理。

## 项目与平台实践

### 换盘机器人项目

围绕 UR5e、AG95 和服务器硬盘架开展仿真与视觉定位开发。公开项目记录包含场景建模、MoveIt 2 到 MuJoCo 的执行链路、仿真保护原型，以及 D435 槽口检测和姿态反馈。

严格精定位仍需验收，手眼标定与实机完整闭环尚未完成。

[项目介绍 →](/notes/huanpan-robot/) · [huanpan_ws ↗](https://github.com/dongz803/huanpan_ws)

### 自搭机械臂与 OpenArm 开源实践

自行搭建采用达妙关节电机的机械臂，在已有 OpenArm 开源软件基础上开展运行、理解和适配。记录仿真接口、硬件控制模式、关节零位和状态反馈等调试过程。

[实践记录 →](/notes/openarm-practice/) · [ros2_openarm ↗](https://github.com/dongz803/ros2_openarm)

### P3 移动底盘集成

整理基于 ROS 的底盘、交互控制、舵机和 RealSense 设备集成，重点学习驱动、消息与启动配置之间的关系。

[学习记录 →](/notes/p3-chassis/) · [P3- ↗](https://github.com/dongz803/P3-)

## 学习练习

| 方向 | 已整理的内容 | 记录 |
| --- | --- | --- |
| PyRoki 与 MoveIt | 独立 Worker、逆解请求与关节角连续性 | [逆运动学练习](/notes/pyroki-moveit/) |
| PCL 点云 | 读写、滤波、搜索、特征与曲面处理 | [点云学习](/notes/pcl-learning/) |
| 神经网络应用 | YOLO 数据准备、训练与检测到定位 | [视觉学习](/notes/robot-vision-learning/) |

## 使用与接触的工具

C++、Python；ROS、ROS 2；MoveIt、MuJoCo、RViz；PyRoki、JAX；PCL；RealSense、YOLO。

## 联系方式

- GitHub：[dongz803](https://github.com/dongz803)
- 邮箱：[13235811227@qq.com](mailto:13235811227@qq.com)


>
> 本页按个人说明与公开仓库整理，分别标注项目、开源适配和学习练习。教育经历、正式论文与量化成果会在信息确认后补充。
