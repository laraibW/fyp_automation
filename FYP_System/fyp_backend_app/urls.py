from rest_framework_simplejwt import views as jwt_views
from django.views.defaults import page_not_found
from django.urls import path, include
from .views import login_verify, get_all_supervisors,get_all_students,change_password
from django.contrib.admin.sites import NotRegistered


app_name = 'backend_urls'

urlpatterns = [
    path('login/', page_not_found, {'exception': Exception()}),
    path('signup/', page_not_found, {'exception': Exception()}),
    # jwt auth
    path('token/', jwt_views.TokenObtainPairView.as_view(), name="token_obtain_pair"), # returns access and refresh tokens
    path('token/verify/', jwt_views.TokenVerifyView.as_view(), name='token_verify'), # takes access token as post
    path('verify-login',login_verify),    #creating users
    path('get-all-supervisors',get_all_supervisors),
    path('get-all-students',get_all_students),
    path('change-password',change_password),
    #path('addBulkUsers')
]
