from asyncore import read
from decimal import Decimal
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib.auth.hashers import check_password
from django.http import HttpResponse
from fyp_backend_app.models import Project
# Create your views here.
from fyp_backend_app.models import CustomUser, Project,Student,Supervisor
from fyp_backend_app.models import Request,Deliverable
from .project_functions import start_project


@csrf_exempt
def create_request(request):
  try:
    data=json.loads(request.body.decode("utf8"))
    student_usernames=[
      data["username1"],
      data["username2"],
      data["username3"],
      data["username4"],
      data["username5"],
    ]
    students_username_list = [x for x in student_usernames if x != '']
    print(students_username_list)
    all_students=[]
    try:
      for username in students_username_list:
        user=CustomUser.objects.get(username= username)
        student=Student.objects.get(student=user)
        all_students.append(student)
      print("Students from db", all_students)
    except:
      return HttpResponse(json.dumps({"status": "Student not found"}))
    try:
      user=CustomUser.objects.get(email=data["supervisor"])
      supervisor=Supervisor.objects.get(supervisor=user)
    except:
      return HttpResponse(json.dumps({"status": "Supervisor Not found"}))

    new_request=Request(
      supervisor=supervisor,
      title=data["title"],
      details=data["details"]
    )

    new_request.save()
    #Assigning request to students
    for student in all_students:
      student.request.add(new_request)
      student.save()
    return HttpResponse(json.dumps({"status": "Request Sent Successfully"}))
  except Exception as e:
    print("DEBUG: In create_request Exception is", e)
    return HttpResponse(json.dumps({"status": "Request Failed"}))

# Create your views here.
@csrf_exempt
def show_all_requests(request):
  data=json.loads(request.body.decode("utf8"))
  try:
    user= CustomUser.objects.get(username=data["username"])
    supervisor=Supervisor.objects.get(supervisor=user)
    proj_requests=Request.objects.filter(supervisor=supervisor).filter(request_status=0)
    all_requests=[]
    for req in proj_requests:
      group_members=[]
      all_students= Student.objects.filter(request=req)
      for student in all_students:
        group_members.append({
          "name": student.student.first_name+ " " + student.student.last_name,
          "roll no":student.student.username,
          "email": student.student.email,
        })
      all_requests.append({
        "ID": req.id,
        "Title": req.title,
        "Description": req.details,
        "Group members":group_members
      })

    return HttpResponse(json.dumps(all_requests))
  except Exception as e:
    print("DEBUG : IN GET ALL REQUESTS ",e)
    return HttpResponse(json.dumps({"status": "No user found"}))


@csrf_exempt
def show_all_projects(request):
  data=json.loads(request.body.decode("utf8"))
  try:
    #project_status=['Started','Proposal Submitted','Proposal Approved','D1 submitted','D1 approved','D2 submitted','D2 approved','R1 submitted','R1 approved','R2 submitted','R2 approved','Final Project Submitted','Final Project Approved']
    print("DATA IS",data)
    user= CustomUser.objects.get(username=data["username"])
    supervisor=Supervisor.objects.get(supervisor=user)
    projects=Project.objects.filter(supervisor=supervisor)
    all_requests=[]
    for proj in projects:

      all_requests.append({
        "ID": proj.id,
        "Title": proj.title,

      })

    return HttpResponse(json.dumps(all_requests))
  except Exception as e:
    print("DEBUG : IN GET ALL REQUESTS ",e)
    return HttpResponse(json.dumps({"status": "No user found"}))

@csrf_exempt
def get_request(request):
  data=json.loads(request.body.decode("utf8"))
  try:
    req=Request.objects.get(id=data["id"])
    group_members=[]
    all_students= Student.objects.filter(request=req)
    emails=[]
    for student in all_students:
      emails.append(student.student.email)
      # group_members.append({
      #   "name": student.student.first_name+ " " + student.student.last_name,
      #   "roll_no":student.student.username,
      #   "email": student.student.email,
      # })
    result={
      "id": req.id,
      "title": req.title,
      "description": req.details,
      "email": ",".join(emails)
    }

    return HttpResponse(json.dumps(result))
  except Exception as e:
    print("DEBUG : IN GET ALL REQUESTS ",e)
    return HttpResponse(json.dumps({"status": "No user found"}))


@csrf_exempt
def do_request_actions(request):
  try:
    data=json.loads(request.body.decode("utf8"))
    proj_request=Request.objects.get(id=data["request_id"])
    if data["status"].lower()=="accept":
      proj_request.request_status=1
      start_project(proj_request)
    elif data["status"].lower()=="reject":
      proj_request.request_status=2
    return HttpResponse(json.dumps({"result": "Added Successfully"}))
  except Exception as e:
    print("DEBUG : Error is ", str(e))
    return HttpResponse(json.dumps({"result": "Error!"}))

@csrf_exempt
def get_request_status(request):
  try:
    data=json.loads(request.body.decode("utf8"))
    user=CustomUser.objects.get(username=data["username"])
    student=Student.objects.get(user=user)

    for req in student.requests:
      if req.request_status == 0:
        return HttpResponse(json.dumps({"status":"pending"}))
      elif req.request_status == 1:
        return HttpResponse(json.dumps({"status":"accepted"}))
    return HttpResponse(json.dumps({"status":"rejected"}))
  except Exception as e:
    print("DEBUG : Error is ", str(e))
    return HttpResponse(json.dumps({"status": "Error"}))

@csrf_exempt
def get_project_details_student(request):
  try:
    project_status=['Started','Proposal Submitted','Proposal Approved','D1 submitted','D1 approved','D2 submitted','D2 approved','R1 submitted','R1 approved','R2 submitted','R2 approved','Final Project Submitted','Final Project Approved']
    data=json.loads(request.body.decode("utf8"))
    user=CustomUser.objects.get(username=data["username"])
    student=Student.objects.get(student=user)
    project=student.project
    team_members=[]
    all_students=Student.objects.filter(project=project)
    print("DEBUG : ALL Students are :",all_students)
    for student in all_students:
      team_members.append({
        "Roll no": student.student.username,
        "name": student.student.first_name+ " "+student.student.last_name,
        "email": student.student.email
      })
    supervisor={
      "name":f"{project.supervisor.supervisor.first_name} {project.supervisor.supervisor.last_name} ({project.supervisor.designation})",
      "details":project.supervisor.details,
      "email":project.supervisor.supervisor.email

    }
    result={
      "Title": project.title,
      "team_members": team_members,
      "supervisor": supervisor,
      "status": project_status[project.status],
      "score": project.total_grade
    }

    return HttpResponse(json.dumps(result))
  except Exception as e:
    print("DEBUG : Error is ", str(e))
    return HttpResponse(json.dumps({"status": "Error"}))

@csrf_exempt
def get_project_details_supervisor(request):
  try:
    project_status=['Started','Proposal Submitted','Proposal Approved','D1 submitted','D1 approved','D2 submitted','D2 approved','R1 submitted','R1 approved','R2 submitted','R2 approved','Final Project Submitted','Final Project Approved']
    data=json.loads(request.body.decode("utf8"))
    #user=CustomUser.objects.get(username=data["id"])
    #student=Student.objects.get(student=user)
    project=Project.objects.get(id= data["id"])
    team_members=[]
    all_students=Student.objects.filter(project=project)
    print("DEBUG : ALL Students are :",all_students)
    for student in all_students:
      team_members.append({
        "Roll no": student.student.username,
        "name": student.student.first_name+ " "+student.student.last_name,
        "email": student.student.email
      })
    supervisor={
      "name":f"{project.supervisor.supervisor.first_name} {project.supervisor.supervisor.last_name} ({project.supervisor.designation})",
      "details":project.supervisor.details,
      "email":project.supervisor.supervisor.email

    }
    result={
      "title": project.title,
      "team_members": team_members,
      "supervisor": supervisor,
      "status": project_status[project.status],
      "score": project.total_grade
    }

    return HttpResponse(json.dumps(result))
  except Exception as e:
    print("DEBUG : Error is ", str(e))
    return HttpResponse(json.dumps({"status": "Error"}))




@csrf_exempt
def get_marksheet_student(request):
  data=json.loads(request.body.decode("utf8"))
  user=CustomUser.objects.get(username=data["username"])
  student=Student.objects.get(student=user)
  project=student.project
  deliverables = Deliverable.objects.filter(project=project)
  marks=[project.id,0,0,0,0,0,0,0]
  i=1
  for deliverable in deliverables:
    marks[i]=round(deliverable.score)
    i+=1
  return HttpResponse(json.dumps({"data":marks}))


@csrf_exempt
def get_marksheet_supervisor(request):
  data=json.loads(request.body.decode("utf8"))
  user=CustomUser.objects.get(username=data["username"])
  supervisor=Supervisor.objects.get(supervisor=user)
  all_projects= Project.objects.filter(supervisor=supervisor)
  marksheet=[]
  for project in all_projects:
    deliverables = Deliverable.objects.filter(project=project)
    marks=[project.id,0,0,0,0,0,0,0]
    i=1
    for deliverable in deliverables:
      marks[i]=round(deliverable.score)
      i+=1
    marksheet.append(marks)
  return HttpResponse(json.dumps(marksheet))

@csrf_exempt
def marksheet(request):
  data=json.loads(request.body.decode("utf8"))
  user=CustomUser.objects.get(username=data["username"])
  supervisor=Supervisor.objects.get(supervisor=user)
  all_data=data["data"]




