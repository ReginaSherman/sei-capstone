from rest_framework import serializers
from .models import Item, User

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model =Item
        fields = ['id', 'title', 'image', 'category', 'description', 'size', 'owner'] 