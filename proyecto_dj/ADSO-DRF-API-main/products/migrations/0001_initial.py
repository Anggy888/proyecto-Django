# Generated by Django 5.1.1 on 2024-09-06 16:51

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Products',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_name', models.CharField(max_length=100, verbose_name='Product Name')),
                ('product_price', models.DecimalField(decimal_places=2, max_digits=10, verbose_name='Product Price')),
                ('product_type', models.CharField(max_length=100, verbose_name='Product Type')),
                ('product_stock', models.IntegerField(verbose_name='Product Stock')),
            ],
        ),
    ]
