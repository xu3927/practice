# python 内置调度模块
import sched
import time
from datetime import datetime

# 初始化 sched 模块
# 初始化sched模块的 scheduler 类
# 第一个参数是一个可以返回时间戳的函数，第二个参数可以在定时未到达之前阻塞。

schedule = sched.scheduler(time.time, time.sleep)

# 被周期性调度触发的函数


def printTime(inc):
    print(datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
    schedule.enter(inc, 0, printTime, (inc,))


# 默认参数60s
def main(inc=60):
    # enter四个参数分别为：间隔时间、优先级（用于同时间到达的两个事件同时执行时定序）、被调用触发的函数，
    # 给该触发函数的参数（tuple形式）
    schedule.enter(2, 0, printTime, (inc,))
    schedule.run()


# 10s 输出一次
main(10)

