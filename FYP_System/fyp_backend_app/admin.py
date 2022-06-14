from django.contrib import admin
from django.contrib.auth.admin import UserAdmin  # Helper Class for creating user admin pages

 #, CustomUserChangeForm
from .models import CustomUser,Student, Supervisor, Request, Project, Deliverable


class CustomUserAdmin(UserAdmin):

    model = CustomUser

    list_display = ('email', 'username','first_name','last_name','password', 'is_superuser', 'last_login', 'is_superuser', 'is_staff','address','created_at','updated_at','user_type','phone')
    search_fields = ('email', 'username',)
    readonly_fields = ('date_joined', 'last_login',)

    filter_horizontal = ()
    list_filter = ()
    fieldsets = ()


admin.site.register(CustomUser, CustomUserAdmin)
admin.site.register(Supervisor)
admin.site.register(Student)
admin.site.register(Request)
admin.site.register(Project)
admin.site.register(Deliverable)
