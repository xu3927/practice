# 文件的读取, 保存 IO 操作

inp = input('输入文本')
# open 打开文件
_file = open('1.txt', 'w')

# 读文件 _file.write(inp)

txt = '''
哈哈
谢谢
滴滴
么么哒
'''
_file.write(txt)
_file.write(inp)
_file.close()

# read 模式 为默认模式
_fileR = open('1.txt')
while True:
    # 读取一行
    line = _fileR.readline()
    if (len(line) == 0):
        break
    print(line, end='')
_fileR.close()

# pickle 持久化存储 python 对象
