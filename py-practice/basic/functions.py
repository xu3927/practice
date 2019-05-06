# 函数
def say_hello(name):
    print('你好{name}'.format(name=name))


say_hello('jane')

# 参数

x = 3
y = 5
z = 6


def add(a, b):
    print('和为', a + b)
    # 作用域, 只修改局部变量的值
    y = 88
    global z  # 使用 global 定义该变量为全局变量, 因此下面会修改全局变量中 z 的值
    z = 99
    print('函数内变量:', x, y, z)


add(3, 5)
print('全局作用域:', x, y, z)

# 默认参数


def takeOutFood(time, food='chips'):
    print(time+'送到, 点的菜是' + food)


takeOutFood('8:00', '汉堡')
takeOutFood('9:00')

# keyword arguments


def introduce(name, country='中国', age='20'):
    print('我叫' + name + '我来自' + country + ', 我今年' + age)


introduce(name='lucy')
introduce('lily', age='40')

# VarArgs parameters 可变参数
# 一个星号跟的是从该位置到最后的 postion 参数
# 二个星号跟的是从该位置到最后的关键字参数


def total(a, *positionParams, **keywordParams):
    print('a:' + a)
    for item in positionParams:
        print('positionParams:', item)

    for item in keywordParams:
        print('keywordParams:', item)


total('3', '10', '15', ha='haha', lucy='lucy', l='li')

# return


def maximum(x, y):
    if (x > y):
        return x
    elif x == y:
        return '相等'
    else:
        return y


print('比较大小:', maximum(10, 25))

# docStrings 文档


def print_max(x, y):
    '''得到较大值.
    @param x {int}
    @param y {int}
    这2个数都为整数'''
    x = int(x)
    y = int(y)
    if (x > y):
        print(x)
    else:
        print(y)


print('打印较大值', print_max(5, 8))
# 通过函数的__doc__属性可以获取该函数的文档字符串,
print('打印较大值带文档', print_max.__doc__)
# help 函数也可以显示帮助信息
print(help(print_max))
