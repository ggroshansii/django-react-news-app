
from django.db import models
from django.conf import settings

class Article(models.Model):
    DRAFT = 'DFT'
    SUBMITTED = 'SBMT'
    PUBLISHED = 'PBLH'
    REJECTED = 'RJT'
    STATUS_CHOICES = [
        (DRAFT, 'Draft'),
        (SUBMITTED, 'Submitted'),
        (PUBLISHED, 'Published'),
        (REJECTED, 'Rejected')
    ]
    status = models.CharField(max_length=4, choices=STATUS_CHOICES , default=DRAFT)
    title = models.CharField(max_length= 255)
    body = models.CharField(max_length= 1000)
    author = models.ForeignKey(settings.AUTH_USER_MODEL,on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(upload_to='profiles/', null=True)
    popularity_score = models.IntegerField(default=0)

    category = models.CharField(max_length = 25)

    def __str__(self):
        return self.title