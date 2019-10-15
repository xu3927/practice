#!/usrr/bin/python
# -*- coding:UTF-8 -*-


class Animal:
    """
    定义一个 Animal 类
    """

    # 类属性
    hometown = "earth"
    # 定义类私有属性, 在类外不能访问
    __type = "animal"
    # 使用 __XX__定义的属性为特殊属性, 一般为预定义的属性. 虽然在类外面可以访问到, 但一般不应该如此使用
    def __init__(self, name):
        self.name = name

    # 为类定义方法, 第一个参数为类的实例
    def eat(self):
        print(self.name + "开始吃东西")

    def move(self):
        print(self.name + "开始移动")

    # 私有属性
    def __private_method(self):
        print("类的私有方法")

    def prt_private_attr(self):
        # 类中使用私有属性
        print("类内访问私有方法:", self.__private_method())
        print("私有属性为:", self.__type)

    #  @classmethod 类方法, 不用通过实例化就能使用的方法, 其中只能使用类的属性, 不能使用实例属性, 即不能使用 self
    @classmethod
    def get_type(cls):
        return cls.__type


# 创建实例
cat = Animal(name="cat")
dog = Animal(name="dog")
dog.age = 19  # 实例属性, 优先级高于类属性. 实例属性更改不会影响类, 也不会影响其他类

# 修改类属性, 实例会继承该改动.

Animal.hometown = "land"
print(dog.hometown)

# print("私有属性, 直接访问不到\r", Animal.__type)
print("访问私有属性", dog.prt_private_attr())

# 在类外访问私有方法会报错

# print("类外访问私有方法", dog.__private_method())

# classmethod 装饰
print("classmethod 装饰, 类直接使用", Animal.get_type())
print("classmethod 装饰, 实例使用", dog.get_type())

