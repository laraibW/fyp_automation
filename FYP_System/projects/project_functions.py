
from fyp_backend_app.models import Project, Student
def start_project(request):


  proj=Project(
    id=request.id,
    supervisor=request.supervisor,
    title=request.title,
  )
  proj.save()
  students= Student.objects.filter(request=request)
  for student in students:
    student.project=proj
    student.save()



