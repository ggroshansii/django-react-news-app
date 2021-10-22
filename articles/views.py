from django.db.models import query
from django.shortcuts import render
from rest_framework import generics, serializers
from rest_framework import permissions
from .serializers import ArticleSerializer
from .models import Article
from rest_framework.permissions import IsAdminUser, IsAuthenticated, IsAuthenticatedOrReadOnly, IsAdminUser
from .permissions import IsOwnerOrReadOnly, IsOwner

# Create your views here.

class ReadOnlyArticleListView (generics.ListAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    permission_classes = (IsAuthenticatedOrReadOnly,)

    def get_queryset(self):
        return Article.objects.filter(status='PBLH')

    def perform_create(self, serializer):
        author = self.request.user
        serializer.save(author=author)

class UserArticleListView (generics.ListCreateAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    permissions_classes = (IsAuthenticated)

    def get_queryset(self):
        user = self.request.user
        return Article.objects.filter(status='DFT', author=user)

    def perform_create(self, serializer):
        author = self.request.user
        serializer.save(author=author)

class AdminArticleListView (generics.ListCreateAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    permissions_classes = (IsAdminUser)

    def get_queryset(self):
        return Article.objects.filter(status='SBMT')

    # def perform_create(self, serializer):
    #     author = self.request.user
    #     serializer.save(author=author)

class ReadOnlyArticleDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (IsOwnerOrReadOnly,)

class UserArticleDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (IsOwner,)



