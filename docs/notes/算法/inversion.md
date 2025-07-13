---
title: 逆序对
createTime: 2025/03/28 14:13:28
icon: 'material-symbols-light:arrow-range-rounded'
permalink: /algorithm/zkhyi7v5/
---

## 树状数组

```cpp
#include <algorithm>
#include <iostream>
#include <unordered_map>
#include <vector>

using namespace std;
using ll = long long;

inline int lowbit(int x) { return x & -x; }

int main() {
  int n;
  cin >> n;
  vector<int> a(n);
  for (auto &x : a) cin >> x;
  vector<int> b(a);
  sort(a.begin(), a.end());
  a.erase(unique(a.begin(), a.end()), a.end());
  int m = a.size();
  unordered_map<int, int> rk;
  for (int i = 0; i < m; ++i) rk[a[i]] = m - i;
  vector<int> t(n + 1);
  auto add = [&](int x, int k) {
    for (; x < n; x += lowbit(x)) {
      t[x] += k;
    }
  };
  auto qry = [&](int x) {
    ll res = 0;
    for (; x; x -= lowbit(x)) {
      res += t[x];
    }
    return res;
  };
  ll ans = 0;
  for (auto x : b) {
    ans += qry(rk[x] - 1);
    add(rk[x], 1);
  }
  cout << ans;
}
```
