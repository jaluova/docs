---
title: 数学题
tag: 'crypto'
createTime: 2025/03/14 14:18:33
permalink: /security/math-problem/
---

```py
# math.py
from Crypto.Util.number import *
from secret import flag

assert len(flag) == 45

l = len(flag) // 3
flags = [flag[:l], flag[l:2*l], flag[2*l:]]
m_list = list(map(bytes_to_long, flags))


def level1(m: int) -> dict:
    p = getPrime(128)
    return {
        'p': p,
        'c': (114 * m + 514) % p
    }


def level2(m: int) -> dict:
    p = getPrime(128)
    e = 1
    for i in range(p-210): # 0 ~ p-210-1
        e = (e * (i + 1)) % p # 1 ~ p-210
    return {
        'p': p,
        'c': (m*e) % p
    }


def level3(m: int) -> dict:
    p = getPrime(64)
    q = getPrime(64)
    return {
        'p': p,
        'q': q,
        'c1': m % p,
        'c2': m % q
    }


def printQuestion(data: int, question) -> None:
    _data: dict = question(data)
    for k, v in _data.items():
        print(f'{k} = {v}')
    print('==============================================================')


questions = [level1, level2, level3]
for data, question in zip(m_list, questions):
    printQuestion(data, question)

"""
p = 327281632182588347104014356932800561263
c = 49370861265588427406805535999547383948
==============================================================
p = 222578517805675894189819055733108882473
c = 40440235145127341075948288072001787699
==============================================================
p = 287582354399517659673858829149419743579
q = 176869211431904378548479808246251726017
c1 = 578421317549657125690773773538784125
c2 = 578421317549657125690773773538784125
==============================================================
"""
```

```py
# exp.py
from Crypto.Util.number import *
import math


def inv() -> bytes:
    p = 327281632182588347104014356932800561263
    c = 49370861265588427406805535999547383948
    m = (c - 514) * inverse(114, p) % p
    return long_to_bytes(m)


def wilson() -> bytes:
    p = 222578517805675894189819055733108882473
    c = 40440235145127341075948288072001787699
    for i in range(p - 209, p):
        c = (c * i) % p
    m = -c % p
    return long_to_bytes(m)


def crt_solve(n_list, c_list) -> int:
    N = math.prod(n_list)
    n_inv_list = [inverse(N // n, n) for n in n_list]
    m = sum(c * (N // n) * n_inv for c, n, n_inv in zip(c_list, n_list, n_inv_list)) % N
    return m


def crt() -> bytes:
    p = 287582354399517659673858829149419743579
    q = 176869211431904378548479808246251726017
    c1 = 578421317549657125690773773538784125
    c2 = 578421317549657125690773773538784125
    m = crt_solve([p, q], [c1, c2])
    return long_to_bytes(m)


print(inv() + wilson() + crt())
```