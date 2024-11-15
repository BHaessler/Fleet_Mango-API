from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import OwnerViewSet, CarViewSet

router = DefaultRouter()
router.register(r'owners', OwnerViewSet)
router.register(r'cars', CarViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]
