from django.db import models
from django.contrib.auth.models import User
from django import forms

# Create your models here.


class Contact(models.Model):
    email = models.EmailField(max_length=122)
    name = models.CharField(max_length=122)
    phone = models.CharField(max_length=12)
    desc = models.TextField()
    date = models.DateField(auto_now_add=True)  # Set to auto-generate date on creation

    def __str__(self):
        return self.name

class Apply(models.Model):
        
        

        name=models.CharField(max_length=122)
        dob=models.DateField()
        email=models.EmailField(max_length=122)
        phone=models.CharField(max_length=12)
        aadhar=models.CharField(max_length=12)
        pan=models.CharField(max_length=10)
        place_of_study=models.CharField(max_length=122)
        gender=models.CharField(max_length=8)
        scheme_name=models.CharField(max_length=122)
        is_verified=models.BooleanField(default=False)
        #newly added
       
        
        # def __str__(self):
        #    return self.name

class Apply2(models.Model):
    scheme_name = models.CharField(max_length=225)
    scheme_closing_date = models.DateField()
    defective_app_verification_date = models.DateField()
    institute_verification_date = models.DateField()
    dno_sno_mno_verification_date = models.DateField()
    guidelines_pdf = models.FileField(upload_to='guidelines_pdfs/')  # 'upload_to' specifies the directory to store uploaded files

    def __str__(self):
        return self.scheme_name        

class Abrl(models.Model):
        
        name=models.CharField(max_length=122,null=True,default=None)
        dob=models.DateField(null=True, default=None)
        email=models.EmailField(max_length=122,null=True, default=None)
        phone=models.CharField(max_length=12,null=True, default=None)
        aadhar=models.CharField(max_length=12,null=True, default=None)
        pan=models.CharField(max_length=10,null=True, default=None)
        place_of_study=models.CharField(max_length=122,null=True, default=None)
        gender=models.CharField(max_length=8,null=True, default=None)
        scheme_name=models.CharField(max_length=122,null=True, default=None)
        is_verified=models.BooleanField(default=False)
        #newly added
       
        
        def __str__(self):
           return self.name
        
class Hdfc(models.Model):
        
        name=models.CharField(max_length=122,null=True,default=None)
        dob=models.DateField(null=True, default=None)
        email=models.EmailField(max_length=122,null=True, default=None)
        phone=models.CharField(max_length=12,null=True, default=None)
        aadhar=models.CharField(max_length=12,null=True, default=None)
        pan=models.CharField(max_length=10,null=True, default=None)
        place_of_study=models.CharField(max_length=122,null=True, default=None)
        gender=models.CharField(max_length=8,null=True, default=None)
        scheme_name=models.CharField(max_length=122,null=True, default=None)
        is_verified=models.BooleanField(default=False)
        #newly added
       
        
        def __str__(self):
           return self.name

class Dummy(models.Model):
        name=models.CharField(max_length=122,null=True,default=None)
        aadhar=models.CharField(max_length=12)
        pan=models.CharField(max_length=10)
        def __str__(self):
            return self.aadhar
        
class Cand(models.Model):
    name = models.CharField(max_length=122,null=True,default=None)
    email = models.EmailField()
    phone_number = models.CharField(max_length=20)
    aadhar_number = models.CharField(max_length=12)
    def __str__(self):
        return self.name
    
        

        
        


        