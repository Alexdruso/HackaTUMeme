from django.urls import path

from . import views

urlpatterns = [
    path('getMovie/', views.get_node, name='get_node'),
    path('getAll/', views.get_all, name='get_all'),
    path('getInfo/', views.get_info, name='get_info'),
    # path('login/', views.login_view, name='login'),
]
