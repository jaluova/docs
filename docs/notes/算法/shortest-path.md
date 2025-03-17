---
title: 最短路径
createTime: 2025/03/03 18:01:56
icon: 'mynaui:path'
permalink: /algorithm/shortest-path/
---

## Floyd

```cpp
// https://www.luogu.com.cn/problem/B3647
#include <iostream>
#include <vector>

using namespace std;
using ll = long long;

int main() {
  int n, m;
  cin >> n >> m;
  auto f = vector(n + 1, vector(n + 1, 1ll << 60));
  for (int i = 1; i <= n; i++) {
    f[i][i] = 0;
  }
  while (m--) {
    ll u, v, w;
    cin >> u >> v >> w;
    f[u][v] = f[v][u] = min(w, f[v][u]);
  }
  for (int k = 1; k <= n; k++)
    for (int i = 1; i <= n; i++)
      for (int j = 1; j <= n; j++) f[i][j] = min(f[i][j], f[i][k] + f[k][j]);
  for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= n; j++) cout << f[i][j] << ' ';
    cout << '\n';
  }
}
```

## Bellman-Ford

```cpp
// https://www.luogu.com.cn/problem/P3371
#include <iostream>
#include <queue>
#include <vector>

using namespace std;
using ll = long long;
constexpr ll INF = (1ll << 31) - 1;

struct E {
  int u;
  int v;
  int w;
};

int main() {
  int n, m, s;
  cin >> n >> m >> s;
  vector<E> edges(m);
  for (int i = 0; i < m; i++) cin >> edges[i].u >> edges[i].v >> edges[i].w;

  auto spfa = [&]() {
    vector<ll> dis(n + 1, INF);
    dis[s] = 0;
    bool flag = false;
    for (int i = 0; i < n; i++) {
      flag = false;
      for (int i = 0; i < m; i++) {
        auto &[u, v, w] = edges[i];
        if (dis[u] == INF) continue;
        if (dis[u] + w < dis[v]) {
          dis[v] = dis[u] + w;
          flag = true;
        }
      }
      if (!flag) break;
    }
    for (int i = 1; i <= n; i++) cout << dis[i] << ' ';
    cout << endl;
  };
  spfa();
}
```

## SPFA

```cpp
// https://www.luogu.com.cn/problem/P3371


```

## Dijkstra

```cpp
// https://www.luogu.com.cn/problem/P4779
#include <climits>
#include <iostream>
#include <queue>
#include <vector>

using namespace std;

struct T {
  int v;
  int w;
};

struct V {
  int u;
  int d;
  // bool operator>(const V& rhs) const { return d > rhs.d; }
};

int main() {
  int n, m, s;
  cin >> n >> m >> s;
  vector<T> map[n + 1];
  while (m--) {
    int u, v, w;
    cin >> u >> v >> w;
    map[u].emplace_back(v, w);
  }
  auto djkstra = [&](int s) {
    auto cmp = [](V a, V b) { return a.d > b.d; };
    priority_queue<V, vector<V>, decltype(cmp)> q;
    vector<bool> vis(n + 1);
    vector<int> dis(n + 1, INT_MAX);
    dis[s] = 0;
    q.emplace(s, dis[s]);
    while (!q.empty()) {
      auto [u, d] = q.top();
      q.pop();
      if (vis[u]) continue;
      vis[u] = true;
      for (auto [v, w] : map[u]) {
        if (d + w < dis[v]) {
          dis[v] = d + w;
          q.emplace(v, dis[v]);
        }
      }
    }
    for (int i = 1; i <= n; i++) {
      cout << dis[i] << ' ';
    }
    cout << endl;
  };
  djkstra(s);
}
```
