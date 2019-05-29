class Dog:
    """
    定义一个类 Dog
    """
    type = 'dog'
    # 类实例化会调用该 init 方法

    def __init__(self, name, age):
        self.name = name
        self.age = age
    # 类定义的方法，第一参数是实例对象

    def say(self):
        print('我是', self.type, '我叫', self.name, '我今年', self.age, '岁了')
