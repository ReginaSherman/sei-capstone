from django.urls import path
from . import views

urlpatterns = [
    path('api/', views.item_list.as_view(), name='home'),
    path('api/items', views.item_list.as_view(), name='home'),
    path('api/items/<int:pk>', views.item_detail.as_view(), name='item_detail')
]