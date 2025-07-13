---
title: Affine
tag: 'crypto'
icon: 'lucide:diff'
createTime: 2025/03/14 14:52:23
permalink: /security/Affine/
---

```py
# Affine.py
from secret import flag, a, b

assert flag.startswith('SharkCTF')


def encrypt(letter: str) -> str:
    if not letter.isalpha():
        return letter
    if 'a' <= letter <= 'z':
        x = ord(letter) - ord('a')
        x = (x * a + b) % 26
        return chr(x + ord('a'))
    else:
        x = ord(letter) - ord('A')
        x = (x * a + b) % 26
        return chr(x + ord('A'))


c = ''.join(encrypt(l) for l in flag)
print(f'c = {c}')
# c = IjmbeAPV{mvv1zo_q5_zg7_i3awbo}
```

```py
# 计算a,b
flag = "SharkCTF"

def encrypt(letter: str) -> str:
    if not letter.isalpha():
        return letter
    if "a" <= letter <= "z":
        x = ord(letter) - ord("a")
        x = (x * a + b) % 26
        return chr(x + ord("a"))
    else:
        x = ord(letter) - ord("A")
        x = (x * a + b) % 26
        return chr(x + ord("A"))

for a in range(1, 100):
    for b in range(1, 100):
        c = "".join(encrypt(l) for l in flag)
        if c == "IjmbeAPV":
            print(f"c = {c} a = {a} b = {b}")
            print()

# 选择最小的 a = 7 b = 12 即可
```

```py
# 逆运算
a = 15
b = 2

flag = "IjmbeAPV{mvv1zo_q5_zg7_i3awbo}"

def encrypt(letter: str) -> str:
    if not letter.isalpha():
        return letter
    if "a" <= letter <= "z":
        x = ord(letter) - ord("a")
        x = (x * a + b) % 26
        return chr(x + ord("a"))
    else:
        x = ord(letter) - ord("A")
        x = (x * a + b) % 26
        return chr(x + ord("A"))


c = "".join(encrypt(l) for l in flag)
print(f"{c}")
```