from django.db import models


class Project(models.Model):
    order = models.IntegerField()
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    long_description = models.CharField(max_length=250)
    image_name = models.CharField(max_length=100)
    demo_url = models.CharField(max_length=250)
    repo_url = models.CharField(max_length=250)
