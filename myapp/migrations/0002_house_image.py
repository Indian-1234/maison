# Generated by Django 4.1.7 on 2023-03-08 05:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('myapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='house',
            name='image',
            field=models.ImageField(default='house.png', upload_to=''),
            preserve_default=False,
        ),
    ]