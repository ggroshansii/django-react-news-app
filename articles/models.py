
from django.db import models
from django.conf import settings

class Article(models.Model):
    author = models.CharField(max_length = 255)
    title = models.CharField(max_length= 255)
    body = models.CharField(max_length= 255)
    created_at = models.DateTimeField()
    updated_at = models.DateTimeField()
    image = models.ImageField(upload_to='profiles/', null=True)
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.cascade)
    category = models.CharField(max_length = 25)