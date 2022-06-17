from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib.auth.hashers import check_password
from django.http import HttpResponse
from django.contrib.auth.hashers import make_password
# Create your views here.
from .models import CustomUser, Supervisor, Student
user_type=["admin","supervisor","student"]
import requests
@csrf_exempt
def login_verify(request):
  data=json.loads(request.body.decode("utf8"))
  username=data['username']
  password=data['password']
  try:
    obj = CustomUser.objects.get(username=username)
    if check_password(password,obj.password):
      url='http://localhost:8000/token/'
      credentials={
        "username":username,
        "password":password
      }
      headers = {
        "accept": "application/json",
      "Content-Type": "application/json"
      }

      resp=requests.post(url, headers=headers, data=json.dumps(credentials))
      print(resp)
      data=json.loads(resp.text)
      print("data is",data)
      result={
        "Authorized": True, "user_status" : user_type[obj.user_type] , "auth_token": data['access']
      }
    else:
      result={
        "Authorized": False, "user_status" : user_type[obj.user_type]
      }
    print(result)
    return HttpResponse(json.dumps(result))
  except Exception as e:
    #User is not Supervisor
    result={
      "Authorized" :False , "user_status": "User Not found"
    }
    print("Error is", e)
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
  old_password=data['old_password']
  try:
    obj = CustomUser.objects.get(username=username)
    if check_password(old_password,obj.password):
      obj.password=make_password(password)
      obj.save()

      return HttpResponse(json.dumps({"status": "Password Changed Successfully"}))
    return HttpResponse(json.dumps({"status": "Incorrect Old password"}))
  except:
    #User is not Supervisor
    result={
       "status": "User Not found"
    }
    return HttpResponse(json.dumps(result))

@csrf_exempt
def add_student(request):
  data=json.loads(request.body.decode("utf8"))
  username=data['username']
  password=data['password']
  #role=data['role']
  email=data['email']
  first_name=data["first_name"]
  last_name=data["last_name"]
  session_year=data["session_year"]
  try:
    obj = CustomUser(username=username,
                      user_type=2,
                      first_name=first_name,
                      last_name=last_name,
                      email=email)
    obj.password=make_password(password)
    obj.save()
    student=Student(student=obj, session_year=session_year)
    student.save()
    return HttpResponse(json.dumps({"status": "Student Created Successfully"}))
  except:
    #User is not Supervisor
    result={
       "status": "Error"
    }
    return HttpResponse(json.dumps(result))



@csrf_exempt
def add_supervisor(request):
  data=json.loads(request.body.decode("utf8"))
  username=data['username']
  password=data['password']
  #role=data['role']
  email=data['email']
  first_name=data["first_name"]
  last_name=data["last_name"]
  detail=data["detail"]
  designation=data["designation"]
  try:
    obj = CustomUser(username=username,
                      user_type=2,
                      first_name=first_name,
                      last_name=last_name,
                      email=email)
    obj.password=make_password(password)
    obj.save()
    supervisor=Supervisor(supervisor=obj, designation=designation, details=detail)
    supervisor.save()
    return HttpResponse(json.dumps({"status": "Supervisors Created Successfully"}))
  except:
    #User is not Supervisor
    result={
       "status": "Error"
    }
    return HttpResponse(json.dumps(result))



@csrf_exempt
def add_bulk_students(request):
  try:
    all_users=json.loads(request.body.decode("utf8"))
    users_list=[]
    students_list=[]
    for user_data in all_users:
      user= CustomUser(
        first_name=user_data["First Name"],
        last_name=user_data["Last Name"],
        username=user_data['Username'],
        email=user_data["Email"],
        is_staff=False,
        is_active=True,
        is_superuser=False,
        user_type=2

      )
      user.password = make_password(user_data["Password"])
      users_list.append(user)
    CustomUser.objects.bulk_create(users_list)
    for user_data in all_users:
      user=CustomUser.objects.get(username=user_data["Username"])
      student=Student(
          student=user,
          session_year=user_data["Session"],

        )

      students_list.append(student)


    Student.objects.bulk_create(students_list)
    result={
       "status": "User Created Successfully"
    }
    return HttpResponse(json.dumps(result))
  except Exception as e:
    print("DEBUG : Error is ", str(e))
    return HttpResponse(json.dumps({"status": "Error"}))


@csrf_exempt
def add_bulk_supervisors(request):
  try:
    all_users=json.loads(request.body.decode("utf8"))
    users_list=[]
    supervisor_list=[]
    for user_data in all_users:
      user= CustomUser(
        first_name=user_data["First Name"],
        last_name=user_data["Last Name"],
        username=user_data['Username'],
        email=user_data["Email"],
        is_staff=False,
        is_active=True,
        is_superuser=False,
        user_type=1

      )
      user.password = make_password(user_data["Password"])
      users_list.append(user)
    CustomUser.objects.bulk_create(users_list)
    for user_data in all_users:
      user=CustomUser.objects.get(username=user_data["Username"])
      student=Supervisor(
          supervisor=user,
          designation=user_data["Designation"],
          details=user_data["Details"],

        )

      supervisor_list.append(student)


    Supervisor.objects.bulk_create(supervisor_list)
    result={
       "status": "User Created Successfully"
    }
    return HttpResponse(json.dumps(result))
  except Exception as e:
    print("DEBUG : Error is ", str(e))
    return HttpResponse(json.dumps({"status": "Error"}))



@csrf_exempt
def delete_user(request):
  try:
    data=json.loads(request.body.decode("utf8"))
    user=CustomUser.objects.get(username=data["username"])
    user.delete()
    return HttpResponse(json.dumps({"status": "User Delete Successfully"}))


  except Exception as e:
    print("DEBUG : Error is ", str(e))
    return HttpResponse(json.dumps({"status": "User Not Found"}))




