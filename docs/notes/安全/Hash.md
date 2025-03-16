---
title: Hash
tag: 'crypto'
createTime: 2025/03/14 15:17:10
permalink: /security/acajoyr9/
---

```py
# Hash.py
import string
import random
from hashlib import sha256

flag_part = []
chaos = []
res = []
for _ in range(5):
    proof = ''.join([random.choice(string.ascii_letters+string.digits)
                    for _ in range(20)])
    _hexdigest = sha256(proof.encode()).hexdigest()
    flag_part.append(proof[:4])
    chaos.append(proof[4:])
    res.append(_hexdigest)

print(f'{chaos=}')
print(f'{res=}')

flag = 'SharkCTF{' + '-'.join(flag_part) + '}'  # the true flag

"""
chaos=['ywfPtRvx1shmYYyW', '7hUMQC9o6knJhGkQ', 'e2rdPlHPF72jLSBk', 'lIh3oWHmg5vXSbc9', 'scN9ucVNdNsl2xyz']
res=['466ee7e276f30e015bbbd8a45c02d91e41f40590fa937f405bfb92f76cc10273', '1ad288b8f9e3c8e8c28bf248b2f170351dbec147bfbb129fb852794ef3c2dbd4', '5a20e80942fd1212a194d68758c5ae22ff69a6f2d89dbebf2f682b7db6cfb930', '3edd7a16cab055bf576575752b3380ad32f829d689a8c66e42e674740cabe37d', 'a475ad4dcf57df18fcae0a735174dc86ada231b8f80db97d50fe1bfa00f7da44']
"""
```

```py
# exp.py
```
