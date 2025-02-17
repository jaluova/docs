---
title: KMP
tags:
    - 算法
    - 字符串
icon: 'tabler:letter-k'
createTime: 2025/02/14 14:45:59
permalink: /algorithm/KMP/
---

## 简单介绍

`KMP算法`是一种用于文本串（主串）中查找子串的高效算法。名称来自发明它的三位科学家的名字。

## 原理分析

### 前缀函数的定义

`KMP算法`的实现依靠于`前缀函数`。

### 前缀函数应用于KMP算法

将`模式串`和`主串`以一个特殊字符连在一起，并计算这个合并串的前缀函数，如果有个前缀函数`等于`模式串的长度，就说明找到了和模式串相匹配的子串。

### 前缀函数的算法实现

```cpp
vector<int> pi(str.size());
for (int i = 1; i < str.size(); i++) {
    // calc pi[i];
    int len = pi[i - 1];
    // if (str[i] != str[len]) {
    //     len = pi_2nd(i - 1);
    // }
    // if (str[i] != str[len]) {
    //     len = pi_3rd(i - 1);
    // }
    // if (str[i] != str[len]) {
    //     //...
    // }
    // =>
    while (len != 0 && str[i] != str[len]) {
        // len = pi_next(i - 1);
        len = pi[len - 1];
    }
    if (str[i] == str[len]) {
        pi[i] = len + 1;
    }
}
```

### 模板题

[P3375 【模板】KMP](https://www.luogu.com.cn/problem/P3375)

根据前缀函数和KMP算法的基本特性来做就行了

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
    string s1, s2;
    cin >> s1 >> s2;
    string str = s2 + '#' + s1;
    vector<int> pi(str.size(), 0);
    for (int i = 1; i < str.size(); i++) {
        int len = pi[i - 1];
        while (len != 0 && str[i] != str[len]) {
            len = pi[len - 1];
        }
        if (str[i] == str[len]) {
            pi[i] = len + 1;
            if (pi[i] == s2.size()) cout << i + 1 - 2 * s2.size() << endl;
        }
    }
    for (int i = 0; i < s2.size(); i++) cout << pi[i] << " ";
    cout << endl;
    return 0;
}
```