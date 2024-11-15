from rest_framework import serializers
from .models import Car, Owner

class CarSerializer(serializers.ModelSerializer):
    # owner will be represented by its ID (primary key) in the response and requests
    owner = serializers.PrimaryKeyRelatedField(queryset=Owner.objects.all())

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


class OwnerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Owner
        fields = ['id', 'first_name', 'last_name', 'email']
