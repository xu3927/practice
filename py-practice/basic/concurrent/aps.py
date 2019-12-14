from apscheduler.schedulers.blocking import BlockingScheduler
from datetime import datetime
import time

n = 0
cur_job = None
job_id = 'my_job_id_1'


def job():
    global n
    global cur_job
    global scheduler
    n += 1
    print(n, datetime.now().strftime("%Y-%m-%d %H:%M:%S"))
    print('state:', scheduler.state)
    if n == 3:
        scheduler.shutdown(wait=False)
    if n > 5:
        scheduler.remove_job(job_id)
        time.sleep(2)
        print('关闭调度器')
        scheduler.shutdown(wait=False)


# 调度
# APScheduler 四个组件分别为：触发器(trigger)，作业存储(job store)，执行器(executor)，调度器(scheduler)。
# 包含调度逻辑，每一个作业有它自己的触发器，用于决定接下来哪一个作业会运行。除了他们自己初始配置意外，触发器完全是无状态的
# APScheduler 有三种内建的 trigger:

# date: 特定的时间点触发
# interval: 固定时间间隔触发
# cron: 在特定时间周期性地触发

# 执行器(executor)
# 处理作业的运行，他们通常通过在作业中提交制定的可调用对象到一个线程或者进城池来进行。当作业完成时，执行器将会通知调度器。
# 最常用的 executor 有两种：

# ProcessPoolExecutor, ThreadPoolExecutor


# 配置调度器
# APScheduler提供了许多不同的方式来配置调度器，你可以使用一个配置字典或者作为参数关键字的方式传入。你也可以先创建调度器，再配置和添加作业，这样你可以在不同的环境中得到更大的灵活性。
# sched.add_job(job, 'interval', seconds=5)

scheduler = BlockingScheduler()
cur_job = scheduler.add_job(job, 'interval', seconds=1.5, id=job_id)
scheduler.start()
