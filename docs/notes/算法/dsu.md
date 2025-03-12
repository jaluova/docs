---
title: 并查集
icon: 'mdi:set'
createTime: 2025/03/12 20:10:12
permalink: /algorithm/dsu/
---


```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
  int n, m, q;
  cin >> n >> m >> q;
  vector<int> fa(n + 1);

  auto f = [&](int x) {
    int y = fa[x];
    for (; y != fa[y]; y = fa[y]);
    fa[x] = y;
    return y;
  };

  auto conn = [&](int x, int y) {
    int ff = f(y);
    fa[ff] = x;
  };

  auto ping = [&](int x, int y) {
    if (f(x) == f(y))
      cout << "Yes" << endl;
    else
      cout << "No" << endl;
  };

  while (m--) {
    int a, b;
    cin >> a >> b;
    fa[a] = fa[b] = a;
  }

  while (q--) {
    string s;
    int a, b;
    cin >> s >> a >> b;
    if (s == "ping")
      ping(a, b);
    else
      conn(a, b);
  }
}
```
