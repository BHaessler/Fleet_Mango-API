# serializers.py

from rest_framework import serializers
from .models import Car, Owner

class OwnerSerializer(serializers.ModelSerializer):
    # Include the necessary fields from the Owner model
    class Meta:
        model = Owner
        fields = ['first_name', 'last_name', 'email']  # Adjust the fields as needed

class CarSerializer(serializers.ModelSerializer):
    # Include the nested OwnerSerializer
    owner = OwnerSerializer()  # This will serialize the owner object
    
    class Meta:
        model = Car
        fields = '__all__'  # All fields of the car model (including the owner)

    def validate_license_plate(self, value):
        """
        Check if the license plate is unique.
        """
        if Car.objects.filter(license_plate=value).exists():
            raise serializers.ValidationError("This license plate is already taken.")
        return value
