---
title: DAG DP
icon: 'tabler:binary-tree-filled'
createTime: 2025/07/13 13:50:53
permalink: /algorithm/ng94m928/
---

## 概念

01DP和前缀DP都有明显的**层次结构**。

而更一般的DP对应的**DAG图**更==无序==，这时我们难以用`for`循环便利状态。


![](img/DAG%20DP.svg)
## 例题

### 1 巴比伦塔

>UVA437 巴比伦塔
>
>有很多块🧱，长宽高是`x, y, z`(可以任意旋转)，每种都有**无数个**，现在想要将🧱叠加起来搭一个最高的塔，要求是上面的🧱的长宽要严格小于下面的🧱。
>
>例如：
>   输入：
>    > 2
>    > 6 8 10
>    > 5 5 5
>   
>   输出：
>    > 21
>   
>   解释：第一块选择 $(10, 8)$，第二块选择 $(8, 6)$，第三块选择$(5, 5)$。
#### 做法

![](img/巴比伦塔.svg)

砖块有六种，所以可认为总共有`6 * n`个砖块。

状态：以某个砖块为**塔顶**，所能搭成的最大高度。

转移：转移到比它长宽小的砖块。

$$
对于 \ u\rightarrow v，f_{v} = \max({f_{u} + v_{u}} | u \in V, w_v < w_u, h_v < h_u)
$$
#### 代码

##### BFS

记录**入度**（有多少个状态转移到自身），*当前序状态都计算好后*，才可以计算开始从自身转移。

```cpp
// https://www.luogu.com.cn/problem/UVA437
void work(int n, int cnt) {
  vector<t3i> a;
  for (int i = 0; i < n; ++i) {
    int x, y, z;
    cin >> x >> y >> z;
    a.emplace_back(x, y, z);
    a.emplace_back(x, z, y);
    a.emplace_back(y, x, z);
    a.emplace_back(y, z, x);
    a.emplace_back(z, x, y);
    a.emplace_back(z, y, x);
  }
  n *= 6;
  auto adj = vector(n, vector<int>());
  vector<int> in(n);
  // 建图
  for (int i = 0; i < n; ++i) {
    for (int j = 0; j < n; ++j) {
      auto [x1, y1, z1] = a[i];
      auto [x2, y2, z2] = a[j];
      if (x1 > x2 && y1 > y2) {
        adj[i].push_back(j);
        in[j]++;
      }
    }
  }
  queue<int> q;
  vector<int> dp(n);
  for (int i = 0; i < n; ++i) {
    auto &[x, y, z] = a[i];
    dp[i] = z;
    if (in[i] == 0) q.push(i);
  }
  while (!q.empty()) {
    auto u = q.front();
    q.pop();
    for (auto v : adj[u]) {
      in[v]--;
      auto &[x, y, z] = a[v];
      dp[v] = max(dp[v], dp[u] + z);
      if (in[v] == 0) q.push(v);
    }
  }
  // dout << dp;
  cout << "Case " << cnt << ": maximum height = "
  << *max_element(all(dp)) << '\n';
}
```

##### DFS

记忆化搜索，*天然带有顺序*，在计算一个状态时，会先尝试计算所有能到这个状态的状态。

```cpp
vector<int> dp(n, -1);
function<int(int)> dfs = [&](int v) {
  if (dp[v] != -1) return dp[v];
  auto [x1, y1, z1] = a[v];
  dp[v] = z1;
  for (int i = 0; i < n; ++i) {
    auto [x2, y2, z2] = a[i];
    if (x2 > x1&& y2 > y1) {
      dp[v] = max(dp[v], dfs(i) + z1);
    }
  }
  return dp[v];
};
int ans = 0;
for (int i = 0; i < n; ++i) {
  ans = max(ans, dfs(i));
}
cout << ans << '\n';
```

##### 转换

排序，小的在前，大的在后，在计算一个状态的时，前置状态一定被计算了。
![[巴比伦塔转换.svg]]

```cpp
vector<int> dp(n);
for (int i = 0; i < n; ++i) {
  auto [x1, y1, z1] = a[i];
  dp[i] = max(dp[i], z1);
  for (int j = i + 1; j < n; ++j) {
    auto [x2, y2, z2] = a[j];
    if (x2 > x1&& y2 > y1) {
      dp[j] = max(dp[j], dp[i] + z2);
    }
  }
}
cout << *max_element(all(dp)) << '\n';
```

换个方向可能会更好理解：

```cpp
for (int i = 0; i < n; ++i) {
  auto [x1, y1, z1] = a[i];
  dp[i] = z1;
  for (int j = i - 1; j >= 0; --j) {
    auto [x2, y2, z2] = a[j];
    if (x2 < x1&& y2 < y1) {
      dp[i] = max(dp[i], dp[j] + z1);
    }
  }
}
cout << *max_element(all(dp)) << '\n';
```

### 2 最长递增子序列

> LeetCode.300
> 给你一个整数数组 `nums` ，找到其中最长严格递增子序列的长度。
>
> **子序列** 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，`[3,6,2,7]` 是数组 `[0,3,1,6,2,2,7]` 的子序列。

#### 做法

状态：$f_i$ 表示只选择前 i 个数字，且选择了最后一个数字得到的最长子序列长度。

转移（省略了亿些线）：

![](img/最长子序列.svg)

#### 代码

```cpp
vector<int> dp(n, 1);
for (int i = 0; i < n; ++i) {
  for (int j = i - 1; j >= 0; --j) {
    if (a[j] >= a[i]) continue;
    dp[i] = max(dp[j] + 1, dp[i]);
  }
}
cout << *max_element(all(dp)) << endl;
```
```cpp
for (int i = 0; i < n; ++i) {
  for (int j = i + 1; j < n; ++j) {
    if (a[j] <= a[i]) continue;
    dp[j] = max(dp[i] + 1, dp[j]);
  }
}
```

#### 状态压缩

一个状态，有三个信息：坐标 $i$， 值 $a[i]$ ，$dp[i]$。

我们之前的DP，也可以理解为用坐标来压缩信息。

如果我们换作用`a[i]`来压缩：
相当于开了一个非常大（值范围）的数组，数组的下标代表的是值，答案是历史上以这个值为结尾的最长递增子序列长度。

此处用到[[树状数组BIT]]`O(logn)`查找小于当前值的最长子序列长度。

```cpp
// 离散化，转化为排名（从1开始）
vector<int> rk = arr;
sort(all(rk));
rk.erase(unique(all(rk)), rk.end());
int m = rk.size(), n = arr.size();
for (int i = 0; i < n; ++i) {
  arr[i] = lower_bound(all(rk), arr[i]) - rk.begin() + 1;
}

vector<int> t(m + 1);
auto qry = [&](int i, int init = 0) {
  int res = init;
  for (; i > 0; i -= i & -i) {
    res = max(t[i], res);
  }
  return res;
};
auto upd = [&](int i, int k = 1) {
  for (; i < t.size() && i > 0; i += i & -i) {
    t[i] = max(t[i], k);
  }
};

for (auto x : arr) {
  upd(x, qry(x - 1) + 1);
}

cout << qry(m) << endl;
```

如果以`dp[i]`进行状态压缩：

 > 将结果作为状态，是一个比较难想到的状态设计。有些题正常状态难以设计，或者数据量大，这时不妨想想将结果作为状态（前提条件：结果的可能性非常小（？））

状态：答案为 $k$ 时，结尾的最小值。

转移：找到第一个小于自己的 $x$ ，为 $dp[idx]$，用 $x$ 更新 $dp[idx + 1]$。

![](img/以结果作为状态.svg)

```cpp
vector<int> ans;
for (auto x : arr) {
  int idx = lower_bound(all(ans), x) - ans.begin();
  if (idx == ans.size()) ans.push_back(x);
  else ans[idx] = x;
}
cout << ans.size();
```

### 3 数塔 & 矩阵

> LeetCode.64 最小路径和
>
> 给定一个包含非负整数的 `*m* x *n*` 网格 `grid` ，请找出一条从左上角到右下角的路径，使得路径上的数字总和为最小。
>
> **说明：** 每次只能向下或者向右移动一步。
> ![[最小路径和.svg]]

```cpp
int m = grid[0].size(), n = grid.size();
vector<int> dp(m, 1e9);
for (int i = 0; i < n; ++i) {
  for (int j = 0; j < m; ++j) {
    if (i > 0&& j > 0) dp[j] = min(dp[j], dp[j - 1]) + grid[i][j];
    else if (i == 0&& j > 0) dp[j] = dp[j - 1] + grid[i][j];
    else if (i > 0&& j == 0) dp[j] = dp[j] + grid[i][j];
    else dp[j] = grid[i][j];
  }
}
cout << dp[m - 1] << endl;
```


## 贸易航线

链接🔗：[P12214 蓝桥杯 2023 国 Python B 贸易航线](https://www.luogu.com.cn/problem/P12214)

> 每件物品可以买不止一次？？

![[贸易航线.svg|250]]

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
  cin.tie(0)->sync_with_stdio(0);
  int n, m, k;
  cin >> n >> m >> k;
  auto goods = vector(n, vector<int>(m));
  auto adj = vector(n, vector<pii>());
  for (auto& row : goods) for (auto& x : row) cin >> x;
  for (int i = 0; i < n - 1; ++i) {
    adj[i].emplace_back(i + 1, 0);
  }

  for (int col = 0; col < m; ++col) {
    int cur = 0;
    while (cur < n&& goods[cur][col] == -1) cur++;
    for (int row = 0; row < n; ++row) {
      while (row < n&& goods[row][col] == -1) row++;
      if (row == n) break;
      int diff = goods[row][col] - goods[cur][col];
      if (diff > 0) {
        adj[cur].emplace_back(row, diff);
      }
      cur = row;
    }
  }

  vector<ll> dp(n);
  for (int u = 0; u < n; ++u) {
    for (auto [v, w] : adj[u]) {
      dp[v] = max(dp[u] + w, dp[v]);
    }
  }
  cout << dp[n - 1] * k;
}
```

## 数组切分

链接🔗：[数组切分](https://www.lanqiao.cn/problems/2148/learning/)

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
  cin.tie(0)->sync_with_stdio(0);
  const int mod = 1e9 + 7;
  int n; cin >> n;
  vector<int> a(n);
  vector<ll> dp(n + 1);
  for (int i = 0 ; i < n; ++i) cin >> a[i];
  dp[0] = 1;
  for (int i = 0; i < n; ++i) {
    int maxx = a[i], minn = a[i];
    for (int j = i; j < n; ++j) {
      maxx = max(a[j], maxx), minn = min(a[j], minn);
      if (maxx - minn == j - i) {
        (dp[j + 1] += dp[i]) %= mod;
      }
    }
  }
  cout << dp[n] << endl;
}
```

## 魔法阵

链接🔗:[P12332 蓝桥杯 2023 省 Java B 魔法阵](https://www.luogu.com.cn/problem/P12332)

![[魔法阵.svg|500]]

![](img/魔法阵.svg)

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
  cin.tie(0)->sync_with_stdio(0);
  const ll INF = 1ll << 31;
  int n, k, m;
  cin >> n >> k >> m;
  auto adj = vector(n, vector<pii>());
  for (int i = 0; i < m; ++i) {
    int u, v, w;
    cin >> u >> v >> w;
    adj[u].emplace_back(v, w);
    adj[v].emplace_back(u, w);
  }
  vector<ll> diss(n, INF), dise(n, INF);
  auto dij = [&](int s, vector<ll>& dis) {
    priority_queue<pii, vector<pii>, greater<pii>> q;
    vector<int> vis(n);
    q.emplace(0, s);
    dis[s] = 0;
    while (!q.empty()) {
      auto [d, u] = q.top();
      q.pop();
      if (vis[u]) continue;
      vis[u] = true;
      for (auto [v, w] : adj[u]) if (d + w < dis[v]) {
        dis[v] = d + w;
        q.emplace(dis[v], v);
      }
    }
  };
  dij(0, diss), dij(n - 1, dise);
  ll ans = diss[n - 1];
  for (int i = 0; i < n; ++i) {
    queue<int> q;
    q.push(i);
    for (int j = 0; j < k; ++j) {
      vector<int> vis(n);
      int sz = q.size();
      while (sz--) {
        auto u = q.front();
        q.pop();
        for (auto [v, _] : adj[u]) if (!vis[v]) {
          vis[v] = true;
          q.push(v);
        }
      }
    }
    while (!q.empty()) {
      auto u = q.front();
      q.pop();
      ans = min(diss[i] + dise[u], ans);
    }
  }
  cout << ans;
}
```


