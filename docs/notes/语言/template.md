---
title: 模板
createTime: 2025/02/28 22:52:00
icon: 'tabler:template'
permalink: /language/template/
---

## 引入

我们在编写`sum函数`时，可能会遇到这种情况：

```cpp
int sum(int a, int b) { return a + b; }

int main() {
  // sum函数只能用来实现整数的相加
  cout << sum(2, 3) << endl;
  // 而无法实现浮点数的相加
  cout << sum(0.9, 1.7) << endl;
}
```

这时候，我们可能会想到使用`函数重载`来解决问题：

```cpp
int sum(int a, int b) { return a + b; }
double sum(double a, double b) { return a + b; }
```

我们的问题暂时得到解决了，但是没过多久之后，我又想让`string`相加，就得再复制粘贴一遍代码，并修改代码块中的类型。

不仅如此，大量重复的函数定义会使得我们的代码显得有点臃肿（试想一下如果不是`sum`这种简单的函数）。

这时候，我们就需要一种能够实现==一次编写，多处复用==的强有力工具 —— 模板。

## 语法

使用`template <typename T>`来定义模板，约定俗成为**T**（当然也可以自己定义）。

它会在下面的第一条语句中生效。

```cpp
template <typename T>
T sum(T a, T b) {
  return a + b;
}

// 这一条中，T就会“失效”，会报错
T add() {}

int main() {
  cout << sum<int>(2, 3) << endl;
  cout << sum<double>(0.9, 1.7) << endl;
  cout << sum<string>("Hello ", "world!") << endl;
}

// 输出
// 5
// 2.6
// Hello world!
```

`模板`的使用和`函数`很相似，我们也可以设置初始值：

```cpp
template <typename T = int>
T sum(T a, T b) {
  return a + b;
}

// 这一条中，T就会“失效”，会报错
T add() {}

int main() {
  cout << sum<>(2, 3) << endl;
  cout << sum(1,4) << endl; // c++17
}

// 输出
// 5
// 5
```
也可以使用值作为模板的参数：

```cpp
template <typename T = int, int c>
T sum(T a, T b) {
  return a + b + c;
}
// 这里只是演示，对于实现sum函数的功能来说没有任何意义
int main() { 
  cout << sum<int, 6>(2, 3) << endl; 
}
```


## 拓展

### 可变参数模板

现在，我们不仅想要不同类型的`sum`，还想要实现多个参数的`sum`。

我们也不太可能实现对3个、4个......的单独重载。

这时候，我们引入`可变参数模板`：

```cpp
template <typename... Args>
auto sum(Args... args) {
  return (args + ...);  // 括号是语法的一部分
}

int main() {
  cout << sum<int>(2, 3) << endl;
  cout << sum<int>(2, 3, 4) << endl;
  string s1 = "Hello ", s2 = "world", s3 = "!";
  cout << sum<string>(s1, s2, s3) << endl;
}

// 输出
// 5
// 9
// Hello world!
```

这里使用了c++17引入的`折叠表达式`，语法我也没摸透，在此便不细说了。