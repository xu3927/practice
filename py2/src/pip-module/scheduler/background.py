#!/usr/bin/python
# -*- coding:UTF-8 -*-

from datetime import datetime
import time
import os
import pdb
from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.events import EVENT_JOB_EXECUTED, EVENT_JOB_ERROR, EVENT_ALL
import logging


logging.basicConfig()
logging.getLogger('apscheduler').setLevel(logging.INFO)

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


def tick():
    d = datetime.now()
    print('Tick! current time is: %s:%s' % (d.minute, d.second))


def my_listener(event):
    if event.exception:
        print 'job crashed'
    else:
        print 'job worked'


if __name__ == '__main__':
    scheduler = BackgroundScheduler()
    timeJob = scheduler.add_job(tick, 'interval', seconds=1)
    countJob = scheduler.add_job(count, 'interval', seconds=1)
    scheduler.add_listener(my_listener, EVENT_JOB_EXECUTED | EVENT_JOB_ERROR)

    scheduler.start()
    print '===启动定时器==='

    try:
        while True:
            # 让进程保持不挂掉
            time.sleep(2)

    except (KeyboardInterrupt, SystemExit):
        print '进程退出'
        scheduler.shutdown()
