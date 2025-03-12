---
title: 二分
icon: 'tabler:binary-tree-filled'
createTime: 2025/03/12 11:19:50
permalink: /algorithm/jvn2jtqj/
---

```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
  int T;
  cin >> T;
  while (T--) {
    int n, k;
    string s;
    cin >> n >> k >> s;
    auto f = [&](int l) {
      int cnt = 0;
      for (int i = 0; i < n; i++) {
        if (s[i] == '0') continue;
        if (s[i] == '1') {
          cnt++;
          i += l - 1;
        }
      }
      return cnt;
    };

    int l = 1, r = n - 1;
    while (l < r) {
      int mid = (l + r + 1) >> 1;
      if (f(mid) > k)
        l = mid;
      else
        r = mid - 1;
    }
    cout << f(l + 1) << endl;
  }
}
```

这个不是，只是暂存一下答案

```cpp
#include <iostream>
#include <stack>
#include <vector>

using namespace std;

int main() {
  int n, m;
  cin >> n >> m;
  stack<int> a;
  for (int i = 0; i < m; i++) {
    int x;
    cin >> x;
    a.push(x);
  }
  vector<int> ans(n);
  int ret = 0;
  for (int i = n - 1; i >= 0; i--) {
    if (i + 1 == a.top()) {
      if (i + 1 != n) {
        ans[i] = ans[i + 1];
        ret += ans[i];
      }
      a.pop();
    } else {
      ans[i] = ret + 1;
    }
  }
  cout << ret << endl;
  for (auto x : ans) cout << x << ' ';
  cout << endl;
}
```