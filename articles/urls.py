from django.urls import path
from . import views

urlpatterns = [
    path('', views.ReadOnlyArticleListView.as_view()),
    path('admin/ALL/', views.AdminAllArticleListView.as_view()),
    path('admin/SBMT/', views.AdminSubmittedArticleListView.as_view()),
    path('admin/DFT/', views.AdminDraftArticleListView.as_view()),
    path('admin/RJT/', views.AdminRejectedArticleListView.as_view()),
    path('admin/PBLH/', views.AdminPublishedArticleListView.as_view()),

    path('user/SBMT/', views.UserSubmittedArticleListView.as_view()),
    path('user/DFT/', views.UserDraftArticleListView.as_view()),
    path('user/RJT/', views.UserRejectedArticleListView.as_view()),
    path('user/PBLH/', views.UserPublishedArticleListView.as_view()),
    path('user/ALL/', views.UserAllArticleListView.as_view()),

    path("mydrafts/", views.UserArticleListView.as_view()),
    path('<int:pk>/', views.ReadOnlyArticleDetailAPIView.as_view()),
    path('mydrafts/<int:pk>/', views.UserArticleDetailAPIView.as_view()),

    # path('score_update/<int:pk>/', views.article_detail.as_view)
]