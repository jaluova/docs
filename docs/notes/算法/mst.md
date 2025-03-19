---
title: 最小生成树
createTime: 2025/03/19 20:05:15
permalink: /algorithm/mst/
---

## kruskal

```cpp
// https://www.luogu.com.cn/problem/P3366
#include <iostream>
#include <queue>
#include <vector>

using namespace std;
using ll = long long;

struct edge {
  int u;
  int v;
  int w;
  edge() {}
  edge(int u, int v, int w) : u(u), v(v), w(w) {}
  bool operator>(const edge& x) const { return w > x.w; }
};

int main() {
  int n, m;
  cin >> n >> m;
  vector<edge> edges(m);
  vector<int> fa(n + 1);
  for (int i = 1; i <= n; i++) fa[i] = i;
  auto f = [&](int x) {
    int f = fa[x];
    for (; fa[f] != f; f = fa[f]);
    fa[x] = f;
    return f;
  };

  priority_queue<edge, vector<edge>, greater<edge>> q;
  for (int i = 0; i < m; i++) {
    auto& [u, v, w] = edges[i];
    cin >> u >> v >> w;
    q.push(edges[i]);
  }
  ll ans = 0;
  ll cnt = 0;
  while (cnt < n - 1) {
    if (q.empty()) {
      cout << "orz" << endl;
      return 0;
    }
    auto [u, v, w] = q.top();
    q.pop();
    if (f(u) == f(v)) continue;
    fa[f(v)] = f(u);
    ans += w;
    cnt++;
  }
  cout << ans << endl;
}
```

## prim

```cpp
// https://www.luogu.com.cn/problem/P3366
#include <iostream>
#include <queue>
#include <vector>

using namespace std;
using ll = long long;
constexpr ll INF = 1ll << 60;

struct T {
  int v;
  int w;
  T() : v(0), w(0) {}
  T(int v, int w) : v(v), w(w) {}
};

struct V {
  int v;
  int d;
  V() : v(0), d(0) {}
  V(int v, int d) : v(v), d(d) {}
  bool operator>(const V& x) const { return d > x.d; }
};

int main() {
  int n, m;
  cin >> n >> m;

  vector<T> map[n + 1];
  while (m--) {
    int u, v, w;
    cin >> u >> v >> w;
    map[u].emplace_back(v, w);
    map[v].emplace_back(u, w);
  }

  vector<ll> dis(n + 1, INF);
  vector<bool> vis(n + 1);
  priority_queue<V, vector<V>, greater<V>> q;
  dis[1] = 0;
  q.emplace(1, dis[1]);
  ll ans = 0ll, cnt = 0ll;
  while (!q.empty()) {
    if (cnt >= n) break;
    auto [u, d] = q.top();
    q.pop();
    if (vis[u]) continue;
    vis[u] = true;
    cnt++;
    ans += d;
    for (auto [v, w] : map[u]) {
      if (w < dis[v]) {
        dis[v] = w;
        q.emplace(v, dis[v]);
      }
    }
  }
  if (cnt == n)
    cout << ans << endl;
  else
    cout << "orz\n";
}
```
