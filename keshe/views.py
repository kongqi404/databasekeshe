from django.http import HttpResponse, JsonResponse
from django.shortcuts import render, redirect
from keshe.models import *


# Create your views here.

# 全部图书
def all_books(request):
    res = {"book_data": [
        {"b_name": i.b_name, "b_author": i.b_author, "b_isbn": i.b_isbn, "b_public": i.b_public, "b_total": i.b_total,
         "b_lave": i.b_lave, "is_borrow": i.b_lave == 0, "is_borrowable": i.b_total - i.b_lave > 0} for i in
        Book.objects.all()]}
    print(res)
    return JsonResponse(res)


# 图书分类
def book_type(request):
    res = {"b_type": [i.bookType for i in BookType.objects.all()]}
    print(res)
    return JsonResponse(res)


# 借阅图书
def borrow(request):
    book_id = request.POST["book_id"]
    book = Book.objects.get(book_id=book_id)
    if book.b_lave > 0:
        book.b_lave -= 1
        book.save()
        assert BorrowTeacher(teacher=Teacher.objects.get(request.session["id"]), book=Book.objects.get(book_id))


# 注册
def index(request):
    return render(request, "index.html")


def page1(request):
    return render(request, "page1.html")


def page2(request):
    return render(request, "page2.html")

def page3(request):
    return render(request, "page3.html")

def page4(request):
    return render(request, "page4.html")

def page5(request):
    return render(request, "page5.html")