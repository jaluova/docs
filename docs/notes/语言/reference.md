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


引用只要分为左值引用和右值引用，而`左值`、`右值`是比较深的概念。所以我们今天只介绍`左值引用`。

## 左值引用

### 常用的操作

以下是引用的常用操作（个人觉得涵盖了目前90%的场景）。

::: code-tabs

@tab 别名.cpp

```cpp
int x = 1;
int& a = x;
a++;
cout << x <<endl;

// 输出
// 2
```

@tab 函数参数.cpp

```cpp
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

需要`左值`，`右值`相关的知识基础，在此暂且不做深入讨论。

```cpp
#include <iostream>
#include <string>

// 参数中的 s 是引用，在调用函数时不会发生拷贝
char& char_number(std::string& s, std::size_t n) {
  s += s;  // 's' 与 main() 的 'str'
           // 是同一对象，此处还说明左值也是可以放在等号右侧的
  return s.at(n);  // string::at() 返回 char 的引用
}

int main() {
  std::string str = "Test";
  char_number(str, 1) = 'a';  // 函数返回是左值，可被赋值
  std::cout << str << '\n';   // 此处输出 "TastTest"
}
```

