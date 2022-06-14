from random import choices
from urllib import request
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth.models import User
#from projects.models import  Request,Project

# Create your models here.

# class Student(AbstractUser):
#     #user=models.OneToOneField(User, on_delete=models.CASCADE, null=False,)
#     #username = models.CharField(max_length = 50, blank = False, null = False, unique = True)
#     address = models.TextField(blank=True)
#     #password = models.CharField(max_length=32)
#     session_year=models.IntegerField()
#     #project_id = models.OneToOneField(Projects, on_delete=models.DO_NOTHING)
#     #session_year_id = models.ForeignKey(SessionYearModel, on_delete=models.CASCADE)
#     score = models.IntegerField(blank=True)
#     created_at = models.DateTimeField(auto_now_add=True)
#     updated_at = models.DateTimeField(auto_now=True)
#     Phone = models.CharField(blank=True, max_length=15)
#     #objects = models.Manager()


class CustomUser(AbstractUser):
    Choices=[
        (1,'supervisor'),(2,'student'),(0,'admin')
    ]
    #username = models.CharField(max_length = 50, blank = False, null = False, unique = True)
    address = models.TextField(blank=True)
    #projects_id = models.ForeignKey(Projects, on_delete=models.DO_NOTHING)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    phone = models.CharField(blank=True, max_length=15)
    user_type=models.PositiveSmallIntegerField( choices=Choices, default=0)
    #objects = models.Manager()

class Supervisor(models.Model):
    supervisor= models.OneToOneField(CustomUser, on_delete=models.CASCADE )
    details= models.TextField(blank=True)
    designation= models.CharField(blank=True, max_length=50)


class Request(models.Model):
    Choices=[
        (0,'Pending'),(1,'Accepted'),(2,'Rejected')
    ]
    details =  models.TextField(blank=True)
    title = models.CharField(max_length=70)
    supervisor = models.OneToOneField(Supervisor,on_delete=models.CASCADE,related_name='supervisor_request')
    request_status = models.PositiveSmallIntegerField( choices=Choices, default=0)

class Project(models.Model):
    Choices=[
        (0,'Started'),(1,'Proposal Submitted'),(2,'Proposal Approved'),(3,'D1 submitted'),(4,'D1 approved'),(5,'D2 submitted'),(6,'D2 approved'),(7,'R1 submitted'),(8,'R1 approved'),(9,'R2 submitted'),(10,'R2 approved'),(11,'Final Project Submitted'),(12,'Final Project Approved')
    ]
    title = models.CharField(max_length=70,blank=True)
    datestarted=models.DateTimeField(auto_now=True)
    supervisor=models.ForeignKey(Supervisor,on_delete=models.CASCADE,related_name='supervisor_user')
    status=models.PositiveSmallIntegerField(choices=Choices , default=0)
    total_grade=models.DecimalField(null=True,blank=True , decimal_places=4, max_digits=15)

class Deliverable(models.Model):
    dil_file=models.FileField(blank=True)
    name=models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add=True)
    project= models.ForeignKey(Project,on_delete=models.DO_NOTHING)
    score= models.DecimalField(blank=True , decimal_places=4, max_digits=15)


class Student(models.Model):
    student= models.OneToOneField(CustomUser, on_delete=models.CASCADE )
    cgpa= models.DecimalField(blank=True, null=True, decimal_places=3, max_digits=15)
    session_year= models.IntegerField( blank=True)
    request= models.ManyToManyField(Request,blank=True)
    project= models.ForeignKey(Project, blank=True, null=True, on_delete=models.DO_NOTHING )







