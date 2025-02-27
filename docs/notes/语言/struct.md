---
title: 纯数据结构体
createTime: 2025/02/27 09:17:30
tags: 
  - cpp
icon: 'iconoir:view-structure-up'
permalink: /language/struct/
---


## 定义 & 声明

```cpp
// 声明
struct Student {
  int score;
  string name;
};

// 定义
Student stu, stus[100];

Student* pstu = new Student;

struct Student {
  int score;
  string name;
} stu, stus[10];
```


### 匿名结构体的定义

```cpp
struct Student {
  int score;
  string name;
} stu, stus[10];

// c++11 declared type
decltype(stu) stu2;
```

### 嵌套定义

```cpp
struct A {};
int main() {
  struct B {};
  if (true) {
    struct C {};
  }
  struct D {
    struct E {};
  };
}
```

### 初始化

```cpp
Student a = {99, "unf01d"};
Student b = {99};
Student c{99};
auto d = Student{99};
// c++20
Student e{.name = "99"};
```


## 内存分配

并非简单的成员内存累加，而是内存对齐，满足以下几点规则：
1. 以最大的类型作为宽度构建一个矩阵（数组并不以整体计算）
2. 按定义的顺序摆放
3. 每个数据只能摆放在其大小的倍数的位置
4. 当一行摆不下时，就新起一行
5. 最终，行乘列就是这个结构体的大小

```cpp
struct S {
  char c;
  int i;
  short s;
  double d;
  char c2;
};
```

根据内存对齐规则会有极大的内存==空间浪费==，但是可以==加速计算机对数据的访问==。

如果希望内存利用率更高，可以按照从大到小的方式定义成员变量。

```cpp
struct S {
  double d;
  int i;
  short s;
  char c;
  char c2;
};
```

## 结构化绑定

```cpp
// c++17
auto [s, n] = stu;
auto [score] = stu; // false -> must all

// if want only
for(auto& [s, _] : arr){
  cin >> s;
} 
```

## 两个数据的聚合

可以用`pair`来绑定两个参数。

```cpp
pair<int, string> a;
a.first;
a.second;
pair<int, string> a{99, "unf01d"};
auto &[f, s] = a;
auto b = make_pair(80, "ja1u0va");
// a <=> b
```

### pair相较于struct的优势

如果两个类型都支持大小比较，`pair`也就支持大小比较。（先比较第一个，如果相同再比较第二个）

```cpp
int n = 8;
vector<pair<int, string>> stus(n);
for(auto& [s, f] : stus){
  cin >> s >> f;
}

sort(stus.begin(), stus.end());
```

### 如果超过两个元素

```cpp
tuple<int, int, string> a{99, 7, "unf01d"};
auto &[score, id, name] = a;
auto b = make_tuple(80, 8, "ja1u0va");

// however,can't use first,second...
get<0>(a);
get<1>(a);
get<2>(a);
```

### tie绑定

```cpp
auto b = make_tuple(80, 8, "ja1u0va");
string name;
int score, id;
tie(score, id, name) = b;
cout << score << ' ' << id << ' ' << name << endl;
```
