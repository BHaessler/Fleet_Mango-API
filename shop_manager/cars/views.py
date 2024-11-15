# cars/views.py
from django.shortcuts import render

from rest_framework import viewsets
from .models import Car, Owner
from .serializers import CarSerializer, OwnerSerializer

class CarViewSet(viewsets.ModelViewSet):
    queryset = Car.objects.all()
    serializer_class = CarSerializer

class OwnerViewSet(viewsets.ModelViewSet):
    queryset = Owner.objects.all()
    serializer_class = OwnerSerializer