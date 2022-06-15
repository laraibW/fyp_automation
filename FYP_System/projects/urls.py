from django.urls import path
from .views import create_request, show_all_requests, do_request_actions
from .views import get_project_details_student,get_marksheet_student,get_marksheet_supervisor
from .views import get_request,show_all_projects,get_project_details_supervisor
from django.contrib.admin.sites import NotRegistered


app_name = 'projects_urls'

urlpatterns = [
    path('supervisor/get-all-requests',show_all_requests),
    #path('supervisor/get-all-projects',show_all_projects),
    path('students/create-request',create_request),
    path('supervisor/request-status',do_request_actions),
    path('students/project-details',get_project_details_student),
    path('supervisor/request-details', get_request), #Gull
    path('supervisor/project-details/', get_project_details_supervisor), #Gull
    path('students/marksheet',get_marksheet_student),
    path('supervisor/marksheet',get_marksheet_supervisor), #Gull
    path('supervisor/show-all-projects',show_all_projects),
 ]