from django.urls import path
from . import consumers

websocket_urlpatterns = [
	path(r"wss/open_chat/<uuid>/", consumers.JoinAndLeave.as_asgi())
]