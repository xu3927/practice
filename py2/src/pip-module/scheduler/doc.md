[TOC]

# APScheduler

文档 https://apscheduler.readthedocs.io/en/latest/userguide.html

## APScheduler 有4种组件

- Triggers: 包含任务调度逻辑，每个任务包含自身的 trigger 用于控制自身何时被调用。
- Job Stores: 任务集合，默认 job stores 把任务保存在内存中。但是其他 store 会保存在某些数据库中。 一个任务的数据如果要持久化的时候回被序列化，在需要被调用的时候进行反序列化。job stores 会在后台作为中间角色进行任务的存储，加载，更新. job stores 不能在不同 schedulers 中共享。
- Executors: 用来处理执行中的任务，任务在执行中会发送指定的 callable 到 thread 或 process pool 中，当任务完成后，excutor 会 emit 一个事件来通知 scheduler。
- Schedulers: 将上面3个组件绑定到一起，通常一个应用中只有一个 scheduler, 开发者通常不会直接操作 job stores, executors 或 triggers。而是通过 scheduler 提供的接口来进行处理。

## 如何选择合适的 Scheduler

- BlockingScheduler: use when the scheduler is the only thing running in your process 应用中只有该 scheduler 时使用
- BackgroundScheduler: use when you’re not using any of the frameworks below, and want the scheduler to run in the background inside your application 在应用中作为后台服务时使用
- AsyncIOScheduler: use if your application uses the asyncio module 采用异步模式时使用
- GeventScheduler: use if your application uses gevent 使用 gevent 库时
- TornadoScheduler: use if you’re building a Tornado application 
- TwistedScheduler: use if you’re building a Twisted application
- QtScheduler: use if you’re building a Qt application

### 选择 job store

取决于是否需要持久化 job, 不需要持久化选择默认。否则选择其他合适的方式。

To pick the appropriate job store, you need to determine whether you need job persistence or not. If you always recreate your jobs at the start of your application, then you can probably go with the default (MemoryJobStore). But if you need your jobs to persist over scheduler restarts or application crashes, then your choice usually boils down to what tools are used in your programming environment. If, however, you are in the position to choose freely, then SQLAlchemyJobStore on a PostgreSQL backend is the recommended choice due to its strong data integrity protection.

### 选择 executors

默认选择 ThreadPoolExecutor 即可

Likewise, the choice of executors is usually made for you if you use one of the frameworks above. Otherwise, the default ThreadPoolExecutor should be good enough for most purposes. If your workload involves CPU intensive operations, you should consider using ProcessPoolExecutor instead to make use of multiple CPU cores. You could even use both at once, adding the process pool executor as a secondary executor.

### 选择 trigger

选择 trigger 取决于任务运行时 dates/times 的计算方式, 有3种内置的 trigger 形式

When you schedule a job, you need to choose a trigger for it. The trigger determines the logic by which the dates/times are calculated when the job will be run. APScheduler comes with three built-in trigger types:

- date: use when you want to run the job just once at a certain point of time 定时任务
- interval: use when you want to run the job at fixed intervals of time 间隔任务，每多少秒执行一次
- cron: use when you want to run the job periodically at certain time(s) of day 每天的固定时间执行的周期任务
- calendarinterval: use when you want to run the job on calendar-based intervals, at a specific time of day 日历指定时间执行的任务

trigger 也可以多种形式结合使用。

## 配置 scheduler

参考 https://apscheduler.readthedocs.io/en/latest/modules/schedulers/base.html#apscheduler.schedulers.base.BaseScheduler

APScheduler 提供多种配置任务的方式。 
- 传一个dict 配置文件
- 传一组  kw 参数
- 先实例化 scheduler，然后再添加任务和配置

### 创建一个任务调度，使用默认配置

```python
from apscheduler.schedulers.background import BackgroundScheduler
scheduler = BackgroundScheduler()
```

### 配置多种任务

有3种配置方式

```python
from pytz import utc

from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.jobstores.mongodb import MongoDBJobStore
from apscheduler.jobstores.sqlalchemy import SQLAlchemyJobStore
from apscheduler.executors.pool import ThreadPoolExecutor, ProcessPoolExecutor


jobstores = {
    # 使用 mongodb 的 jobstore
    'mongo': MongoDBJobStore(),
    #  默认使用 sqlLite 的 store
    'default': SQLAlchemyJobStore(url='sqlite:///jobs.sqlite')
}
executors = {
    # 启动20个线程的执行器
    'default': ThreadPoolExecutor(20),
    # 启用 5 个进程池
    'processpool': ProcessPoolExecutor(5)
}
job_defaults = {
    # 新任务不合并
    'coalesce': False,
    # 每个任务最多创建3个实例
    'max_instances': 3
}
scheduler = BackgroundScheduler(jobstores=jobstores, executors=executors, job_defaults=job_defaults, timezone=utc)
```

配置2

```python
from apscheduler.schedulers.background import BackgroundScheduler


# The "apscheduler." prefix is hard coded
scheduler = BackgroundScheduler({
    'apscheduler.jobstores.mongo': {
         'type': 'mongodb'
    },
    'apscheduler.jobstores.default': {
        'type': 'sqlalchemy',
        'url': 'sqlite:///jobs.sqlite'
    },
    'apscheduler.executors.default': {
        'class': 'apscheduler.executors.pool:ThreadPoolExecutor',
        'max_workers': '20'
    },
    'apscheduler.executors.processpool': {
        'type': 'processpool',
        'max_workers': '5'
    },
    'apscheduler.job_defaults.coalesce': 'false',
    'apscheduler.job_defaults.max_instances': '3',
    'apscheduler.timezone': 'UTC',
})
```

配置方式3

```python
from pytz import utc

from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.jobstores.sqlalchemy import SQLAlchemyJobStore
from apscheduler.executors.pool import ProcessPoolExecutor


jobstores = {
    'mongo': {'type': 'mongodb'},
    'default': SQLAlchemyJobStore(url='sqlite:///jobs.sqlite')
}
executors = {
    'default': {'type': 'threadpool', 'max_workers': 20},
    'processpool': ProcessPoolExecutor(max_workers=5)
}
job_defaults = {
    'coalesce': False,
    'max_instances': 3
}
scheduler = BackgroundScheduler()

# .. do something else here, maybe add jobs etc.
# 调用 configure 修改配置
scheduler.configure(jobstores=jobstores, executors=executors, job_defaults=job_defaults, timezone=utc)
```

## 启动 scheduler

调用 scheduler 实例的 start() 即可启动。
非 BlockingScheduler 的情况下会立即返回原应用中。并可以继续配置 scheduler
在 BlockingScheduler 模式中，需要完成配置后再启动

## Adding jobs

添加任务有两种方式

1. 调用 add_job() 该方式比较常用. 执行后会返回 apscheduler.job.Job 实例，可以用来修改或移除任务
2. scheduled_job() 如果运行过程中不需要改变任务时可以使用这种

可以在任意时间配置 jobs

如果添加任务后需要任务立即执行，则在添加时触发 trigger 参数

### 任务的序列化

如果需要序列化 job，需要满足下列条件
1. The target callable must be globally accessible 
2. Any arguments to the callable must be serializable 

内置的 stores 中只有 MemoryJobStore 不会序列化任务。
内置的执行器，只有 ProcessPoolExecutor 会序列化任务

如果要持久化一个任务， 必须为该任务定义一个 explicit ID， 同时设置 replace_existing=True， 否则每次应用重启都会产生一个任务的新的备份

## Removing jobs

移除任务会从其相对应的 job stores 移除该任务。并且不再执行。 有2种方式

1. 调用 scheduler.remove_job(<job_id>)
2. 调用 任务实例的 remove() 方法

```python
# 通过 job 实例的 remove 方法移除
job = scheduler.add_job(myfunc, 'interval', minutes=2)
job.remove()

## 通过 job_id remove
scheduler.add_job(myfunc, 'interval', minutes=2, id='my_job_id')
scheduler.remove_job('my_job_id')
```

### 任务的暂停与恢复

两种方法

通过 job 实例调用

```python
timeJob = scheduler.add_job(tick, 'interval', seconds=1)
# 暂停 
timeJob.pause()
# 重启
timeJob.resume()
```

通过 scheduler 实例调用 

```python
timeJob = scheduler.add_job(tick, 'interval', seconds=1)
# 暂停 
scheduler.pause_job(timeJob.id)
# 重启
scheduler.resume_job(timeJob.id)
```


## 获取计划中的任务列表

```python
def count():
    print 'count'

scheduler = BackgroundScheduler()
job1 = scheduler.add_job(count, 'interval', seconds=1)
job2 = scheduler.add_job(count, 'interval', seconds=1)
job3 = scheduler.add_job(count, 'interval', seconds=1)

# 获取 job_list
scheduler.get_jobs()
```

## Modifying jobs 修改任务

可以修改 job 的任务属性，不可以修改 id

```python
job.modify(max_instances=6, name='Alternate name')
```

## scheduler 的关闭与暂停

```python
scheduler.shutdown()
scheduler.pause()
scheduler.resume()
```
关闭所有的job stores 和 excutors， 默认会等所有正在执行的任务完成。wait 参数可以设置不等待

```python
scheduler.shutdown(wait=False)
```

## 限制同一任务的同时执行数量

通过设置 max_instances 参数可以设置同一个任务的实例个数

默认一个任务只能有一个实例在运行。 如果新任务执行时上一个任务还没完成，则新的任务不会执行。

## Scheduler events

所有的 event [Event Codes](https://apscheduler.readthedocs.io/en/latest/modules/events.html#module-apscheduler.events)
可以为 scheduler 绑定事件。

```
add_listener(callback, mask=EVENT_ALL)
```
第一个参数是回调函数
第二个参数可以传事件类型，来过滤需要的触发的事件。默认所有事件都会触发

```python
from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.events import EVENT_JOB_EXECUTED, EVENT_JOB_ERROR

def count():
    print 'count'

def my_listener(event):
    print 'my_listener-event', event.exception
    if event.exception:
        print 'job crashed'
    else:
    print 'job worked'

scheduler = BackgroundScheduler()
job = scheduler.add_job(count, 'interval', seconds=1)
scheduler.add_listener(my_listener, EVENT_JOB_EXECUTED | EVENT_JOB_ERROR)
```

## Troubleshooting 故障排除

设置 scheduler 的 logger level

```python
import logging
logging.basicConfig()
logging.getLogger('apscheduler').setLevel(logging.DEBUG)
```










