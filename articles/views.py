from django.db.models import query
from django.shortcuts import render
from rest_framework import generics, serializers
from rest_framework import permissions
from .serializers import ArticleSerializer
from .models import Article
from rest_framework.permissions import IsAdminUser, IsAuthenticated, IsAuthenticatedOrReadOnly, IsAdminUser
from .permissions import IsOwnerOrReadOnly, IsOwner

from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http import JsonResponse, HttpResponse
# Create your views here.

# ________________________________________________________________


# @csrf_exempt
# def article_detail(request, pk):

#     try:
#         article = Article.objects.get(pk=pk)
#     except Article.DoesNotExist:
#         return HttpResponse(status=404)

#     if request.method == "PUT":
#         data = JSONParser().parse(request)
#         serializer = ArticleSerializer(article, data=data)

#         if serializer.is_valid():
#             serializer.save()
#             return JsonResponse(serializer.data)
#         return JsonResponse(serializer.errors, status=400)



# ________________________________________________________________

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

class UserDraftArticleListView (generics.ListCreateAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    permissions_classes = (IsAuthenticated)

    def get_queryset(self):
        user = self.request.user
        return Article.objects.filter(status='DFT', author=user)

class UserSubmittedArticleListView (generics.ListCreateAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    permissions_classes = (IsAuthenticated)

    def get_queryset(self):
        user = self.request.user
        return Article.objects.filter(status='SBMT', author=user)

class UserPublishedArticleListView (generics.ListCreateAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    permissions_classes = (IsAuthenticated)

    def get_queryset(self):
        user = self.request.user
        return Article.objects.filter(status='PBLH', author=user)

class UserAllArticleListView (generics.ListCreateAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    permissions_classes = (IsAuthenticated)

    def get_queryset(self):
        user = self.request.user
        return Article.objects.filter(author=user)

class UserRejectedArticleListView (generics.ListCreateAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    permissions_classes = (IsAuthenticated)

    def get_queryset(self):
        user = self.request.user
        return Article.objects.filter(status='RJT', author=user)

class ReadOnlyArticleDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (IsOwnerOrReadOnly,)

class UserArticleDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (IsOwner,)

class AdminArticleDetailAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (IsAdminUser,)

class AdminSubmittedArticleListView (generics.ListCreateAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    permissions_classes = (IsAdminUser,)

    def get_queryset(self):
        return Article.objects.filter(status='SBMT')

        
class AdminRejectedArticleListView (generics.ListCreateAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    permissions_classes = (IsAdminUser,)

    def get_queryset(self):
        return Article.objects.filter(status='RJT')


class AdminPublishedArticleListView (generics.ListCreateAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    permissions_classes = (IsAdminUser,)

    def get_queryset(self):
        return Article.objects.filter(status='PBLH')


class AdminDraftArticleListView (generics.ListCreateAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    permissions_classes = (IsAdminUser,)

    def get_queryset(self):
        return Article.objects.filter(status='DFT')


class AdminAllArticleListView (generics.ListCreateAPIView):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
    permissions_classes = (IsAdminUser,)



