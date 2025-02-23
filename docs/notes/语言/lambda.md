---
title: 匿名函数
tags:
    - cpp
    - lambda
icon: 'mdi:lambda'
createTime: 2025/02/23 08:42:20
permalink: /language/lambda/
---

## 引入

### 第一个例子：定义自由

在`sort函数`中，想要自定义比较函数，例如`奇数在偶数前，再按从小到大排序`。

我们可以使用普通函数的形式来书写代码。

```cpp
bool comparer(int a, int b) {
    if (a % 2 != b % 2)
        return a % 2 == 1;
    else
        return a < b;
}
int main() {
    vector<int> a = {1, 1, 4, 5, 1, 4};
    sort(a.begin(), a.end(), comparer);
    return 0;
}
```

我们也可以采用`匿名函数`的形式，所谓`匿名`，就是无需函数名，==可以在直接需要使用的地方定义==

```cpp
sort(a.begin(), a.end(), [](int a, int b) {
    if (a % 2 != b % 2)
        return a % 2 == 1;
    else
        return a < b;
});
```

### 第二个例子：传参自由

我们再来看另外一个例子

```cpp
bool matcher(int x) { return x > target; }
int main() {
    vector<int> a = {1, 9, 1, 9, 8, 1, 0};
    int target = 7;
    auto it = find_if(a.begin(), a.end(), matcher);
    return 0;
}
```
但是`matcher`只能传递一个参数`x`，而无法传递`target`，无法胜任。

这时候我们`匿名函数`的`[]`就可以派上用场了，其意义为==捕获(capture)==
```cpp
vector<int> a = {1, 9, 1, 9, 8, 1, 0};
int target = 7;
auto it =
    find_if(a.begin(), a.end(), [target](int x) { return x > target; });
cout << *it << endl;
```

## 深入

### 值捕获 & 引用捕获

```cpp
// 值捕获
[x]() {
    x;      // 可以在函数内访问x
    x = 1;  // 但是无法修改x,所以这一行会报错
}
[=]() {     // 值捕获所有
    x, y, z;
}
```

```cpp
// 引用捕获
[&x]() {    // 如果想要对x进行修改，则采用引用捕获
    x = 1;
}
[&]() {     // 引用捕获所有
    x, y, z;
}
```

```cpp
// 混合使用
[x, &y]() {
    x;
    y = 1;
}
[&, x]() {
    x;
    y = z = 1;
}
[=, &x]() {
    y, z;
    x = 1;
}
```
> [!tip]
> **什么时候使用值捕获？什么时候使用引用捕获？**
> 
> 与**函数传参**类似：
>
> 1. 想要改变变量：&
>
> 2. 变量较大，避免拷贝过程中的性能开销：&

### 初始化捕获 & mutable

可以在开始定义并初始化一个变量

```cpp
// 初始化捕获 
[x, init = x * x]() {
    x, init;
}

// mutable修饰，就可以对函数参数进行修改
[x, init = x * x]() mutable {
    x = init = 0;
}
```

### 作为普通函数

```cpp
auto swap = [](int &a,int &b) {
    int tmp = a;
    a = b;
    b = tmp;
};
```
> [!warning]
> 1. 不要忘记末尾的分号！！
>
> 2. 这个变量的类型只能使用`auto`来推导


### 递归调用

```cpp
auto fib = [](auto& self, int x) {
    if (x <= 2) return 1;
    return self(self, x - 1) + self(self, x - 2);
};
cout << fib(fib, 10) << endl;
```

直接递归调用会导致编译器无法正确识别匿名函数的类型，所以得通过自身传参的方式。