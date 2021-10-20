
from django.db import models
from django.conf import settings

class Article(models.Model):
    title = models.CharField(max_length= 255)
    body = models.CharField(max_length= 255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to='profiles/', null=True)
    # user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    category = models.CharField(max_length = 25)

    def __str__(self):
        return self.title