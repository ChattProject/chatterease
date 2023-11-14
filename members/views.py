from django.shortcuts import render, redirect
from django.contrib.auth import login, logout
from django.contrib import messages
from rest_framework import generics
from .models import Members
from .serializers import MembersSerializer


def user_login(request):
	if request.method == 'POST':
		username = request.POST['username']
		try:
			user = Members(username=username)
			user.save()
			login(request, user)
			return redirect('home')
		except:
			messages.error(request, 'Something is wrong.')
			return render(request, 'login.html')
	else:
		return render(request, 'login.html')


def user_logout(request):
	try:
		logout(request)
	except:
		messages.error(request, 'Something is wrong.')
	return redirect('login')


class MembersAPIList(generics.ListAPIView):
	queryset = Members.objects.all()
	serializer_class = MembersSerializer
	

class MembersCreateAPIView(generics.ListCreateAPIView):
	queryset = Members.objects.all()
	serializer_class = MembersSerializer


class MembersUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
	queryset = Members.objects.all()
	serializer_class = MembersSerializer
