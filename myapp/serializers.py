from rest_framework import serializers
from .models import house
from django.contrib.auth.models import User


class HouseSerializer(serializers.ModelSerializer):
    class Meta:
        model=house
        fields="__all__"
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email','password')

        # extra_kwargs = {'password': {'write_only': True}}
   