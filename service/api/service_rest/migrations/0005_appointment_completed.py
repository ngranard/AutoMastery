# Generated by Django 4.0.3 on 2023-03-09 22:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service_rest', '0004_remove_appointment_is_vip'),
    ]

    operations = [
        migrations.AddField(
            model_name='appointment',
            name='completed',
            field=models.BooleanField(default=False),
        ),
    ]