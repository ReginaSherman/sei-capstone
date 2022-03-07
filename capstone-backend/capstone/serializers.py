from rest_framework import serializers
from .models import Item, User

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model =Item
        fields = ['title', 'image', 'description', 'size', 'owner'] 