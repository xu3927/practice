from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('add', views.add, name='add'),
    path('list', views.get_list, name='get_list'),
    path('delete', views.delete, name='delete'),
    path('deleteAuthor', views.deleteAuthor, name='deleteAuthor'),
]
