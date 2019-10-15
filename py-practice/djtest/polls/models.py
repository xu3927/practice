from django.db import models
from django.utils import timezone
import datetime

# Create your models here.


class Question(models.Model):
    # 在执行 Question.objects.all() 时会输出该内容. 同时也会作为 django 自动生成时的内容
    def __str__(self):
        return self.question_text

    # 定义字段, 每个字段都是一个内置Field类型的示例, 第一个参数可以传一个备注名称. 否则使用字段名称
    # 一些Field类型需要设置参数. 如 CharFields 必须传入 max_length. 不仅作为 database schema 也会进行校验
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')

    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)


class Choice(models.Model):
    def __str__(self):
        return self.choice_text
    # ForeignKe: 外键 [ForeignKe](https://docs.djangoproject.com/en/2.2/ref/models/fields/#django.db.models.ForeignKey) 定义关系,
    # 定义关系, chioce 是一个 Question, django 支持所有的数据库表关系, 多对1, 多对多, 一对一
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)
