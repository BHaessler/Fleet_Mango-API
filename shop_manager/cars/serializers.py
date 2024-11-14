# serializers.py

from rest_framework import serializers
from .models import Car

class CarSerializer(serializers.ModelSerializer):
    class Meta:
        model = Car
        fields = '__all__'

    def validate_license_plate(self, value):
        """
        Check if the license plate is unique.
        """
        if Car.objects.filter(license_plate=value).exists():
            raise serializers.ValidationError("This license plate is already taken.")
        return value
