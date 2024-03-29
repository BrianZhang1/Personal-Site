from django.db import models


class Project(models.Model):
    order = models.IntegerField()
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=100)
    long_description = models.CharField(max_length=250)
    image = models.ImageField()
    demo_url = models.CharField(max_length=250)
    repo_url = models.CharField(max_length=250)

    def __str__(self):
        return f'{self.id}: {self.title}'
