---
title: 常用STL容器
createTime: 2025/03/18 17:06:29
icon: 'solar:library-bold-duotone'
permalink: /language/container/
---

## vector

### 引入

我们都学习过`数组`和`链表`：

在使用数组时，我们可以利用下标快速访问数组中的元素，但是数组的长度固定。

在使用链表时，我们可以改变长度，但是不能便利地访问元素。

接下来，我们将学习一种新的`容器`，它兼具了`数组`和`链表`的特性。


### 定义

定义一个`vector`，你可以在里面放各种数据类型。

> [!warning]
> 需要添加`vector`头文件
> 

```cpp
vector<int> a;
vector<double> b;

struct T {};
vector<T> c;
```

上面的定义中，并没有设置容器的大小，我们可以通过以下几种方式来控制容器的大小

```cpp
int n = 5;
vector<int> a(n, 1);  // 设置大小为 5 ，并初始化值为1，若不添加默认为0
vector<int> b = {2, 0, 0, 6, 0, 9, 1, 7};
// 可以用 size() 得到容器的大小
cout << a.size() << ' ' << b.size() << endl;
// 输出 5 8

// 可以用 resize() 改变容器大小
b.resize(2);
for (auto x : b) cout << x << ' ';
cout << endl;
// 输出 2 0
```

> [!warning]
> 区分`vector<int> a(n)`与`vector<int> a[n]`。一个vector容器就可以作为一个数组。
> 而`vector<int> a[n]`相当于是vector的数组，由多个vector组成。


### 用作数组

vector可以当作数组使用，我们可以进行下标访问。

```cpp
vector<int> a(n);
for (int i = 0; i < n; i++) {
  cin >> a[i];
}

// 可以用这两种方法定义二维数组
auto b = vector(4, vector<int>(5));
vector<vector<int>> c(5, vector<int>(4));
```

### 用作链表

vector可以当作链表使用，我们可以在链表头和尾插入元素。

```cpp
vector<int> a;
for (int i = 1; i <= 5; i++) a.push_back(i);
// 我们在此进行下标访问，说明其同时具有链表和数组的特性
for (int i = 0; i < 5; i++) cout << a[i] << ' ';
cout << endl;
// 输出 1 2 3 4 5
```

### 混合使用

```cpp
vector<int> a = {1, 2, 3, 4};
// 在末尾追加元素
a.push_back(5);
for (auto x : a) cout << x << ' ';
cout << endl;
// 输出 1 2 3 4 5
```

### 总结

vector的基础用法大致为以上这些（当然它还有很多其他很好用的功能）。


## queue

### priority_queue


## stack


## expansion:algorithm