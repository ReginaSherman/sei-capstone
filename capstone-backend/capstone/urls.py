from django.urls import path
from . import views

urlpatterns = [
    path('api/', views.ItemList.as_view(), name='home'),
    path('api/items', views.ItemList.as_view(), name='items'),
    path('api/items/<int:pk>', views.ItemDetail.as_view(), name='item_detail'),
    path('api/users', views.UserList.as_view(), name='users'),
    path('api/user/<int:pk>', views.UserDetail.as_view(), name='user_detail')
]