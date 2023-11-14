from django.db import models
from django.contrib.auth.models import AbstractUser


class Members(AbstractUser):
	user_id = models.AutoField(primary_key=True, unique=True)
	username = models.CharField(max_length=50)
	USERNAME_FIELD = 'user_id'

	def __str__(self):
		return self.username
