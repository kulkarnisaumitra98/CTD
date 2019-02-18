from django.contrib import admin
from .models import Questions, UserProfileInfo, Submissions, UserQ
# Register your models here.

admin.site.register(UserProfileInfo)
admin.site.register(Submissions)
admin.site.register(Questions)
admin.site.register(UserQ)
