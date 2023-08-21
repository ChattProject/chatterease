# Django chat app

A simple chat app in Django using channels.

```
## database migration
python manage.py makemigrations
python manage.py migrate


## If you would like to use Redis you should run via Docker:
docker run --name my-redis -p 6379:6379 -d redis


## run the app
python manage.py runserver
```
