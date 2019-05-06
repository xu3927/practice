import platform
import os
import logging

sysInfo = platform.platform()
logPath = ''

if 'indow' in sysInfo:
    logPath = os.path.join(os.getenv('HOMEDRIVE'),
                           os.getenv('HOMEPATH'), 'test.log')
else:
    logPath = os.path.join(os.getenv('HOME'), 'test.log')

logPath = os.path.join(os.getcwd(), 'test.log')

print('log 文件地址为', logPath)

logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s : %(levelname)s : %(message)s',
    filename=logPath,
    filemode='w',
)

# 输入 log
logging.debug("Start of the program")
logging.info("Doing something")
logging.warning("Dying now")
