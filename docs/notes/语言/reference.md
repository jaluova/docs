---
title: 引用
createTime: 2025/03/03 18:03:35
icon: 'mingcute:and-line'
permalink: /language/reference/
---

## 简单介绍

引用可以看成是对象的`别名`，在声明时==必须指向对象==。

> [!warning]
> 因为引用不是对象，
> 所以`引用的数组`，`引用的引用`，`引用的指针`都是不存在的。


引用只要分为左值引用和右值引用。

> [!tip]
> 简单解释`左值`与`右值`。
> 
> 首先，左值与右值并不能简单地理解为在等号左端或右端的值。
> 
> 左值是有名字的对象，可以取地址，生命周期明确。
> 
> 左值引用则是给左值起了一个别名。
> 
> 右值是临时对象，没有名字，不能取地址，生命周期通常短暂。例如：表达式的结果、函数的返回值。


## 左值引用 T&

### 常用的操作

以下是引用的常用操作（个人觉得涵盖了目前90%的场景）。

::: code-tabs

@tab 别名.cpp

```cpp
int x = 1;
int& a = x; // a是x的别名，使用时相当于x，可以将a理解为左值
int& b = a; // 并不是“引用的引用”
int* p = &b;// 并不是“引用的指针”
(*p)++;
cout << x <<endl;

// 输出
// 2
```

@tab 函数参数.cpp

```cpp
// 相较于传指针，更符合直觉
void swap(int& a, int& b) {
  int tmp = a;
  a = b;
  b = tmp;
}
```

@tab 减少开销.cpp

```cpp
// 对于一些占用内存空间较大的对象
// 例如：vector、map等，使用引用作为函数参数可以减小拷贝带来的性能开销。

void sort(vector<int>& arr){
  // ...
}
```
:::

### 作为函数的返回值

普通函数的返回值为右值，不能进行赋值等操作。

而左值引用的返回值返回的是左值，可以进行赋值、取地址等操作。

```cpp
int a[10];

int& get() {
  cout << a << endl;
  return *a;
}

int main() {
  int* p = &get();
  cout << p << endl;
  cout << a[0] << endl;
  get() = 1;
  cout << a[0] << endl;
}
// 输出
// 0x7ff623387040
// 0x7ff623387040
// 0
// 0x7ff623387040
// 1
```
## 右值引用 T&&

因为右值的生命周期短，没有持久的内存地址。而右值引用可以延长右值的生命周期，或移动对象。（还是没搞懂😢）

```cpp
// 效率更低
vector<string> s;
string str = "a very long string.....";
s.push_back(str);


// 效率更高，因为避免了对象拷贝
// std::move强行转化为右值
string&& sRef = std::move(str);
s.push_back(sRef);
```
