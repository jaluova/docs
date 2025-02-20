---
title: 前缀和
createTime: 2025/02/04 11:28:00
tags:
  - 算法
  - 离散
  - 前缀和
icon: 'tabler:sum'
permalink: /algorithm/prefix/
---

## 引入

求解多次`区间和`问题

```cpp
// Q      询问次数
// [L,R]  询问区间
while (Q--) {
    int sum = 0;      
    for (int i = L; i <= R; i++) {
        sum += arr[i];
    }
}
```

若每次都枚举，时间复杂度无法承受，所以引入`前缀和`，用于高效查询区间和

## 基础模型

使用一个`数组`来存储每次求和的结果

```cpp
vector<int> pre(n);

int sum = 0;
for (int i = L; i <= R; i++) {
    sum += arr[i];
    pre[i] = sum;
}
```

这样，区间和的计算就可以转化为
$$sum(L,R)=pre[R]-pre[L-1]$$

对代码进行优化，消去中间变量`sum`

```cpp
// 有点类似于我们高中时学过的递推数列
vector<int> pre(n);

for (int i = L; i <= R; i++) {
    if(i) pre[i] = pre[i - 1];
    pre[i] += arr[i];
}
```

在`C++`中也有系统库函数，可以替代此代码

```cpp
partial_sum(arr.begin(), arr.end(), pre.begin());
//          起始位置       终止位置    存储起始位置
```

::: warning 警告
这个函数包含在头文件`numeric`当中
:::

## 应用

1. 如果原数组在后续计算中不再使用，则可以原数组的基础上进行累加

```cpp
partial_sum(arr.begin(), arr.end(), arr.begin());
```

2. 对于公式$sum(L,R)=pre[R]-pre[L-1]$，若$L=0$,则会造成数组越访问，可以采取以下方法解决

```cpp
vector<int> arr(n + 1, 0), pre(n + 1, 0);
for (int i = 1; i <= n; i++) cin >> arr[i];
partial_sum(arr.begin(), arr.end(), pre.begin());
```

## 拓展

### 拓展运算法则

对于`可逆`，`满足交换率`的运算，也可以引入`前缀`的概念

并且我们也可以用库函数来计算：

```cpp
partial_sum(arr.begin(), arr.end(), pre.begin(),
[](int pre_sum, int cur) { return pre_sum ^ cur; });

```


例如，前缀积(不溢出且除数不为0)：
$$mul(L,R)=pre[R]/pre[L-1]$$
而前缀积较容易溢出($2^{64}$就会溢出),常见的一种形式是：
$$pre[i]=(pre[i-1]*arr[i]) \% mod$$
这涉及`乘法逆元`，`费马小定理`，`快速幂`等知识，在此不做讨论


还有一个例子，前缀异或：
$$xor(L,R)=pre[R] \oplus pre[L-1]$$
因为异或的逆运算就是其自身，由此还可以发现一些很有意思的性质（在此不详细说了...）


### 拓展维度

例如`二维前缀和`等，本质上是`容斥原理`

#### 补充

二维前缀和的计算
```cpp
auto a = vector(n, vector<int>(m));
auto sum = vector(n + 1, vector<int>(m + 1));

// 先考虑current row，再加上上一行的影响
for (int i = 1; i <= n; i++) {
    partial_sum(a.begin(), a.end(), sum[i].begin());
    for (int j = 1; j <= m; j++) {
        sum[i][j] += sum[i - 1][j];
    }
}

// 根据周边的几块，利用容斥原理
for (int i = 1; i <= m; i++) {
    for (int j = 1; j <= n; j++) {
        sum[i][j] =
            a[i][j] + sum[i - 1][j] + sum[i][j - 1] - sum[i - 1][j - 1];
    }
}
```

### 普遍意义

单纯的表示当前到开始，进行一种运算的结果，不一定要有可逆性质

例如
```cpp
prefix[i] = max(max(max(arr[0], arr[1]), arr[2]), arr[3]); // 前缀最大值
```

如果是从后开始，我们还可以得到后缀运算
```cpp
partial_sum(arr.rbegin(), arr.rend(), pre.rbegin());
```
> 参考[LeetCode接雨水](https://leetcode.cn/problems/trapping-rain-water/description/)
