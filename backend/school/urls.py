from django.urls import path, include
from rest_framework import routers
from school.views import StudentView
from rest_framework_simplejwt.views import ( TokenObtainPairView, TokenRefreshView, TokenVerifyView )

router = routers.DefaultRouter()
router.register(r'student',StudentView)

urlpatterns = [
    path('',include(router.urls)),
    path('get_token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('refresh_token/', TokenRefreshView.as_view(), name='token_refresh'),
    path('token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]