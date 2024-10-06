from rest_framework import serializers
from .models import Country

class CountrySerializer(seralizers.ModelSerializer):
	class Meta:
		model = Country
		fields = 'CountryName'
