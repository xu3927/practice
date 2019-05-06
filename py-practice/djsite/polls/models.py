from django.db import models
import datetime
from django.utils import timezone

# Create your models here.

# 定义模型, 每个模型都是 models.Model 的子类


class Question(models.Model):
    question_text = models.CharField(max_length=200)
    pub_date = models.DateTimeField('date published')
    # 该方法可以设置 Question.objects.all() 时显示的内容

    def __str__(self):
        return self.question_text
    # 自定义方法

    def was_published_recently(self):
        return self.pub_date >= timezone.now() - datetime.timedelta(days=1)


class Choice(models.Model):
    # ForeignKey 定义了一个关系
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    choice_text = models.CharField(max_length=200)
    votes = models.IntegerField(default=0)

    def __str__(self):
        return self.choice_text
