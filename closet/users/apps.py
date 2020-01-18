from django.apps import AppConfig


class UsersConfig(AppConfig):
    name = 'users'

    def ready(self): #ready method is used for registering signals
    	import users.signals

