# Generated by Django 4.2.7 on 2023-11-15 19:07

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('tag_id', models.CharField(max_length=100)),
                ('title', models.CharField(max_length=100)),
                ('description', models.CharField(max_length=100)),
                ('image_name', models.CharField(max_length=100)),
            ],
        ),
    ]
