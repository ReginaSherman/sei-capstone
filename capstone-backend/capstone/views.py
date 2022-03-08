from django.shortcuts import render
from rest_framework import generics

from .models import Item, User 
from .serializers import ItemSerializer

# Create your views here.

class item_list(generics.ListCreateAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class item_detail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

