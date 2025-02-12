---
title: 使用Docker配置网站搭建环境
tags:
    - Docker
createTime: 2025/02/12 14:34:35
permalink: /article/62jh4ytv/
---

## 参考视频

@[bilibili](BV1MR4y1Q738)


## 安装Docker

参考[ubuntu 20.04 国内源安装docker](https://www.cnblogs.com/lqqgis/p/18276118)

在Ubuntu 20.04上使用国内源安装Docker，可以使用清华大学源或阿里云源，具体如下。

先更新软件包，安装备要apt软件

```bash
# 更新软件包索引
sudo apt-get update
 
# 安装需要的软件包以使apt能够通过HTTPS使用仓库
sudo apt-get install ca-certificates curl gnupg lsb-release
```

添加官方密钥，并设置仓库地址

::: code-tabs

@tab 清华源
```bash
# 添加Docker官方的GPG密钥
curl -fsSL https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
 
# 设置稳定版仓库
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
```
@tab 阿里源
```bash
# 添加阿里云官方GPG密钥
curl -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg | sudo apt-key add -
 
# 写入阿里云Docker仓库地址
sudo sh -c 'echo "deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu $(lsb_release -cs) stable" > /etc/apt/sources.list.d/docker.list'

```
:::

更新源并安装Docker

```bash
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io

# 验证是否成功安装了docker
sudo systemctl status docker
docker --version
```

修改docker的`/etc/docker/daemon.json`配置文件，如果在不存在则手动创建，文件内容如下。

```bash
# 修改daemon.json文件，
vim /etc/docker/daemon.json

# daemon.json内容如下：
{
    "registry-mirrors": [
        "https://dockerproxy.com",
        "https://docker.m.daocloud.io",
        "https://cr.console.aliyun.com",
        "https://ccr.ccs.tencentyun.com",
        "https://hub-mirror.c.163.com",
        "https://mirror.baidubce.com",
        "https://docker.nju.edu.cn",
        "https://docker.mirrors.sjtug.sjtu.edu.cn",
        "https://github.com/ustclug/mirrorrequest",
        "https://registry.docker-cn.com"
    ]
}

# 重载配置文件，并重启 docker
sudo systemctl daemon-reload
sudo systemctl restart docker

# 查看 Registry Mirrors 配置是否成功
sudo docker info 
```

#### 安装Docker Desktop（可选）

参考[Install Docker Desktop on Ubuntu](https://docs.docker.com/desktop/setup/install/linux/ubuntu)

## 环境搭建
