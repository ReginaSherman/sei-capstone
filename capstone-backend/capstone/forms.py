from django import forms
from .models import Item, User

class ItemForm(forms.ModelForm):

    class Meta:
        model = Item
        fields = ('title', 'image', 'category','description', 'size')

class UserForm(forms.ModelForm):

    class Meta:
        model = User
        fields = ('name', 'email',)