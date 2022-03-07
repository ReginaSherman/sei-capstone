# from sre_constants import CATEGORY
from django.db import models

# Create your models here.

class User(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=254)
    id = models.IntegerField(primary_key=True)


    def __str__ (self):
        return self.name

CATEGORY_CHOICES = (
    ('Top', 'top'),
    ('Bottom', 'bottom'),
    ('Dress', 'dress'),
    ('Shoes', 'shoes'),
    ('Sweater', 'sweater'),
    ('Jacket', 'jacket'),
    ('Miscellaneous', 'miscellaneous'),
)

class Item(models.Model):
    TOP = 'Top'
    BOTTOM = 'Bottom'
    DRESS = 'Dress'
    SHOES = 'Shoes'
    SWEATER = 'Sweater'
    JACKET = 'Jacket'
    MISC = 'Miscellaneous'
    CATEGORY_CHOICES = (
        (TOP, 'Top'),
        (BOTTOM, 'Bottom'),
        (DRESS, 'Dress'),
        (SHOES, 'Shoes'),
        (SWEATER, 'Sweater'),
        (JACKET, 'Jacket'),
        (MISC, 'Miscellaneous'), 
    )
    category = models.CharField(
        max_length = 50,
        choices=CATEGORY_CHOICES,
        default=MISC,
        )
    title = models.CharField(max_length=100)
    image = models.ImageField(null=False, blank=False)
    size = models.CharField(max_length=100)
    description = models.CharField(max_length = 100)
    owner = models.ForeignKey('User', on_delete=models.CASCADE, related_name='items')
    id = models.IntegerField(primary_key=True)


    def __str__ (self):
        return self.title
