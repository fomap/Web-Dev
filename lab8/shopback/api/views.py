from django.shortcuts import render
from django.http import JsonResponse

from api.models import Product, Category

def listProducts(request):
    products = Product.objects.all().values()
    return JsonResponse(list(products))


def getProduct(request, product_id):
    product = Product.objects.values().get(id=product_id)
    return JsonResponse(product)

def listCategories(request):
    categories = Category.objects.all().values()
    return JsonResponse(list(categories))

def getCategory(request, category_id):
    category = Category.objects.values().get(id=category_id)
    return JsonResponse(category)

def listProductByCategory(request,category_id):
    category = Product.objects.filter(category_id = category_id).values() if category_id else Product.objects.all().values()
    return JsonResponse(list(category))