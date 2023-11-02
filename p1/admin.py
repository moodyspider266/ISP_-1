from django.contrib import admin
from django import forms
from p1.models import Contact
from p1.models import Apply
from p1.models import Dummy
from p1.models import Abrl
from p1.models import Hdfc
from p1.models import Cand



# Register your models here.
admin.site.register(Contact)
admin.site.register(Abrl)
admin.site.register(Hdfc)
admin.site.register(Dummy)
admin.site.register(Cand)

#added
class MyModelAdmin(admin.ModelAdmin):
    list_display = ('name','email','scheme_name','is_verified')
    list_filter= ('is_verified','scheme_name')
    
# admin.site.register(Apply,MyModelAdmin)

    def copy_to_abrl(modeladmin, request, queryset):
      for obj in queryset:
        # Create a new ABRL object using the data from the Apply object
        abrl_obj = Abrl(name=obj.name,dob=obj.dob,email=obj.email,phone=obj.phone,aadhar=obj.aadhar,pan=obj.pan,place_of_study=obj.place_of_study,gender=obj.gender,scheme_name=obj.scheme_name,is_verified=obj.is_verified)

        # Save the new ABRL object to the database
        abrl_obj.save()
    # copy_to_abrl.short_description = "Copy to ABRL"
    actions = [copy_to_abrl]
admin.site.register(Apply,MyModelAdmin)
    









