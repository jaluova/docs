---
title: 深度优先搜索
icon: 'simple-icons:deepl' 
createTime: 2025/03/02 14:23:40
permalink: /algorithm/dfs/
---

```cpp
#include <climits>
#include <iostream>
#include <queue>
#include <vector>

using namespace std;

struct edge {
  int v, w;
};

struct node {
  int d;
  int u;
  bool operator>(const node& rhs) const { return d > rhs.d; }
};

int main() {
  int n, m, s;
  cin >> n >> m >> s;
  auto edges = vector(n + 1, vector<edge>());
  vector<int> dis(n + 1, INT_MAX);
  vector<bool> vis(n + 1);
  while (m--) {
    int u, v, w;
    cin >> u >> v >> w;
    edges[u].emplace_back(v, w);
    // edges[v].emplace_back(u, w);
  }
  priority_queue<node, vector<node>, greater<node>> q;
  q.emplace(0, s);
  dis[s] = 0;
  while (!q.empty()) {
    auto [_, u] = q.top();
    q.pop();
    if (vis[u]) continue;
    vis[u] = true;
    for (auto [v, w] : edges[u]) {
      if (dis[v] > dis[u] + w) {
        dis[v] = dis[u] + w;
        q.emplace(dis[v], v);
      }
    }
  }
  for (int i = 1; i <= n; i++) {
    cout << dis[i] << ' ';
  }
  cout << endl;
}
```