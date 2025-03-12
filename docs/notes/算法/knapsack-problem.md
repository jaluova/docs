---
title: 背包问题
createTime: 2025/02/17 17:41:59
tags:
    - 算法
    - 动态规划
icon: 'gala:bag'
permalink: /algorithm/knapsack-problem/
---


## 01背包

问题描述：一个有容量上限背包，多种价值不同的物品，一种物品只能拿一次，求背包能够拿的最大价值。

核心思想：利用==动态规划==的思想，用$f_{i,j}$来记录能拿$i$个物品，且背包容量为$j$时，能达到的最大价值。

如何更新$f_{i,j}$：对于第$i$个物品，我们可以选择**拿**或者**不拿**，分别对应$f_{i-1,j}$与$f_{i-1,j-w_i}+v_i$，则可以得到==状态转移方程==：$f_{i,j}=max\{f_{i-1,j},f_{i-1,j-w_i}+v_i\}$

我们可以使用二维数组来维护$f_{i,j}$，但这样做可能会**MLE**，注意到$f_i$只与$f_{i-1}$有关，即只与上一次的值相关，所以我们可以降低维度到一维。（但是需要注意更新数据的顺序）

```cpp
for (int i = 1; i <= n; i++)
    for (int l = W; l >= w[i]; l--) f[l] = max(f[l], f[l - w[i]] + v[i]);
// 先更新l大的数据，再更新l小的数据
// 因为l大的数据由l小的数据得到
// 如果先更新l小的数据，l大的数据就无法正常更新
```

## 完全背包

问题描述：在**01背包**的基础上，每种物品能拿多次。

状态转移方程：$f_{i,j}=max\{f_{i-1,j},f_{i-1,j-k \times w_i}+k \times v_i\}$，可以==优化==为$f_{i,j}=max\{f_{i-1,j},f_{i,j-w_i}+v_i\}$，相当于是可以多次更新状态。

```cpp
for (int i = 1; i <= n; i++)
    for (int l = w[i]; l <= W; l++) f[l] = max(f[l], f[l - w[i]] + v[i]);
```

## 多重背包




## 练习题

[T525555 视野一隅](https://www.luogu.com.cn/problem/T525555)

状态转移方程：$f_{i,j}=max\{max_{l=1}^{j}\{f_{i-l,j-l}+abs(b_i-b_{i-l+1})\},f_{i-1,j}\}$

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
  int T;
  cin >> T;
  while (T--) {
    int n, k;
    cin >> n >> k;
    vector<int> a(n + 1), b(n + 1);
    auto dp = vector(n + 1, vector(k + 1, 0));
    for (int i = 1; i <= n; i++) cin >> a[i];
    for (int i = 1; i <= n; i++) cin >> b[i];

    for (int i = 1; i <= n; i++) {
      for (int j = 1; j <= min(k, i); j++) {
        int ans = 0;
        for (int l = 1; l <= j; l++) {
          ans = max(ans, dp[i - l][j - l] + abs(b[i] - a[i - l + 1]));
        }
        dp[i][j] = max(ans, dp[i - 1][j]);
      }
    }
    cout << dp[n][k] << endl;
  }
}
```
