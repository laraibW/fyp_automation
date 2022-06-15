from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib.auth.hashers import check_password
from django.http import HttpResponse
from django.contrib.auth.hashers import make_password
# Create your views here.
from .models import CustomUser, Supervisor, Student
user_type=["admin","supervisor","student"]

@csrf_exempt
def login_verify(request):
  data=json.loads(request.body.decode("utf8"))
  username=data['username']
  password=data['password']
  try:
    obj = CustomUser.objects.get(username=username)
    if check_password(password,obj.password):
      result={
        "Authorized": True, "user_status" : user_type[obj.user_type]
      }
    else:
      result={
        "Authorized": False, "user_status" : user_type[obj.user_type]
      }
    return HttpResponse(json.dumps(result))
  except:
    #User is not Supervisor
    result={
      "Authorized" :False , "user_status": "User Not found"
    }
    return HttpResponse(json.dumps(result))

@csrf_exempt
def get_all_supervisors(request):
  all_supervisors= Supervisor.objects.all()#CustomUser.objects.filter(user_type=1)
  supervisors_list=[]
  counter=1
  for supervisor in all_supervisors:
    d={
      "key":counter,
      "name":f"{supervisor.supervisor.first_name} {supervisor.supervisor.last_name} ({supervisor.designation})",
      "details":supervisor.details,
      "email":supervisor.supervisor.email
    }
    counter+=1
    supervisors_list.append(d)
  return HttpResponse(json.dumps(supervisors_list))

@csrf_exempt
def get_all_students(request):
  try:
    students= Student.objects.all()
    student_list=[]
    counter=1
    for student in students:
      student_list.append({
        "key": counter,
        "name":f"{student.student.first_name} {student.student.last_name}",
        "email": student.student.email
      })
      counter+=1
    print(student_list)
    return HttpResponse(json.dumps(student_list))
  except Exception as e:
    print("DEBUG : Error is ", str(e))
    return HttpResponse(json.dumps({"status": "Error"}))




@csrf_exempt
def change_password(request):
  data=json.loads(request.body.decode("utf8"))
  username=data['username']
  password=data['password']
  try:
    obj = CustomUser.objects.get(username=username)
    obj.password=make_password(password)
    obj.save

    return HttpResponse(json.dumps({"status": "Password Changed Successfully"}))
  except:
    #User is not Supervisor
    result={
       "status": "User Not found"
    }
    return HttpResponse(json.dumps(result))




