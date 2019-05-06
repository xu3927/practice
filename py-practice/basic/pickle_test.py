import pickle
# 持久化存储 python 对象
colors = ['red', 'yellow', 'blue']
filename = 'colors.data'

# 打开文件, wb 打开模式, w (write), b (binary 二进制)
f = open(filename, 'wb')

# 写入对象
pickle.dump(colors, f)

# 关闭文件
f.close()

# 读取文件 r (read), b (binary 二进制)
f = open(filename, 'rb')
# 从文件中载入对象
data = pickle.load(f)
print(data)
