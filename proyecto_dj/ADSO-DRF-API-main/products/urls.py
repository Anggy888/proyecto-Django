from django.urls import path

from . import views

urlpatterns = [
    path('products-list/', views.ProductsView.as_view(), name='products-list'),
    path('products-list/<int:product_id>/', views.ProductsView.as_view(), name='product-detail'),
    path('users-products/<int:user_id>', views.UsersProductsView.as_view(), name='user-products'),
    path('user-products-date/', views.UserProductsDateView.as_view(), name='user-products-date'),]
