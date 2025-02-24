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

采用分治，将`nth`小的数字移到`nth`位。

`nth_element(Iterator begin, Iterator nth, Iterator end, Function comp)`

复杂度：==$O(N)$==

速度对比：

```cpp
int n = 10000000;
vector<int> a(n);
for (int i = 0; i < n; i++) a[i] = rnd();
vector<int> b = a;
int k = rnd() % n;

benchmark("[sort]", [&]() {
  ranges::sort(a);
  cout << a[k] << endl;
});

benchmark("[nth_element]", [&]() {
  nth_element(b.begin(), b.begin() + k, b.end());
  cout << b[k] << endl;
});
```
输出内容
```output
801552353
[sort] execution time: 467 ms
801552353
[nth_element] execution time: 35 ms
```

## lower_bound & upper_bound

基于==二分搜索==

`lower_bound`在==有序数组==中找到第一个==大于等于==$v$的迭代器

`lower_bound(Iterator begin, Iterator end, Type v, Function comp)`

`upper_bound`在==有序数组==中找到第一个==大于==$v$的迭代器

`upper_bound(Iterator begin, Iterator end, Type v, Function comp)`

复杂度：==$O(logN)$==

```
典型例子：
1 1 2 2 2 2 3 3
    l       u
       范围
```
```cpp
int n = 10000000;
vector<int> a(n);
for (int i = 0; i < n; i++) a[i] = rnd();
ranges::sort(a);
vector<int> targets(1000);
for (auto &x : targets) x = rand();

vector<int> ans1, ans2;
benchmark("[for]", [&]() {
  for (auto &x : targets) {
    for (int i = 0; i < n; i++) {
      if (a[i] >= x) {
        ans1.push_back(i);
        break;
      }
    }
  }
});

benchmark("[lower_bound]", [&]() {
  for (auto &x : targets) {
    ans2.push_back(ranges::lower_bound(a, x) - a.begin());
  }
});

for (size_t i = 0; i < ans1.size(); i++) {
  if (ans1[i] != ans2[i]) {
    cout << "error" << endl;
  }
}
```
输出内容
```output
[for] execution time: 987 ms
[lower_bound] execution time: 0 ms
```
## next_permutation & prev_permutation

生成下一个排列，在原数组中直接修改

如果已经是最后一个排列，则修改为最小的排列后，返回false

`next_permutation(Iterator begin, Iterator end)`

复杂度：==$O(N)$==

`prev_permutation`则是从后往前生成

## unique

“移除”==相邻==的相同元素，并返回新序列的尾部。（不会直接删除，需要自行删除）

`unique(Iterator begin, Iterator end, Function matcher)`

复杂度：==$O(N)$==

::: code-tabs

@tab 示例一

```cpp
// 不手动删除
vector<int> a = {1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1};
ranges::unique(a);
for (auto &x : a) cout << x << ' ';
cout << endl;

// 输出
// 1 2 1 1 2 2 2 1 1 1 1 
```
@tab 示例二


```cpp
// 手动删除
vector<int> a = {1, 1, 1, 1, 2, 2, 2, 1, 1, 1, 1};
a.erase(unique(a.begin(), a.end()), a.end());
for (auto &x : a) cout << x << ' ';
cout << endl;

// 输出
// 1 2 1
```

:::

### 离散化

```
    1 1 1 1000000000
->  1 1000000000
->  1 2
```


### 自定义“相同”

```cpp
vector<int> a = {1, 1, 10, 20, 30, 200, 2, 1, 10, -5, -8};
a.erase(
    unique(a.begin(), a.end(), [](int a, int b) { return abs(a - b) <= 10; }),
    a.end());
for (auto &x : a) cout << x << ' ';
cout << endl;
// 输出
// 1 20 200 2
```


## vector

时间复杂度：

`push_back/emplace_back`:$O(1)$

`pop_back`:$O(1)$

`insert`:$O(N)$

`erase`:$O(N)$