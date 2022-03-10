# Generated by Django 4.0.3 on 2022-03-10 16:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('capstone', '0016_alter_item_category_alter_item_size'),
    ]

    operations = [
        migrations.CreateModel(
            name='Post',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=100)),
                ('content', models.TextField()),
                ('image', models.ImageField(upload_to='post_images')),
            ],
        ),
        migrations.AlterField(
            model_name='item',
            name='category',
            field=models.CharField(choices=[('Top', 'Top'), ('Bottom', 'Bottom'), ('Dress', 'Dress'), ('Shoes', 'Shoes'), ('Sweater', 'Sweater'), ('Jacket', 'Jacket'), ('Miscellaneous', 'Miscellaneous')], default='Miscellaneous', max_length=50),
        ),
        migrations.AlterField(
            model_name='item',
            name='image',
            field=models.ImageField(upload_to=''),
        ),
        migrations.AlterField(
            model_name='item',
            name='size',
            field=models.CharField(choices=[('XXS', 'XXS'), ('XS', 'XS'), ('S', 'S'), ('M', 'M'), ('L', 'L'), ('XL', 'XL'), ('XXL', 'XXL')], default='M', max_length=50),
        ),
    ]