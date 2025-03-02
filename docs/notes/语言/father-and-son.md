---
title: 继承与多态
icon: 'mdi:father' 
createTime: 2025/03/02 12:14:11
permalink: /language/father-and-son/
---

## 继承

### 引入

试想我们在编写`植物大战僵尸`的代码，有很多种植物和僵尸，它们都有`位置`、`大小`、`生命值`、`攻击力`等变量，而我们要在每个类中单独添加，会导致许多重复的代码量。

所以我们引入`继承`的概念：即==在一个类中可以继承另一个类的成员变量和函数==。

### 基础语法

```cpp
// 基类，也称为父类
class Base {
  int a;
 protected:
  int b;
 public:
  int c;
};

// 子类，也称派生类
// 冒号后面接着要继承的类
class Derived : Base {
  void test() {
    a = 1;  // false，只能访问基类中的非private成员
    b = 2;
    c = 3;
  }
};
```
### 继承权限

```cpp
// default:private
class Derived : private Base {};
class Derived : protected Base {};
class Derived : public Base {};
```

`继承权限`不影响子类对父类的访问，但是==决定了父类的成员在子类中以什么权限存在==。

这会影响到从这个子类派生出的新子类和该子类的对象。

:::code-tabs

@tab private.cpp

```cpp
class Derived : Base {};

class X : Derived {
  void test() {}
};

int main(){}
```

@tab protected.cpp

```cpp
class Derived : protected Base {};

class X : Derived {
  void test() {
    b;
    c;
  }
};

int main() {}
```

@tab public.cpp

```cpp
class Derived : public Base {};

class X : Derived {
  void test() {
    b;
    c;
  }
};

int main() {
  Derived d;
  d.c;
}
```

:::

> [!tip]
> 访问权限可以据此记忆：
>
> public:`0`    protected:`1`    private:`2`
>
> 访问权限 = $max$(父类访问权限,继承权限)

### final关键字

是一种保护机制，把问题暴露在编译阶段。

```cpp
class A final {}; // 不能被继承
class B : A {};   // false
```
### 构造函数 & 析构函数

构造函数和析构函数==无法被继承==。

在子类的构造函数中，其实隐藏了父类默认构造函数的调用。

如果父类有自定义构造函数，就不会有默认构造函数，子类继承时就会出错。此时必须`显式`调用父类的构造函数。它们的调用顺序是先父类后子类。

```cpp
class Base {
  int a;
 public:
  Base(int a) : a(a) {}
};

class Derived : Base {
  int b;
 public:
  Derived(int a, int b) : Base(a), b(b) {}
};
```

如果定义了多个构造函数：

```cpp
// c++11
class Base {
 public:
  Base(int a);
  Base(string str);
  Base(vector<int> arr);
};

class Derived : Base {
 public:
  using Base::Base;
};
```

析构函数会先调用子类，再调用父类。

```cpp
class Base {
 public:
  ~Base() { cout << "2" << endl; }
};

class Derived : Base {
 public:
  ~Derived() { cout << "1" << endl; }
};

int main() {
  Derived d;
}
// 输出
// 1
// 2
```

### 亲儿子与干儿子

如果我们希望将所有的僵尸都存在一个容器当中，但各个僵尸的类型不相同。

这时就需要用到继承的另一个特性：

```cpp
class X {};

// 只要是public继承，子类就可以直接转换为父类
class Y : public X {};
Y y;
X x = y;
X& xRef = y;
X* xPtr = &y;
```
因此，我们可以这样实现：

```cpp
class Zombie {};
class LadderZombie : public Zombie {};
class Gargantuar : public Zombie {};
vector<Zombie*> zombies;
zombies.push_back(new LadderZombie());
zombies.push_back(new Gargantuar());
```

但是转成父类后，又该如何保持子类的特性呢？

由此，我们引出`多态`。

## 多态

### 静态多态

函数的重载：函数同名但参数类型或个数不同。（在编译期就确定了调用哪个函数）

### 动态多态

可同名同参，在程序运行期决定调用哪个函数。

```cpp
// 使用虚函数以实现多态
class Zombie {
 public:
  virtual void attack() {}
  // virtual void attack() = 0; 纯虚函数，子类必须重写
  // 如果有纯虚函数，则只能创造子类对象
};
class LadderZombie : public Zombie {};
class Gargantuar : public Zombie {
 public:
  void attack() override {}; // 建议加上override关键字
};

int main() {
  vector<Zombie*> zombies;
  zombies.push_back(new LadderZombie());
  zombies.push_back(new Gargantuar());
  for (Zombie* z : zombies) {
    z->attack();
  }
}
```

而对于`析构函数`，在有多态的场景下，如果不是`虚函数`，只会调用父类的析构函数，所以建议把基类的虚构函数写成虚函数，以防止内存泄漏。