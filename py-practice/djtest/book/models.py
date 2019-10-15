from django.db import models
from django.utils import timezone
import datetime


class Book(models.Model):
    # 在执行 Question.objects.all() 时会输出该内容. 同时也会作为 django 自动生成时的内容
    def __str__(self):
        return self.name

    # 定义字段, 每个字段都是一个内置Field类型的示例, 第一个参数可以传一个备注名称. 否则使用字段名称
    # 一些Field类型需要设置参数. 如 CharFields 必须传入 max_length. 不仅作为 database schema 也会进行校验

    name = models.CharField(max_length=200)
    # time = models.DateTimeField('date published')
    price = models.IntegerField()
    # 外键, 书的作者
    # on_delete, 当 author 被删除后, 想关联的 book 也会删除
    # author = models.ForeignKey(
    #     'Author', max_length=200, on_delete=models.CASCADE)
    publisher = models.ForeignKey(
        'Publisher', on_delete=models.CASCADE, max_length=200)


class Publisher(models.Model):
    def __str__(self):
        return self.name
    # ForeignKe: 外键 [ForeignKe](https://docs.djangoproject.com/en/2.2/ref/models/fields/#django.db.models.ForeignKey) 定义关系,
    # 定义关系, chioce 是一个 Question, django 支持所有的数据库表关系, 多对1, 多对多, 一对一
    name = models.CharField(max_length=200)


class Author(models.Model):
    def __str__(self):
        return self.name
    # ForeignKe: 外键 [ForeignKe](https://docs.djangoproject.com/en/2.2/ref/models/fields/#django.db.models.ForeignKey) 定义关系,
    # 定义关系, chioce 是一个 Question, django 支持所有的数据库表关系, 多对1, 多对多, 一对一
    name = models.CharField(max_length=200)
    age = models.IntegerField(null=True, blank=True, default=None)
    # 作者与书是多对多的关系 ManyToManyField 定义在哪个 model 中都可以. 只需要在一个 model 中声明即可
    # 多对多会创建一个不可见的 through model 来保存两者的关系, 同时创建一个中间表, 命名为 appname_model1_model2
    # 该 through table 会创建3个字段, 来表示关系, id (primary key), <containing_model>_id (声明 manyToManyField 的 model), <other_model>_id (manyToManyField 指向的 model)
    # 创建关系之前, 需要先2个 model 的实例都存在
    books = models.ManyToManyField(Book, related_name="authors")

# 标签


class Tag(models.Model):
    def __str__(self):
        return self.name
    name = models.CharField(max_length=200)
    books = models.ManyToManyField(
        'Book', through='BookTag', related_name='tags')

# 多对多中间表


class BookTag(models.Model):
    time = models.DateTimeField(auto_now_add=True)
    book = models.ForeignKey(
        'Book', related_name='book_tags', on_delete=models.SET_NULL, null=True)
    tag = models.ForeignKey('Tag', related_name='book_tags',
                            on_delete=models.SET_NULL, null=True, blank=True)
