# 引入模块2, 则模块2 会执行 modules2
# from ... import 导入一个模块. 双下划线开头的变量, 如__version__ 不能导出
import modules2
from modules3 import number, sayHi
import sys


print('命令行传递的参数是')
for item in sys.argv:
    print(item)

# print('python 程序的 path 是:', sys.path)


print('被引用模块2中的变量', modules2.__version__)
print('被引用模块3中的变量', number, sayHi('小明'))

# dir 函数能够返回由对象所定义的名称列表。 如果这一对象是一个模块，则该列表会包括函数内所定义的函数、类与变量。
print('dir:', dir(modules2))
