from django.shortcuts import render
from django.http import HttpResponse
from django.core import serializers

from .models import Book, Publisher, Author, Tag, BookTag
import pip._vendor.distlib.database
import json
from django.forms.models import model_to_dict
# Create your views here.

import pdb


def index(request):
    return HttpResponse('book app')


def add(request):
    """
    args:
    name, price, author, publisher
    """
    params = json.loads(request.read().decode('utf-8'))

    # 需要先增加实例, 才能保存关系
    try:
        author = Author.objects.get(name=params['author'])
    except Author.DoesNotExist:
        author = Author(name=params['author'])
        author.save()

    try:
        publisher = Publisher.objects.get(name=params['publisher'])
    except Publisher.DoesNotExist:
        publisher = Publisher(name=params['publisher'])
        publisher.save()

    book = Book(name=params['name'], price=26,
                author=author, publisher=publisher)
    book.save()
    return HttpResponse(json.dumps(model_to_dict(book), ensure_ascii=False).encode('utf-8'))


def get_list(request):
    """
    args:

    """
    books_qs = Book.objects.all()
    data = serializers.serialize('json', list(books_qs), fields=(
        "name", "price", "author", "publisher"))
    return HttpResponse(data, content_type='application/json')


def delete(request):
    """
    args:
        id: 3
    """
    params = json.loads(request.read().decode('utf-8'))
    id = params['id']
    try:
        books_qs = Book.objects.get(pk=id)
        books_qs.delete()
        return HttpResponse('id {id} deleted success'.format(id=id), content_type='application/json')
    except Book.DoesNotExist:
        return HttpResponse('id {id} does not exist'.format(id=id), content_type='application/json')


def deleteAuthor(request):
    """
    args:
        id: 3
    """
    params = json.loads(request.read().decode('utf-8'))
    id = params['id']
    try:
        author_qs = Author.objects.get(pk=id)
        author_qs.delete()
        return HttpResponse('id {id} deleted success'.format(id=id), content_type='application/json')
    except Book.DoesNotExist:
        return HttpResponse('id {id} does not exist'.format(id=id), content_type='application/json')
