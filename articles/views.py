from django.db.models import query
from django.shortcuts import render
from rest_framework import generics, serializers
from rest_framework import permissions
from .serializers import ArticleSerializer
from .models import Article
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .permissions import IsOwnerOrReadOnly

# Create your views here.

class ArticleListView (generics.ListCreateAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    permissions_classes = (IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        user = self.request.user
        return Article.objects.filter(author=user)

    def perform_create(self, serializer):
        author = self.request.user
        serializer.save(author=author)

class ArticleDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (IsOwnerOrReadOnly,)