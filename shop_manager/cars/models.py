# models.py

from django.db import models

class Car(models.Model):
    make = models.CharField(max_length=100)
    model = models.CharField(max_length=100)
    year = models.IntegerField()
    color = models.CharField(max_length=50)
    license_plate = models.CharField(max_length=20, unique=True)  # Ensure license_plate is unique

    def __str__(self):
        return f'{self.make} {self.model} ({self.year}) - {self.license_plate}'
