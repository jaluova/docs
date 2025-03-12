---
title: 快速幂
icon: 'hugeicons:fast-wind'
createTime: 2025/03/12 11:17:54
permalink: /algorithm/48sm4afs/
---

```cpp
auto pow = [](int x, int y) {
  int ans = 1;
  while (y) {
    if (y & 1) ans *= x;
    y >>= 1;
    x *= x;
  }
  return ans;
};
```