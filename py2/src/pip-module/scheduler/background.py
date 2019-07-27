#!/usr/bin/python
# -*- coding:UTF-8 -*-

from datetime import datetime
import time
import os
import pdb
from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.events import EVENT_JOB_EXECUTED, EVENT_JOB_ERROR, EVENT_ALL, EVENT_SCHEDULER_STARTED
import logging


logging.basicConfig()
#  设置 log
logging.getLogger('apscheduler').setLevel(logging.WARN)

n = 0


def count():
    global n
    n = n+1
    print n
    if n % 10 > 4:
        # 任务暂停
        print '任务暂停4s'
        # 方法1
        # timeJob.pause()
        # 方法2
        scheduler.pause_job(timeJob.id)
    if n % 10 > 8:
        # 任务重启
        timeJob.resume()
    if n % 10 == 3:
        # 任务抛出错误
        raise ValueError('666 值错误')


def tick():
    d = datetime.now()
    print('Tick! current time is: %s:%s' % (d.minute, d.second))


def my_listener(event):
    print 'my_listener', type(event)
    print 'my_listener2', event.exception
    if event.exception:
        print 'job crashed'
    else:
        print 'job worked'


if __name__ == '__main__':
    scheduler = BackgroundScheduler()
    timeJob = scheduler.add_job(tick, 'interval', seconds=1)
    countJob = scheduler.add_job(count, 'interval', seconds=1)
    scheduler.add_listener(my_listener, EVENT_JOB_EXECUTED |
                           EVENT_JOB_ERROR | EVENT_SCHEDULER_STARTED)

    scheduler.start()
    print '===启动定时器==='

    try:
        while True:
            # 让进程保持不挂掉
            time.sleep(2)

    except (KeyboardInterrupt, SystemExit):
        print '进程退出'
        scheduler.shutdown()
