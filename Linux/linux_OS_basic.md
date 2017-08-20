### 关于Linux操作系统
#### kernel
作为系统核心，一直做着对于系统硬件进行操作的重要位置，一般它需要做以下事情：  
1. 系统呼叫接口(System call interface)：用于软件开发者调用系统资源
2. 行程管理(Process control)：多任务管理
3. 内存管理(Memory management) :管理内存
4. 档案系统管理(File system management) :文件管理系统
5. 装置的驱动(Device drivers) :管理整个设备的硬件驱动  

#### 通用公共许可证 (General Public License, GPL)
#### 外频是cpu和外设沟通速率
### linux的分区
#### 简单分区
两个partition，一个/，一个swap
#### 复杂分区
- /
- /usr   操作系统在这里放
- /home  这里放用户数据
- /var   记录登录档案，一些信息，mail和www服务预设也在此
- Swap

#### Linux的分区规则
最大可以拥有4个主分区，或者三个主分区，加一个扩展分区，扩展分区又可以划分为多个逻辑分区 ，但主分区+扩展分区+逻辑分区，不应该大于64，当机器的硬盘大于1T的时候，需要增加/boot引导区进行引导，一般为100M就足够。
