from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from .models import *
from .serializers import *
from django_filters import rest_framework as filters

# Create your views here.

class CountryViewSet(viewsets.ModelViewSet):
	serializer_class = CountrySerializer
	queryset = Country.objects.all()
	permission_classes = [AllowAny]
