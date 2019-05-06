# 读取文件, 出现异常时保证关闭文件
import sys
import time

filename = input('输入文件名')

f = None
try:
    f = open(filename)
    while True:
        line = f.readline()
        if (len(line) == 0):
            break
        print(line)
        # stdout.flush 执行后才能在 stdout 上输出
        sys.stdout.flush()
        # 暂停2s
        time.sleep(2)
except IOError:
    print('找不到该文件')
except KeyboardInterrupt:
    print('中断了操作')
except EOFError:
    print('结束了程序')
finally:
    if f:
        f.close()
        print('最终关闭了文件')
