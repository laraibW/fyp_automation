
from django.urls import path
from .views import create_request, show_all_requests, do_request_actions,get_project_details,show_all_projects
from django.contrib.admin.sites import NotRegistered


app_name = 'projects_urls'

urlpatterns = [
    path('supervisor/get-all-requests',show_all_requests),
    path('students/create-request',create_request),
    path('supervisor/request-status',do_request_actions),
    path('students/project-details',get_project_details),
    path('supervisor/show-all-projects',show_all_projects),
 ]
