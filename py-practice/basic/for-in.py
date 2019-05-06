# for...in 语句是另一种循环语句，其特点是会在一系列对象上进行迭代（Iterates），意即它会遍历序列中的每一个项目。
for i in range(0, 5):
    print(i)
else:
    print('循环结束')

print('''-----
-----
-----''')

for i in list(range(3, 6)):
    print(i)
else:
    print('循环结束')

print(list(range(3, 5)))
print(range(3, 5))
