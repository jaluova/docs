---
title: 线性筛
icon: 'mdi:funnel-outline'
createTime: 2025/03/12 11:23:20
permalink: /algorithm/euler-sieve/
---
```cpp
auto sieve = [&]() {
  for (int i = 2; i < n; i++) {
    if (!not_pri[i]) pri.push_back(i);
    for (auto j : pri) {
      if ((long long)i * j > n) break;
      not_pri[i * j] = true;
      if (i % j == 0) break;
    }
  }
};
```
k进制回文素数
```cpp
#include <iostream>
#include <vector>

using namespace std;

int main() {
  int n, k, sum = 0;
  cin >> n >> k;
  vector<int> pri;
  vector<bool> not_pri(n);

  auto check = [&k](int x) {
    vector<int> tmp;
    for (; x; x /= k) tmp.push_back(x % k);
    int len = tmp.size();
    for (int i = 0; i < len; i++)
      if (tmp[i] != tmp[len - i - 1]) return false;
    return true;
  };

  auto sieve = [&]() {
    for (int i = 2; i < n; i++) {
      if (!not_pri[i]) {
        pri.push_back(i);
        if (check(i)) sum++;
      }
      for (auto j : pri) {
        if ((long long)i * j > n) break;
        not_pri[i * j] = true;
        if (i % j == 0) break;
      }
    }
  };

  sieve();

  cout << sum << endl;
}
```