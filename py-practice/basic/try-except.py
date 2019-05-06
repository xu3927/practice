# 错误处理

# 定义一个错误类


class ShortInputException(Exception):
    '''定义个错误类'''

    def __init__(self, length, atleast):
        Exception.__init__(self)
        self.length = length
        self.atleast = atleast


try:
    txt = input('请输入一些东西..')
    if (len(txt) < 8):
        # raise 可以抛出一个异常
        raise ShortInputException(len(txt), '8')
except EOFError:
    # ctrl + d
    print('做了 EOF 操作')
except KeyboardInterrupt:
    # ctrl + c
    print('取消了操作')
except ShortInputException as ex:
    print('''ShortInputException
    输入的长度是{0}位, 要求不小于{1}位
    '''.format(ex.length, ex.atleast))
else:
    print('输入的内容是', txt, '没有错误')
