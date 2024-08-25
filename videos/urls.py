# videos/urls.py

from rest_framework.routers import DefaultRouter

from .views import VideoViewSet

router = DefaultRouter()
router.register(r'', VideoViewSet)

urlpatterns = router.urls
