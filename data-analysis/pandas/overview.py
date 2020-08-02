# pandas 通览

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

plt.close('all')

# create object
# # 创建 series

s = pd.Series([1, 3, 5, np.nan, 6, 8])
print('Series>>>')
print(s)

# 创建二维表格数据 DataFrame

dates = pd.date_range('20200101', periods=6)
df = pd.DataFrame(np.random.randn(6, 4), dates, columns=list('ABCD'))
print('DataFrame>>>')
print(df)

# # 查看数据
# 查看DataFrame中的数据
print("df前2行数据>>>")
print(df.head(2))
print("df后3行数据>>>")
print(df.tail(3))

# df数据统计信息
print('查看df数据统计信息>>>')
print(df.describe())

# df 维度转换
print('df 维度转换>>>')
print(df.T)

# df 对轴排序 axis = 0 对纵轴排序, axis=1对横轴排序
print(' df 对索引排序>>>')

print(df.sort_index(axis=1, ascending=True))

# df 按值排序, axis=0 对列排序, by 指定要排序的列或行. axis=1 对行排序
print(' df 对值排序>>>')
print(df.sort_values(by=['A'], axis=0, ascending=True))

# # 选择数据

# 选择行

print('选择前两行>>>')
print(df[0:2])

# 选择多列
print('选择多列 A, C>>>')
print(df.loc[:, ['A', 'C']])

# # 运算

print('每列平均值>>>')
print(df.mean())

print('行平均值>>>')
print(df.mean(1))

# # plotting 可视化,  使用matplotlib实现可视化

# 创建一组数据
ts = pd.Series(np.random.randn(1000),
               index=pd.date_range('1/1/2000', periods=1000))
ts = ts.cumsum()
ts.plot()  # 绘图
plt.show()  # 显示图形

# # csv操作
# 写数据到csv
df.to_csv('pandas/test_df.csv')

# 从csv读取数据
df2 = pd.read_csv('pandas/test_df.csv')
