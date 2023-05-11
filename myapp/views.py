from django.shortcuts import render
from rest_framework.response import Response
# Create your views here.
from rest_framework import generics
from .models import house
from .serializers import HouseSerializer,UserSerializer
from django.contrib.auth.models import User

class HouseList(generics.ListCreateAPIView):
    queryset = house.objects.all()
    serializer_class = HouseSerializer
    # return HttpResponse("hi")

class HouseDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = house.objects.all()
    serializer_class = HouseSerializer


class UserView(generics.ListCreateAPIView):
    queryset = User.objects.all()

    serializer_class = UserSerializer

    # def get_queryset(self):
    #     return User.objects.all()
