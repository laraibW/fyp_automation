from rest_framework_simplejwt import views as jwt_views
from django.views.defaults import page_not_found
from django.urls import path, include
from .views import login_verify, get_all_supervisors
from django.contrib.admin.sites import NotRegistered


app_name = 'backend_urls'

urlpatterns = [
    path('login/', page_not_found, {'exception': Exception()}),
    path('signup/', page_not_found, {'exception': Exception()}),
    # jwt auth
    path('token/', jwt_views.TokenObtainPairView.as_view(), name="token_obtain_pair"), # returns access and refresh tokens
    path('token/verify/', jwt_views.TokenVerifyView.as_view(), name='token_verify'), # takes access token as post
    # after social login success
    # path('login-redirect/', views.social_login_redirect, name='login_redirect'), # returns token to client
    # path('profile', views.user_profile),
    # path('update_profile', views.update_profile),
    # path("changePassword",views.ChangePassword)
    path('verify-login',login_verify),    #creating users
    path('students/get-supervisors',get_all_supervisors)
]
