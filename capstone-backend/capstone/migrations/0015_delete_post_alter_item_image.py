# Generated by Django 4.0.3 on 2022-03-10 15:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('capstone', '0014_post'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Post',
        ),
        migrations.AlterField(
            model_name='item',
            name='image',
            field=models.ImageField(upload_to='post_images'),
        ),
    ]