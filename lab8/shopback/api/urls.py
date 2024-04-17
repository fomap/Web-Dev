from django.urls import path

from api.views import listProducts, getProduct, listCategories, getCategory, listProductByCategory

urlpatterns = [
    path('products/', listProducts, name='list_products'),# name это его alias который мы можем применять в других частях кода например в html
    path('products/<int:product_id>/', getProduct, name='get_product'), # штучка в треугольных скобках явялется динамичным и значение его отправляется аргументом для функции get_product
    path('categories/', listCategories, name='list_categories'),
    path('categories/<int:category_id>/', getCategory, name='get_category'), 
    path('categories/<int:category_id>/products/', listProductByCategory, name='list_products_by_category'),
]