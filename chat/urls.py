from django.urls import path
from django.contrib.staticfiles.urls import staticfiles_urlpatterns

from . import views

urlpatterns = [
	path('', views.home, name='home'),
	path('new_group', views.new_group, name='new_group'),
	path('join_group/<uuid:uuid>', views.join_group, name='join_group'),
	path('leave_group/<uuid:uuid>', views.leave_group, name='leave_group'),
	path('remove_group/<uuid:uuid>', views.remove_group, name='remove_group'),
	path('open_chat/<uuid:uuid>', views.open_chat, name='open_chat'),
    # chat serializer
	path('api/chatlist/', views.GroupAPIList.as_view(), name='chatlist'),
	path('api/chats/', views.GroupCreateAPIView.as_view(), name='create_chat'),
	path('api/chats/<int:pk>/', views.GroupAPIDetailVeiw.as_view(), name='update_chat'),
]

urlpatterns += staticfiles_urlpatterns()
