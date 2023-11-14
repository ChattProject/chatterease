from django.urls import path
from . import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from members.views import *


urlpatterns = [
	path('login/', views.user_login, name='login'),
	path('logout/', views.user_logout, name='logout'),
	path('api/userlist/', views.MembersAPIList.as_view(), name='userlist'),
	path('api/users/', views.MembersCreateAPIView.as_view(), name='user_create'),
	path('api/users/<int:pk>/', views.MembersUpdateDestroyAPIView.as_view(), name='user_update'),
]

urlpatterns += staticfiles_urlpatterns()
