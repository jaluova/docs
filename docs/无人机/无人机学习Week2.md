---
title: 无人机学习Week2
createTime: 2025/04/11 11:18:01
permalink: /article/k8j5twuh/
tags:
  - ROS
---
## 1 工作空间（基于catkin编译系统）

### 1.1 文件目录结构

- `src`：代码空间
- `build`：编译空间
- `devel`：开发空间
- `install`：安装空间

### 1.2 创作工作空间

1. 创建工作空间

   ```sh
   mkdir -p ~/catkin_ws/src
   cd ~/catkin_ws/src
   catkin_init_workspace
   ```

2. 编译工作空间

   ```sh
   cd ~/catkin_ws/
   catkin_make
   ```

3. 设置环境变量

   ```sh
   # 可在~/.bashrc中添加
   source ~/catkin_ws/devel/setup.bash
   ```

4. 检查环境变量

   ```sh
   echo $ROS_PACKAGE_PATH
   ```

### 1.3 创建功能包

> 同一工作空间下，不允许存在同名功能包；
>
> 不同工作空间下，允许存在同名功能包。

1. 创建功能包

   ```sh
   # ~/catkin_ws/src
   catkin_create_pkg <包名> <依赖项列表>
   ```

2. 编译功能包

   ```sh
   cd ~/catkin_ws/
   catkin_make
   source ~/catkin_ws/devel/setup.bash
   ```



## 2 ROS通信基础

### 2.1 话题编程

### 2.2 服务编程

### 2.3 分布式通信



## 3 关键组件

### 3.1 Launch文件

官方链接：[wiki.ros.org/roslaunch/XML](https://wiki.ros.org/roslaunch/XML)

通过`xml`文件实现**多节点**的配置和启动。

`<node>`:

- `pkg`：包名
- `type`：节点的可执行文件名称
- `name`：节点运行时的名称
- `output`、`respawn`、`ns`

```xml
<launch>
  <node pkg=<包名> type=<节点> name=<名字> output="screen"/>
  <!-- output 设置 ROS_INFO输出 -->
</launch>
```

### 3.2 TF坐标变换

### 3.3 Qt工具箱

1. 日志输出工具`rqt_console`
2. 计算图可视化工具`rqt_graph`
3. 数据绘制工具`rqt_plot`
4. 参数动态配置工具`rqt_reconfigure`

### 3.4 Rviz可视化平台

### 3.5 Gazebo物理仿真环境



## 4 操控无人机

### 4.1 控制无人机定点飞行

`MAVROS`是支持`MAVLink`协议的无人机与`ROS`进行通信的桥梁。

我们可以通过这条指令查看`MAVROS`相关话题：

```sh
# 在启动无人机仿真后执行
rostopic list | grep /mavros
```

而我们想要实现定点飞行，可以注意到这样一个话题：`/mavros/setpoint_position/local`

接着，我们去查看它接受的消息包的类型：

```sh
rostopic info mavros/setpoint_position/local
# 以下为输出内容
# Type: geometry_msgs/PoseStamped

# Publishers: None

# Subscribers:
#  * /mavros (http://LAPTOP-JALUOVA:46104/)
```

然后，我们可以查看`geometry_msgs/PoseStamped`消息包的内容：

```sh
rosmsg show geometry_msgs/PoseStamped
# std_msgs/Header header
#   uint32 seq
#   time stamp
#   string frame_id
# geometry_msgs/Pose pose
#   geometry_msgs/Point position
#     float64 x
#     float64 y
#     float64 z
#   geometry_msgs/Quaternion orientation
#     float64 x
#     float64 y
#     float64 z
#     float64 w
```

由此，我们确定：

- 消息类型：`geometry_msgs/PoseStamped`
- 话题：`mavros/setpoint_position/local`

接下来，是一个`fly_to`的代码演示

- 功能：输入点的坐标，运行节点，无人机飞到指定位置
- 示例：
  
  ```sh  
	# 飞到（1，1，1）
	rosrun offboard_control fly_to 1 1 1  
  ```
- 代码
    ```cpp
    #include <ros/ros.h>
    #include <geometry_msgs/PoseStamped.h>

    int main(int argc, char**argv){
      ros::init(argc, argv, "fly_to");
      ros::NodeHandle nh;
      ros::Rate rate(20.0);

      ros::Publisher pub = nh.advertise<geometry_msgs::PoseStamped>
      ("mavros/setpoint_position/local", 10);
    
       // 检验参数数量是否正确
       if(argc!=4){
        ROS_ERROR("Usage: fly_to x y z");
        ROS_ERROR("Example: fly_to 1.0 2.0 3.0");
        return 1;
     }
        
     // 转换参数数据类型
     double x = atof(argv[1]);
     double y = atof(argv[2]);
     double z = atof(argv[3]);
    
     ROS_INFO("Received target position: x=%.2f, y=%.2f, z=%.2f", x, y, z);
     geometry_msgs::PoseStamped pos;
    	
     pos.pose.position.x=x;
     pos.pose.position.y=y;
     pos.pose.position.z=z;
    
     // 发送数据
     while(ros::ok()){
       pub.publish(pos);
       ros::spinOnce();
       rate.sleep();
     }
  }
  ```

也可以通过指令直接发送消息给无人机：

```sh
# fly_to.sh
rostopic pub /mavros/setpoint_position/local geometry_msgs/PoseStamped "header:
  seq: 0
  stamp:
    secs: 0
    nsecs: 0
  frame_id: 'map'
pose:
  position:
    x: 3.0
    y: 3.0
    z: 3.0
  orientation:
    x: 0.0
    y: 0.0
    z: 0.0
    w: 1.0" -r 20
# -r rate
```

可以查看无人机位置坐标

```sh
rostopic echo /mavros/local_position/pose
```

### 4.2 无人机解锁脚本

*可能*需要输入这两条指令才能成功解锁

```sh
rosparam set /mavros/px4/param/COM_RCL_EXCEPT 4  # 禁用遥控器检查
rosparam set /mavros/px4/param/NAV_RCL_ACT 0     # 禁用失控保护
```

实际项目当中，**不建议**使用代码对无人机解锁进行控制，所以我们采用一个脚本来实现无人机解锁

```sh
# ~/scripts/takeoff.sh

# 使用mavros包
# rosrun mavros mavsys mode -c OFFBOARD  # 切换至OFFBOARD模式
# rosrun mavros mavsafety arm  			 # 解锁无人机

# 使用rosservice
rosservice call /mavros/set_mode "custom_mode: 'OFFBOARD'"
rosservice call /mavros/cmd/arming "value: true"
```

### 4.3 键盘操控无人机

- 话题：`/mavros/setpoint_velocity/cmd_vel`
- 消息：`geometry_msgs/TwistStamped`

```cpp
#include <ros/ros.h>
#include <geometry_msgs/TwistStamped.h>
#include <termios.h>
#include <unistd.h>
#include <fcntl.h>
#include <stdio.h>

// 非阻塞的字符输入函数，避免程序被卡住
int getch()
{
  static struct termios oldt, newt;
  // 获取当前终端配置
  tcgetattr(STDIN_FILENO, &oldt);
  newt = oldt;
  // 关闭规范模式（ICANON）和回显（ECHO）
  newt.c_lflag &= ~(ICANON | ECHO);
  // 立即应用新配置
  tcsetattr(STDIN_FILENO, TCSANOW, &newt);
  // 获取当前文件描述符标志
  int oldf = fcntl(STDIN_FILENO, F_GETFL, 0);
  // 设置非阻塞模式
  fcntl(STDIN_FILENO, F_SETFL, oldf | O_NONBLOCK);
  // 尝试读取一个字符
  // 如果没有字符读入，则为-1
  int ch = getchar();
  // 恢复原始终端配置
  tcsetattr(STDIN_FILENO, TCSANOW, &oldt);
  // 恢复文件描述符标志
  fcntl(STDIN_FILENO, F_SETFL, oldf);
  return ch;
}

// 打印操作说明
void printInstructions()
{
  printf("\n");
  printf("---------------------------\n");
  printf("  UAV Keyboard Control\n");
  printf("---------------------------\n");
  printf("w: Forward\n");
  printf("s: Backward\n");
  printf("a: Left\n");
  printf("d: Right\n");
  printf("j: Ascend\n");
  printf("k: Descend\n");
  printf("q: Yaw Left\n");
  printf("e: Yaw Right\n");
  printf("x: Stop/Land\n");
  printf("---------------------------\n");
  printf("Press any key to start...\n");
  printf("---------------------------\n\n");
}

// 清屏并移动光标
void clearScreen()
{
  printf("\033[2J\033[1;1H");
}

int main(int argc, char**argv)
{
  ros::init(argc, argv, "keyboard_control");
  ros::NodeHandle nh;
  
  ros::Publisher pub = nh.advertise<geometry_msgs::TwistStamped>(
      "/mavros/setpoint_velocity/cmd_vel", 10);
  
  ros::Rate rate(20);
  geometry_msgs::TwistStamped msg;
  
  double linear_speed = 1.0;
  double angular_speed = 1.0;
  double vertical_speed = 0.5;
  
  msg.twist.linear.x = 0.0;
  msg.twist.linear.y = 0.0;
  msg.twist.linear.z = 0.0;
  msg.twist.angular.z = 0.0;

  clearScreen();
  printInstructions();
  
  while (getch() == -1 && ros::ok())
  {
      ros::spinOnce();
      rate.sleep();
  }
  
  clearScreen();
  printf("Keyboard control active...\n");
  printf("Press 'x' to stop, Ctrl+C to exit\n");
  
  while(ros::ok())
  {
    int c = getch();
    if(c != -1)
    {
      clearScreen();
      printf("Keyboard control active...\n");
      printf("Press 'x' to stop, Ctrl+C to exit\n\n");
      printf("Current command: ");
      
      switch(c)
      {
        case 'w':
          msg.twist.linear.x = linear_speed;
          msg.twist.linear.y = 0.0;
          printf("Forward\n");
          break;
        case 's':
          msg.twist.linear.x = -linear_speed;
          msg.twist.linear.y = 0.0;
          printf("Backward\n");
          break;
        case 'a':
          msg.twist.linear.x = 0.0;
          msg.twist.linear.y = linear_speed;
          printf("Left\n");
          break;
        case 'd':
          msg.twist.linear.x = 0.0;
          msg.twist.linear.y = -linear_speed;
          printf("Right\n");
          break;
        case 'j':
          msg.twist.linear.z = vertical_speed;
          printf("Ascend\n");
          break;
        case 'k':
          msg.twist.linear.z = -vertical_speed;
          printf("Descend\n");
          break;
        case 'q':
          msg.twist.angular.z = angular_speed;
          printf("Yaw Left\n");
          break;
        case 'e':
          msg.twist.angular.z = -angular_speed;
          printf("Yaw Right\n");
          break;
        case 'x':
          msg.twist.linear.x = 0.0;
          msg.twist.linear.y = 0.0;
          msg.twist.linear.z = 0.0;
          msg.twist.angular.z = 0.0;
          printf("Stop/Land\n");
          break;
        default:
          printf("Unknown command\n");
          break;
      }
    }
    pub.publish(msg);
    rate.sleep();
  }
}
```

## 5 激光雷达避障

```sh
roslaunch px4 mavros_posix_sitl.launch vehicle:=iris_rplidarW
# rviz
rosrun tf static_transform_publisher 0 0 0 0 0 0 map rplidar_link 5.5
```

- 消息：`sensor_msgs/LaserScan`
- 话题：`/laser/scan`

### 5.1 简单的测距代码（正前方）

```cpp
#include <ros/ros.h>
#include <sensor_msgs/LaserScan.h>

void lidar_cb(const sensor_msgs::LaserScan msg){
  float mid_dis=msg.ranges[180];
  ROS_INFO("ranges[180]=%fm",mid_dis);
}

int main(int argc,char** argv){
  ros::init(argc,argv,"lidar_node");
  ros::NodeHandle nh;
  ros::Subscriber sub=nh.subscribe<sensor_msgs::LaserScan>
  ("/laser/scan",10,&lidar_cb);

  ros::spin();
}
```

### 5.2 雷达避障代码



### world

```xml
<?xml version="1.0"?>
<launch>
    <!-- MAVROS posix SITL environment launch script -->
    <!-- launches MAVROS, PX4 SITL, Gazebo environment, and spawns vehicle -->
    <!-- vehicle pose -->
    <arg name="x" default="0"/>
    <arg name="y" default="0"/>
    <arg name="z" default="0"/>
    <arg name="R" default="0"/>
    <arg name="P" default="0"/>
    <arg name="Y" default="0"/>
    <!-- vehicle model and world -->
    <arg name="est" default="ekf2"/>
    <arg name="vehicle" default="iris"/>
    <arg name="world" default="$(find mavlink_sitl_gazebo)/worlds/empty.world"/>
    <arg name="sdf" default="$(find mavlink_sitl_gazebo)/models/$(arg vehicle)/$(arg vehicle).sdf"/>

    <!-- gazebo configs -->
    <arg name="gui" default="true"/>
    <arg name="debug" default="false"/>
    <arg name="verbose" default="false"/>
    <arg name="paused" default="false"/>
    <arg name="respawn_gazebo" default="false"/>
    <!-- MAVROS configs -->
    <arg name="fcu_url" default="udp://:14540@localhost:14557"/>
    <arg name="respawn_mavros" default="false"/>
    <!-- PX4 configs -->
    <arg name="interactive" default="true"/>
    <!-- PX4 SITL and Gazebo -->
    <include file="$(find px4)/launch/posix_sitl.launch">
        <arg name="x" value="$(arg x)"/>
        <arg name="y" value="$(arg y)"/>
        <arg name="z" value="$(arg z)"/>
        <arg name="R" value="$(arg R)"/>
        <arg name="P" value="$(arg P)"/>
        <arg name="Y" value="$(arg Y)"/>
        <arg name="world" value="$(arg world)"/>
        <arg name="vehicle" value="$(arg vehicle)"/>
        <arg name="sdf" value="$(arg sdf)"/>
        <arg name="gui" value="$(arg gui)"/>
        <arg name="interactive" value="$(arg interactive)"/>
        <arg name="debug" value="$(arg debug)"/>
        <arg name="verbose" value="$(arg verbose)"/>
        <arg name="paused" value="$(arg paused)"/>
        <arg name="respawn_gazebo" value="$(arg respawn_gazebo)"/>
    </include>
    <!-- MAVROS -->
    <include file="$(find mavros)/launch/px4.launch">
        <!-- GCS link is provided by SITL -->
        <arg name="gcs_url" value=""/>
        <arg name="fcu_url" value="$(arg fcu_url)"/>
        <arg name="respawn_mavros" value="$(arg respawn_mavros)"/>
    </include>
</launch>
```



## 6 Simulink

