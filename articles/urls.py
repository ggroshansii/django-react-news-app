from django.urls import path
from . import views

urlpatterns = [
    path('', views.ArticleListView.as_view()),
    path('<int:pk>', views.ArticleDetailAPIView.as_view())
]