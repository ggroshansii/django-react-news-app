from rest_framework import serializers
from .models import Article

class ArticleSerializer(serializers.ModelSerializer):
    author = serializers.ReadOnlyField(source="author.username")

    class Meta:
        model = Article
        fields = ('title','id', 'author', 'body', 'created_at', 'updated_at', 'image', 'category',)