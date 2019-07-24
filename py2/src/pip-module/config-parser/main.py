# -- coding:UTF-8
# https://docs.python.org/3/library/configparser.html
# 提供了一种配置语言，类似 INI 文件的配置格式

import configparser

# 创建配置文件

config = configparser.ConfigParser()
config['DEFAULT'] = {
    'Env': 'develop',
    'Port': 8000,
    'Host': 'localhost'
}

config['a.org'] = {}
config['a.org']['host'] = 'a.org'
config['a.org']['port'] = '8080'

# 写操作
with open('server.conf', 'w') as configfile:
    config.write(configfile)

# 创建2

conf2 = u'''
    [a.com]
        server = a.com
        static = /static/a
        port = 8000

    [b.com]
        server = b.com
        static = /static/b
        port = 8001

    [c.com]
        server = c.com
        static = /static/c
        port = 8002
'''

parser2 = configparser.ConfigParser(allow_no_value=True)
parser2.read_string(conf2)
with open('conf2.ini', 'w') as conf2file:
    parser2.write(conf2file)


# 读操作
parser3 = configparser.ConfigParser()
parser3.read('server.conf')
for key in parser3:
    print(key)
