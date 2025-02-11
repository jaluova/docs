---
title: 差分
createTime: 2025/02/09 14:45:47
tags:
    - 算法
    - 离散
    - 差分
permalink: /algorithm/difference/
---

## 引入

`差分`是快速处理区间加减操作的算法。它是前缀和的`逆运算`。

> [!tip]
> **为什么称为逆运算**
> 
> 因为我们对一个数组进行前缀和后，再进行一次差分，就可以得到原数组，反过来也一样。


它的计算公式为
$$
d_i=
\begin{cases}
a_i,&i=0 \\
a_i-a_{i-1},&i>0
\end{cases}
$$

具体写法如：
```cpp
for (int i = n - 1; i >= 0; i--) {
    if (i == 0) d[i] = a[i];
    else d[i] = a[i] - a[i - 1];
}
```

在C++的标准库中，也有

```cpp
adjacent_difference(a.begin(), a.end(), d.begin());
```

## 深入

### 主要推论

$$
a[l,r]+k \iff d[l]+k, d[r+1]-k 
$$

等式左侧对应在区间$(l,r)$`多个位置`进行运算，如果进行$M$次这样的操作，最坏时间复杂度达到$O(N \cdot M)$

如果我们进行等式右侧的操作，每次只用在$l$,$r+1$`两个位置`进行运算，如果进行$M$次这样的操作，最坏时间复杂度达到$O(N + M)$，大大降低了时间复杂度，因此称为**快速处理区间加减操作的算法**。

### 二维运算

在二维数组中，差分的计算方法可以为

::: code-tabs

@tab diff.cpp
```cpp
auto d = vector(n + 1, vector<int>(m + 1));

for (int i = n; i >= 1; i--) {
    for (int j = m; j >= 1; j--) {
        d[i][j] = a[i][j] - a[i - 1][j];
    }
    adjacent_difference(d[i].begin(), d[i].end(), d[i].begin());
}

for (int i = n; i >= n; i--) {
    for (int j = m; j >= 1; j--) {
        d[i][j] = a[i][j] - a[i - 1][j] - a[i][j - 1] + a[i - 1][j - 1];
    }
}
```
@tab prefix.cpp
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
:::

将它与前缀和的运算放在一起对比,便于理解($a \rightarrow sum, d \rightarrow a$)

#### 补充

将推论运用于二维数组，则存在$(x_1,y_1),(x_2,y_2)$(对角两点)确定的矩形，若对该矩形内所有点进行操作,则等价于
$$
(x_1,y_1)+k, \\
(x_2,y_2)+k,  \\
(x_1,y_2+1)-k, \\
(x_2,y_1+1)-k
$$
这样就可以讲$O(N^2)$优化为$O(1)$


### 运算拓展

适用于前缀和的运算，如异或、乘法取模，也适用于差分的**重要推论**

### 多重差分

**重要推论**是于普通加减法相关的推论，而这个运算操作还可以拓展

有规律的累加$\Rightarrow$多重差分

|   3   |   5   |   7   |   9   |   11   |   0   |   0   |
|-------|-------|-------|-------|--------|-------|-------|
|   3   |   2   |   2   |   2   |    2   |  -11  |   0   |
|   3   |  -1   |   0   |   0   |   0    |  -13  |  11   |

对数组依次进行差分操作，当得到只有常数个非0的元素时，可以得到最终需要修改的四个位置

更抽象的总结是：**多项式累加$\Rightarrow$多重差分**


### 差分数组

差分数组正负性$\iff$原数组增减性


## 相关习题