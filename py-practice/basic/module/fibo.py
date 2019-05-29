# Fibonacci numbers module
# 斐波那契

# __name__ 获取模块名
print(__name__)

__all__ = ['fib', 'fib2']


def fib(n):
    a, b = 0, 1
    while a < n:
        print(a, end=' ')
        a, b = b, a+b
    print()


def fib2(n):
    result = []
    a, b = 0, 1
    while a < n:
        result.append(a)
        a, b = b, a + b
    return result


def fib3(n):
    result = []
    a, b = 0, 1
    while a < n:
        result.append(a)
        a, b = b, a + b
    return result


# 当作为主模块使用时，执行
if __name__ == '__main__':
    import sys
    fib(int(sys.argv[1]))
