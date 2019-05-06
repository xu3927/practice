# - Strings
str = '单引号'
print(str)
str2 = "双引号"
print(str2)

# 3个引号可以换行
str3 = '''三个引号
换行
也可以'''
print(str3)


# format 字符串的方法, 可以用来构建一个字符串

name = '小明'
age = 18
print('我是{0}今年{1}岁了'.format(name, age))

# 数字是可选的
print('我有一个同学, 他叫{}, 他{}岁了'.format(name, age))

# 指定替换的格式
# 对于浮点数 '0.333' 保留小数点(.)后三位
print('{0:.3f}'.format(1.0/3))  # 输出0.333
# 使用指定文本补全
print('{0:_^11}'.format('哈哈'))  # => ____哈哈_____
# 指定变量
print('我是{name}, 我今年{age}岁了, 我喜欢{favor}'.format(age=18, favor='足球', name='小明'))
# 指定 print 的结尾字符, 默认以 \n 结尾, 即会换行
print('哈哈', end='')
print('不换行', end='&')
print('嘻嘻')

# 转义, 使用 \
print('what\'s your name')

# 换行, 制表符
print('这里有个换行符\n这是下一行')
print('这里有个制表符\t这是后面的')

# 末尾添加 \ , 表示字符串将在下一行继续, 不会换行
print('哈哈\
嘻嘻')

# 原始字符串 Raw String, 转义字符不会进行转义
print(r'这是原始字符串\n\t 这些符号会直接输出')
