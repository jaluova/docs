---
title: 常用STL
icon: 'solar:library-bold-duotone'
createTime: 2025/02/23 09:53:25
permalink: /language/stl/
---

## 写在开头

::: chartjs 权重
```json
{
  "type": "doughnut",
  "data": {
    "labels": ["用法", "原理", "实现"],
    "datasets": [
      {
        "data": [70, 20, 10],
        "backgroundColor": [
          "rgb(255, 99, 132)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)"
        ]
      }
    ]
  }
}
```
:::

### 随机数

```cpp
#include <random>
using namespace std;
mt19937 rnd(time(0)); // 使用时间戳，使得每次生成的种子不同
```
### 方法耗时

```cpp
#include <format> // 格式化输出
void benchmark(const string &name, const auto &func) {
  auto start = chrono::high_resolution_clock::now();
  func();
  auto end = chrono::high_resolution_clock::now();
  auto duration = chrono::duration_cast<chrono::milliseconds>(end - start);
  cout << format("{} execution time: {} ms\n", name, duration.count());
}
```

## sort

基于快速排序的混合排序（堆排序，插入排序），性能相当出色。

`sort(Iterator begin, Iterator end, Function comp)`

复杂度：==$O(NlogN)$==

## nth_element