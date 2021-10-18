from django.contrib import admin
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.conf import settings


class CustomUser(AbstractUser):
    pass

class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to='profiles/', null=True)
    display_name = models.CharField(max_length = 255, null=True)

    def __str__(self):
        return self.user.username