from django.shortcuts import render
from rest_framework import generics
from .serializers import ArticleSerializer
from .models import Article

# Create your views here.

class ArticleListView (generics.ListAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()

    