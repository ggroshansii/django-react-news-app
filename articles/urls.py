from django.urls import path
from . import views

urlpatterns = [
    path('', views.ReadOnlyArticleListView.as_view()),
    path('admin/SBMT/', views.AdminSubmittedArticleListView.as_view()),
    path('admin/DFT/', views.AdminDraftArticleListView.as_view()),
    path('admin/RJT/', views.AdminRejectedArticleListView.as_view()),
    path('admin/PBLH/', views.AdminPublishedArticleListView.as_view()),
    path('admin/ALL/', views.AdminAllArticleListView.as_view()),
    path("mydrafts/", views.UserArticleListView.as_view()),
    path('<int:pk>', views.ReadOnlyArticleDetailAPIView.as_view()),
    path('mydrafts/<int:pk>', views.UserArticleDetailAPIView.as_view()),
]