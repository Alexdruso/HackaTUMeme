from django.urls import path

from . import views

urlpatterns = [
    path('', views.get_node, name='get_node'),
    path('login', views.login_view, name='login'),
]
