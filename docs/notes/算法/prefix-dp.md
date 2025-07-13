---
title: 前缀 DP
icon: 'simple-icons:deepl' 
createTime: 2025/07/13 13:45:02
permalink: /algorithm/bwuhareg/
---

## 数组个数

### 做法

状态转移方程：$\mathrm{dp}[i + 1][f][s][b][c] \ +\!\!= \  \mathrm{dp}[i][f][s][a][b]$
![](img/数组个数.svg)
### 复杂度

$O(V^5 \cdot n)$
### 代码

```cpp
// https://www.luogu.com.cn/problem/P8810
#include <bits/stdc++.h>
using namespace std;

const int mod = 1e9 + 7;

int main() {
  cin.tie(0)->sync_with_stdio(0);
  int n;
  cin >> n;
  vector<int> arr(n);
  for(int i = 0; i < n; ++i) cin >> arr[i];
  auto dp = vector(n + 1, vector(11, vector(11, vector(11, vector(11, 0)))));
  for(int f = 0; f <= 10; ++f) {
    for (int s = 0; s <= 10; ++s) {
      dp[1][f][s][f][s] = 1;
    }
  }

  auto add = [&](int &a, int b) {
    a += b;
    if (a >= mod) a -= mod;
  };

  for (int i = 1; i < n - 1; ++i) {
    for (int f = 0; f <= 10; ++f) {
      for (int s = 0; s <= 10; ++s) {
        for (int a = 0; a <= 10; ++a) {
          for (int b = 0; b <= 10; ++b) {
            for (int c = 0; c <= 10; ++c) {
              if (max({a, b, c}) != arr[i]) continue;
              add(dp[i + 1][f][s][b][c], dp[i][f][s][a][b]);
            }
          }
        }
      }
    }
  }

  int ans = 0;
  for (int f = 0; f <= 10; ++f) {
    for (int s = 0; s <= 10; ++s) {
      for (int a = 0; a <= 10; ++a) {
        for (int b = 0; b <= 10; ++b) {
          if (max({a, b, f}) != arr[n - 1]) continue;
          if (max({b, f, s}) != arr[0]) continue;
          add(ans, dp[n - 1][f][s][a][b]);
          // dout << ans;
        }
      }
    }
  }
  
  cout << ans << endl;
}
```

```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
  cin.tie(0)->sync_with_stdio(0);
  const int mod = 1e9 + 7;
  auto add = [&](int& x, int y) {
    x += y;
    if (x >= mod) x -= mod;
  };

  int n;
  cin >> n;
  vector<int> arr(n);
  for (auto &x : arr) cin >> x;
  dout << arr;

  auto dp = vector(2, vector(11, vector(11, vector(11, vector(11, 0)))));
  for (int f = 0; f <= 10; ++f) {
    for (int s = 0; s <= 10; ++s) {
      dp[0][f][s][f][s] = 1;
    }
  }
  int pre = 0, cur = 1;
  for (int i = 1; i < n - 1; ++i) {
    for (int f = 0; f <= 10; ++f) {
      for (int s = 0; s <= 10; ++s) {
        for (int b = 0; b <= 10; ++b) {
          for (int c = 0; c <= 10; ++c) {
            dp[cur][f][s][b][c] = 0;
            for (int a = 0; a <= 10; ++a) {
              if (max({a, b, c}) != arr[i]) continue;
              add(dp[cur][f][s][b][c], dp[pre][f][s][a][b]);
            }
          }
        }
      }
    }
    swap(pre, cur);
  }

  int ans = 0;
  for (int f = 0; f <= 10; ++f) {
    for (int s = 0; s <= 10; ++s) {
      for (int a = 0; a <= 10; ++a) {
        for (int b = 0; b <= 10; ++b) {
          if (max({a, b, f}) != arr[n - 1]) continue;
          if (max({b, f, s}) != arr[0]) continue;
          add(ans, dp[pre][f][s][a][b]);
          // dout << ans;
        }
      }
    }
  }
  cout << ans << endl;
}
```
## 奇怪的数

### 做法

1. 进行决策
2. 判断约束
3. 推出状态

优化防止`MLE`，滚动存储状态。 （用于前缀dp，只有前几个节点会对当前节点有）

$$
\begin{align}
& 1. \ \rm dp[pre] \rightarrow dp[cur] \\
& 2. \ \rm swap(pre, cur) \\
& 1\rightarrow 0 \rightarrow 1 \rightarrow 0 \rightarrow \ ...
\end{align}
$$

![](img/奇怪的数.svg)
### 复杂度

$O(V^5 \cdot n)$
### 代码

```cpp
#include <bits/stdc++.h>
using namespace std;

const int mod = 998244353;

int main() {
  cin.tie(0)->sync_with_stdio(0);
  int n, m;
  cin >> n >> m;
  auto dp = vector(2, vector(10, vector(10, vector(10, vector(10, 0)))));

  for (int a = 1; a <= 9; a += 2) {
    for (int b = 0; b <= 9; b += 2) {
      for (int c = 1; c <= 9; c += 2) {
        for (int d = 0; d <= 9; d += 2) {
          dp[0][a][b][c][d] = 1;         
        }
      }
    }
  }

  auto add = [&](int &a, int b) {
    a += b;
    if (a >= mod) a-= mod;
  };

  // p = i % 2 = 0 
  //     i
  //   i + 1 
  // 5 4 3 2 1
  // 1 0 1 0 1
  // e d c b a
  int pre = 0, cur = 1;
  for (int i = 4; i < n; ++i) {
    int p = i % 2;
    dout.sp(to_string(cur));
    for (int b = p; b <= 9; b += 2) {
      for (int c = 1 - p; c <= 9; c += 2) {
        for (int d = p; d <= 9; d += 2) {
          for (int e = 1 - p; e <= 9; e += 2) {
            dp[cur][b][c][d][e] = 0; 
            for (int a = 1 - p; a <= 9; a += 2) {
              if (a + b + c + d + e > m) continue;
              add(dp[cur][b][c][d][e], dp[pre][a][b][c][d]);
            }
          }
        }
      }
    }
    swap(cur, pre);
  }

  int ans = 0;
  for (int a = 0; a <= 9; ++a) {
    for (int b = 0; b <= 9; ++b) {
      for (int c = 0; c <= 9; ++c) {
        for (int d = 0; d <= 9; ++d) {
          add(ans, dp[pre][a][b][c][d]);
        }
      }
    }
  }
  cout << ans << endl;
}
```


## 食堂

https://www.luogu.com.cn/problem/P11044


```cpp
#include <bits/stdc++.h>
using namespace std;

int main() {
  cin.tie(0)->sync_with_stdio(0);
  int q;
  cin >> q;
  auto work = [&]() {
    int a, b, c, d, e;
    cin >> a >> b >> c >> d >> e;
    auto dp = vector(a + 1, vector(b + 1, vector<int>(c + 1, -100)));
    int ans = 0;
    dp[a][b][c] = 0;
    for (int i = 0; i < d; ++i) {
      for (int x2 = 0; x2 <= a; ++x2) {
        for (int x3 = 0; x3 <= b; ++x3) {
          for (int x4 = 0; x4 <= c; ++x4) {
            if (x2 + 1 <= a) dp[x2][x3][x4] = max(dp[x2][x3][x4], dp[x2 + 1][x3][x4] + 2);
            if (x3 + 1 <= b) dp[x2][x3][x4] = max(dp[x2][x3][x4], dp[x2][x3 + 1][x4] + 3);
            if (x4 + 1 <= c) dp[x2][x3][x4] = max(dp[x2][x3][x4], dp[x2][x3][x4 + 1] + 4);
            if (x2 + 2 <= a) dp[x2][x3][x4] = max(dp[x2][x3][x4], dp[x2 + 2][x3][x4] + 4);
            ans = max(ans, dp[x2][x3][x4]);
          }
        }
      }
    }

    for (int i = 0; i < e; ++i) {
      for (int x2 = 0; x2 <= a; ++x2) {
        for (int x3 = 0; x3 <= b; ++x3) {
          for (int x4 = 0; x4 <= c; ++x4) {
            if (x2 + 1 <= a) dp[x2][x3][x4] = max(dp[x2][x3][x4], dp[x2 + 1][x3][x4] + 2);
            if (x3 + 1 <= b) dp[x2][x3][x4] = max(dp[x2][x3][x4], dp[x2][x3 + 1][x4] + 3);
            if (x4 + 1 <= c) dp[x2][x3][x4] = max(dp[x2][x3][x4], dp[x2][x3][x4 + 1] + 4);
            if (x2 + 2 <= a) dp[x2][x3][x4] = max(dp[x2][x3][x4], dp[x2 + 2][x3][x4] + 4);
            if (x2 + 3 <= a) dp[x2][x3][x4] = max(dp[x2][x3][x4], dp[x2 + 3][x3][x4] + 6);
            if (x3 + 2 <= b) dp[x2][x3][x4] = max(dp[x2][x3][x4], dp[x2][x3 + 2][x4] + 6);
            if (x2 + 1 <= a&& x4 + 1 <= c) dp[x2][x3][x4] = max(dp[x2][x3][x4], dp[x2 + 1][x3][x4 + 1] + 6);
            if (x2 + 1 <= a&& x3 + 1 <= b) dp[x2][x3][x4] = max(dp[x2][x3][x4], dp[x2 + 1][x3 + 1][x4] + 5);
            ans = max(ans, dp[x2][x3][x4]);
          }
        }
      }
    }
    cout << ans << '\n';
  };
  while (q--) work();
}
```

