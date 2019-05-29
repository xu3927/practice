# 柯里化. 通过 partial 函数进行柯里化
from functools import partial


def spam(a, b, c, d):
    print(a, b, c, d)


# >>> s1(4,5,6)
# 1, 2, 3, 4
s1 = partial(spam, 1)
