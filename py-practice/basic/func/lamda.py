# lambda 表达式
# Lambda 表达式是一个匿名函数，是普通函数的语法糖，可以方便的创建匿名函数
# 语法： lambda argument_list: expression
# 3个特性：1. 是匿名函数 2. 有输入和输出 3. 通常功能比较简单, 由于功能一目了然，甚至不需要专门的名字
# 4种用法：
# 1. 将 lambda 赋值给一个变量，通过变量来调用该函数 add=lambda x, y: x+y


def add(x, y): return x+y

# 2. 将 lambda 赋值给其他函数。可以覆盖原函数
# 3. 将 lambda 函数作为函数的返回值
# 4. 将 lambda 函数作为函数的参数
