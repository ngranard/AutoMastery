# Generated by Django 4.0.3 on 2023-03-08 18:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sales_rest', '0003_remove_automobilevo_sold_remove_automobilevo_year'),
    ]

    operations = [
        migrations.AlterField(
            model_name='salerecord',
            name='sale_price',
            field=models.CharField(max_length=200),
        ),
    ]