from django.urls import path
from . import views

urlpatterns = [
    path('', views.ReadOnlyArticleListView.as_view()),
    path('submitted/', views.AdminArticleListView.as_view()),
    path("mydrafts/", views.UserArticleListView.as_view()),
    path('<int:pk>', views.ReadOnlyArticleDetailAPIView.as_view()),
    path('mydrafts/<int:pk>', views.UserArticleDetailAPIView.as_view()),
]