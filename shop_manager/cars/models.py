# models.py
from django.db import models

class Owner(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.EmailField(unique=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"


def get_na_owner():
    # Get or create the "N/A" Owner if it doesn't exist
    na_owner, created = Owner.objects.get_or_create(
        first_name="N/A", 
        last_name="N/A", 
        email="n/a@example.com"
    )
    return na_owner.id

class Car(models.Model):
    # Other fields
    make = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    year = models.IntegerField()
    color = models.CharField(max_length=50)
    license_plate = models.CharField(max_length=20, unique=True)  # Ensure license_plate is unique

    license_plate = models.CharField(max_length=15, unique=True)
    owner = models.ForeignKey(
        Owner,
        on_delete=models.CASCADE,
        related_name='cars',
        default=get_na_owner  # Default to the "N/A" owner
    )

    def __str__(self):
        return f"{self.owner} - {self.make} {self.model}"
