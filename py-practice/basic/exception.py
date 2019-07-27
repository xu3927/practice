#!/usrr/bin/python
# -*- coding:UTF-8 -*-


def foo():
    raise ValueError("haha value error", 3, 6, 7)


try:
    foo()
except ValueError as err:
    print(err)
    print(err.args)

try:

    foo()
    raise Exception("origin error")
except Exception as err:
    print(err)
