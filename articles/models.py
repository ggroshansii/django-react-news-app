
from django.db import models

class Article(models.Model):
    author = models.CharField(max_length = 255)
    body = models.CharField(max_length= 255)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    