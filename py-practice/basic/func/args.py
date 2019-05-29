# 函数
# 使用 def 定义

import html

# 一个 * 表示剩余的参数


def add(num1, num2, *rest):
    return num1 + num2 + sum(rest)

# 关键字参数


def say(name, age, country='China', sex='male'):
    print('我叫{name}，我今年{age}岁了，我来自{country}, 我是{sex}'.format(
        name=name, age=age, country=country, sex=sex))

# 任意数量关键字参数
# 使用 parseHtml('lily', 18, height=150, weight=44)


def parseHtml(name, age, **attrs):
    keyvalues = [' %s="%s"' % item for item in attrs.items()]
    attr_str = ''.join(keyvalues)
    res_str = '{name}今年{age}岁了。{attr_str}'.format(
        name=name,
        age=age,
        attr_str=html.escape(attr_str))
    return res_str

# 剩余参数和关键字参数可以同时使用
# 位置参数存放到 *中，关键字参数存放在 kwargs 中,
# 注意;
# 1. 位置参数必须位于前面，关键字参数位于后面
# 2. 位置参数 * 后还可以定义其他参数


# >>> anyargs(3,4,5,a=5,b=6,c=7)
# (3, 4, 5)
# {'a': 5, 'b': 6, 'c': 7}


def anyargs(*rest, **kwargs):
    print(rest)  # tuple
    print(kwargs)  # dict

# *之后的参数只能是关键字参数
# >>> posiargs(1,3,4,5,6,7,y=9)
# 1
# (3, 4, 5, 6, 7)
# 9


def posiargs(x, *rest, y):
    print(x)
    print(rest)
    print(y)

# 函数强制关键字参数
# 因为*之后的参数只能传递关键字参数，因此可以创建只接受关键字参数的函数

# kwfunc(3) 错误，TypeError: kwfunc() got an unexpected keyword argument 'c'
# 正确调用
# >>> kwfunc(x=1,y=2,z=3)
# 1
# 2
# 3


def kwfunc(*, x, y, z):
    '强制关键字参数'
    print(x)
    print(y)
    print(z)

# 通常使用关键字参数比位置参数表意更清晰。报错也更清楚。
# 另外，使用强制关键字参数也会比使用**kwargs参数更好，因为在使用函数help的时候输出也会更容易理解：

# >>>help(kwfunc)
# Help on function kwfunc in module __main__:
# kwfunc(*, x, y, z)
#     强制关键字参数

# 函数参数注解


def add_annotation(x: int, y: int) -> int:
    '''
    给参数添加类型注释
    查看帮助时会显示

    ```
    >>>help(add_annotation)
    add_annotation(x: int, y: int) -> int
    ```
    帮助信息保存在 __annotations__ 属性中
    '''
    return x + y

# 函数默认参数
# 默认值在函数定义时就确定了，因此默认值可以是变量，但变量的值改变时不会改变默认值。
# 默认值不应该是可变对象，如 []


def default_param_func(a, b=1):
    '''
    可以给参数设置默认值，如果设了默认值，则该参数是可选的，可以不传
    '''
    return a + b
