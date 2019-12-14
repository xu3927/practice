from threading import Timer
import threading
import time


print("hello timer")
print(1)

n = 0


def fun_timer():
    print("hello timer")
    global timer
    # 重复构造定时器
    timer = threading.Timer(2, fun_timer)
    timer.start()
    global n
    n = n + 1
    if n > 5:
        timer.cancel()


print(2)

# 定时调度
timer = threading.Timer(2, fun_timer)

print(3)
timer.start()
print(4)

time.sleep(50)
