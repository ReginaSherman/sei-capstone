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

SIZE_CHOICES = (
    ('extra extra small', 'XXS'),
    ('extra small', 'XS'),
    ('small', 'S'),
    ('medium', 'M'),
    ('large', 'L'),
    ('extra large', 'XL'),
    ('extra extra large', 'XXL')
)

class Item(models.Model):
    TOP = 'Top'
    BOTTOM = 'Bottom'
    DRESS = 'Dress'
    SHOES = 'Shoes'
    SWEATER = 'Sweater'
    JACKET = 'Jacket'
    MISC = 'Miscellaneous'
    
    XXS = 'XXS'
    XS = 'XS'
    SMALL = 'S'
    MEDIUM = 'M'
    LARGE = 'L'
    XL = 'XL'
    XXL = 'XXL'
    CATEGORY_CHOICES = (
        (TOP, 'Top'),
        (BOTTOM, 'Bottom'),
        (DRESS, 'Dress'),
        (SHOES, 'Shoes'),
        (SWEATER, 'Sweater'),
        (JACKET, 'Jacket'),
        (MISC, 'Miscellaneous'), 
    )
    SIZE_CHOICES =(
        (XXS, 'XXS'),
        (XS, 'XS'),
        (SMALL, 'S'),
        (MEDIUM, 'M'),
        (LARGE, 'L'),
        (XL, 'XL'),
        (XXL, 'XXL')
    )
    category = models.CharField(
        max_length = 50,
        choices=CATEGORY_CHOICES,
        default=MISC,
        )
    title = models.CharField(max_length=100)
    image = models.ImageField(null=False, blank=False)
    size = models.CharField(
        max_length=50,
        choices=SIZE_CHOICES,
        default= MEDIUM)
    description = models.CharField(max_length = 100)
    owner = models.ForeignKey('User', on_delete=models.CASCADE, related_name='items')
    id = models.AutoField(primary_key=True)


    def __str__ (self):
        return self.title
