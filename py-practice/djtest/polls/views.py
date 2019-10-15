from django.shortcuts import render, get_object_or_404
from django.http import HttpResponse, Http404
from .models import Question
from django.template import loader

# 每个 view 需要返回一个HttpResponse或Http404


def index(request):
    latest_question_list = Question.objects.order_by('-pub_date')[:5]
    template = loader.get_template('index.html')
    context = {
        'latest_question_list': latest_question_list,
    }
    # output = ', <br/> '.join([q.question_text for q in latest_question_list])

    # return HttpResponse(output)
    # return HttpResponse(template.render(context, request))
    return render(request, 'index.html', context)


def detail(request, question_id):
    try:
        question = Question.objects.get(pk=question_id)
    except Question.DoesNotExist:
        # 返回 Http404  错误
        raise Http404('Question does not exist')
        # 返回一个错误页面
        # return HttpResponse('not found this question %s.' % question_id)

    return HttpResponse('you`re looking at the detail of question %s. ' % question_id)


def detail_short(request, question_id):
    print('detail_short:', question_id)
    question = get_object_or_404(Question,  pk=question_id)
    return render(request, 'detail.html', {'question': question})


def results(request, question_id):
    response = 'You`re looking at the results of quesiont %s.'
    return HttpResponse(response % question_id)


def vote(request, question_id):
    return HttpResponse('You`re voting on question %s.' % question_id)
