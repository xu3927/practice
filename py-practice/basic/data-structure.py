# 数据结构
# python 中有四种数据结构 列表 list, tuple, dictionary, set

# 列表 list
cities = ['北京', '上海', '广东', '东莞']
print('有', len(cities), '项')
cities.append('驻马店')
print('某项', cities[3])
# 删除某项
del cities[0]
print('删除之后:', cities)
for item in cities:
    print(item, end=' ')
cities.sort()
print('排序后:', cities)

# Tuple 保存的是一组字符串
movies = '盗梦空间', '阿凡达', '黑客帝国', 888
musics = ('喜洋洋', '大脸猫', '大头儿子', movies)
print('Tuple:', musics)
print('Tuple 长度:', len(movies))
print('Tuple某项', movies[2])

# Dictionary 字典, name, value 都需要引号
xiaoming = {
    'age': 15,
    'name': '小明',
    'height': 170,
    'friend': 'lily'
}
print(xiaoming)
print(xiaoming['name'])
# 删除一个name
del xiaoming['friend']
print(xiaoming)
# 遍历 name, value
for name, val in xiaoming.items():
    print(name, val)
# 添加键值对
xiaoming['book'] = '金瓶梅'
print(xiaoming)
# 判断是否有 key
if 'height' in xiaoming:
    print('包括 height key')
else:
    print('没有 height key')

# 序列 Sequence
# list, Tuple, String 实际上都是序列（Sequence）的某种表现形式

# slicing 操作符 切片
fruits = ['香蕉', '番茄', '西瓜', '荔枝', '苹果', '橙子', '柠檬']

print(fruits[2:4])  # 输出下标为 2, 3的项 西瓜, 荔枝
print(fruits[-1])
print(fruits[-2])
print(fruits[1:-2])
print('slice 带步长', fruits[1:7:2])  # 切片可以带第三个参数, 表示步长, 每2步取一个


# 字符串的切片
print('characters 1 to 3 is', name[1:3])
print('characters 2 to end is', name[2:])
print('characters 1 to -1 is', name[1:-1])
print('characters start to end is', name[:])

# Set 集合, 如果只关心项的存在与否, 而不关心其次序或次数的话, 可以使用集合.
vegetables = set(['白菜', '萝卜', '西红柿'])
print('白菜' in vegetables)
print('篮球' in vegetables)
vegetables.add('钢琴')
print(vegetables)
vegetables.remove('钢琴')
print(vegetables)
subSet = set(['白菜', '萝卜'])
print('是否是超集', vegetables.issuperset(subSet))
print('是否是子集', subSet.issubset(vegetables))
