# zip
# 官方文档 https://docs.python.org/3/library/functions.html#zip
# 可以把可迭代对象打包为一个元组, 返回由该元组组成的列表.
# python3中需要通过 list 转换为列表

a = [1, 2, 3]
b = [4, 5, 6]
c = [4, 5, 6, 7, 8]

# 打包为元组的列表 [(1, 4), (2, 5), (3, 6)]
zipped = zip(a, b)
print(list(zipped))
# 元素个数与最短的列表一致 [(1, 4), (2, 5), (3, 6)]
res = zip(a, c)
print(list(res))
# 与 zip 相反，*zipped 可理解为解压，返回二维矩阵式  [(4, 5, 6), (1, 2, 3), (4, 5, 6)]

res = zip(*zip(c, a, b))
print(list(res))
