from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    # 尖角号可以捕获 url 中的内容, 并作为参数传给 view
    path('<int:question_id>/detail_short/',
         views.detail_short, name='detail_short'),
    path('<int:question_id>/', views.detail, name='detail'),
    path('<int:question_id>/results/', views.results, name='results'),
    path('<int:question_id>/vote/', views.vote, name='vote'),
]
