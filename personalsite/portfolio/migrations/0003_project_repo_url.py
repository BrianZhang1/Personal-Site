# Generated by Django 4.2.7 on 2023-11-15 21:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0002_project_demo_url_project_long_description'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='repo_url',
            field=models.CharField(default='a', max_length=250),
            preserve_default=False,
        ),
    ]