
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('fyp_backend_app.urls')),
    path('', include('projects.urls')),
]
