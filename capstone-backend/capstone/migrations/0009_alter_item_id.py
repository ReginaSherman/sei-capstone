# Generated by Django 4.0.3 on 2022-03-09 18:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('capstone', '0008_alter_item_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False, unique=True),
        ),
    ]
