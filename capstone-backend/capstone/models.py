# from sre_constants import CATEGORY
from unicodedata import category
from django.db import models

# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=254)
    id = models.CharField(primary_key=True, max_length=100)


    def __str__ (self):
        return self.name

class Post(models.Model):
    id = models.CharField(primary_key=True, max_length=100)
    title = models.CharField(max_length=100)
    image = models.ImageField(upload_to='post_images')
    description = models.CharField(max_length=200)
    category = models.CharField(max_length=100)
    size = models.CharField(max_length=100)
    owner = models.ForeignKey('User', on_delete=models.CASCADE, related_name='items')
    
    def __str__(self):
        return self.title