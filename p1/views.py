from multiprocessing import context
from django.shortcuts import render, HttpResponse, redirect
from datetime import datetime
from p1.models import Contact
from p1.models import Apply
from p1.models import Apply2
from p1.models import Cand
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth import authenticate, login, logout
from faker import Faker
from django.http import HttpResponseRedirect
from django.urls import reverse
import numpy as np
from datetime import datetime
import random
import string
# from django.contrib.auth.decorators import login_required
# @login_required(login_url='login') can be used for only redirecting after login,unknowns not allowed
# Create your views here.


def index(request):

    return render(request, 'index.html')


def sco(request):
    return render(request, 'state.html')


def apply(request):
    if request.method == "POST":
        name = request.POST.get('name')
        dob = request.POST.get('dob')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        aadhar = request.POST.get('aadhar')
        pan = request.POST.get('pan')
        place_of_study = request.POST.get('place_of_study')
        scheme_name = request.POST.get('scheme_name')

        apply = Apply(name=name, dob=dob, email=email, phone=phone, aadhar=aadhar,
                      pan=pan, place_of_study=place_of_study, scheme_name=scheme_name)
        apply.save()
        messages.success(request, 'Your message has been sent!')

    return render(request, 'apply.html')


def apply1(request):
    if request.method == "POST":
        # Get data from the form using request.POST.get()
        organization_name = request.POST.get('organization_name')
        tan_number = request.POST.get('tan_number')
        scheme_name = request.POST.get('scheme_name')
        registration_open_date = request.POST.get('registration_open_date')
        registration_close_date = request.POST.get('registration_close_date')
        eligible_applicants = request.POST.get('eligible_applicants')
        guidelines_pdf = request.FILES.get('guidelines_pdf')
        website_link = request.POST.get('website_link')
        notices = request.FILES.get('notices')
        additional_information = request.POST.get('additional_information')

        # Get the new fields
        scheme_closing_date = request.POST.get('scheme_closing_date')
        defective_app_verification_date = request.POST.get('defective_app_verification_date')
        institute_verification = request.POST.get('institute_verification')
        dno_sno_mno_verification = request.POST.get('dno_sno_mno_verification')
        guidelines_link = request.POST.get('guidelines_link')

        # Create a new Apply object with the retrieved data
        apply = Apply(organization_name=organization_name, tan_number=tan_number, scheme_name=scheme_name,
                      registration_open_date=registration_open_date, registration_close_date=registration_close_date,
                      eligible_applicants=eligible_applicants, guidelines_pdf=guidelines_pdf,
                      website_link=website_link, notices=notices, additional_information=additional_information,
                      scheme_closing_date=scheme_closing_date,
                      defective_app_verification_date=defective_app_verification_date,
                      institute_verification=institute_verification,
                      dno_sno_mno_verification=dno_sno_mno_verification,
                      guidelines_link=guidelines_link)

        # Save the object to the database
        apply.save()

        messages.success(request, 'Your message has been sent!')
        return render(request, 'private.html', context)  # Redirect to a success page

    return render(request, 'apply1.html')

def apply2(request):
    if request.method == 'POST':
        # Get data from the form
        scheme_name = request.POST.get('scheme_name')
        scheme_closing_date = request.POST.get('scheme_closing_date')
        defective_app_verification_date = request.POST.get('defective_app_verification_date')
        institute_verification_date = request.POST.get('institute_verification')
        dno_sno_mno_verification_date = request.POST.get('dno_sno_mno_verification')
        
        # Handle file uploads
        guidelines_pdf = request.FILES.get('guidelines_pdf')
        
        if guidelines_pdf:
            # Create a new Apply2 object and save it to the database
            scholarship_program = Apply2(
                scheme_name=scheme_name,
                scheme_closing_date=scheme_closing_date,
                defective_app_verification_date=defective_app_verification_date,
                institute_verification_date=institute_verification_date,
                dno_sno_mno_verification_date=dno_sno_mno_verification_date,
                guidelines_pdf=guidelines_pdf
            )
            scholarship_program.save()
            
            scholarship_program = Apply2.objects.all()
            context = {'scholarship_program': scholarship_program}
            messages.success(request, 'Your message has been sent!')
            return render(request, 'ugc.html', context)  # Redirect to a success page
        else:
            messages.error(request, 'No file provided for guidelines_pdf.')
            return redirect('apply2.html')  # Redirect back to the 'apply2' page
    else:
        return render(request, 'apply2.html')


def contact(request):
    if request.method == "POST":
        email = request.POST.get('email')
        name = request.POST.get('name')
        phone = request.POST.get('phone')
        desc = request.POST.get('desc')
        contact = Contact(email=email, name=name, phone=phone,
                          desc=desc, date=datetime.today())
        contact.save()
        messages.success(request, 'Your message has been sent!')

    return render(request, 'contact.html')


def private(request):
    return render(request, 'private.html')


def ugc(request):
    return render(request, 'ugc.html')


def SignupPage(request):
    if request.method=='POST':
        uname=request.POST.get('username')
        email=request.POST.get('email')
        pass1=request.POST.get('password1')
        pass2=request.POST.get('password2')

        if pass1!=pass2:
            return HttpResponse("Your password & confirm password are not same!")
        else:
            my_user=User.objects.create_user(uname,email,pass1)
            my_user.save()
            return redirect('login')

    return render(request,'signup.html')

def log(request):
    if request.method == 'POST':
        username=request.POST.get('username')
        pass1=request.POST.get('pass')
        user = authenticate(request,username=username, password=pass1)
        if user is not None :
            login(request,user)
            return redirect('p1')
        else:
            return HttpResponse("Username or Password is Incorrect!")
        
    return render(request,'login.html')

def LogoutPage(request):
    logout(request)
    return redirect('login')

# def  generate_fake_datacontact(request):
#     if request.method == "POST":
#         name=request.POST.get('name')
#         email=request.POST.get('email')
#         phone_number=request.POST.get('phone_number')
#         aadhar_number=request.POST.get('aadhar_number')
#         cand= Cand(email=email, name=name, phone_number=phone_number,aadhar_number=aadhar_number)
#         cand.save()
#         messages.success(request,'Your message has been sent!')

#     return HttpResponse("genreated")


def generate_fake_data(request):
    fake = Faker("en_IN")
    possible_num = (1, 2, 3, 4, 5, 6, 7, 8, 9, 0)
    possible_sch = ('abrl', 'hdfc')
    possible_alp = ('A', 'B', 'C', 'D', 'E', 'F', 'G',
                    'H', 'I', 'J', 'K', 'L', 'M', 'N')
    for _ in range(10):

        # name = fake.name()
        name = fake.name()
        str = "gmail.com"
        # pan1 = np.random.choice(possible_alp, 5)
        # pan2 = np.random.choice(possible_num, 4)
        # pan3 = np.random.choice(possible_alp, 1)
        # length = 10
        # pan =  ''.join(random.choices(string.ascii_letters + string.digits, k=length))
        email = f"{name.lower()}@{str.lower()}"
        start_date = datetime(year=1975, month=3, day=16)
        end_date = datetime(year=2005, month=10, day=16)
        dob = fake.date_between(start_date=start_date, end_date=end_date)
        # email = fake.email()
        phone = fake.phone_number()
        aadhar = fake.random_int(min=10**11, max=10**12-1)
        place_of_study = fake.city()
        gender = np.random.choice(["M", "F"], p=[0.5, 0.5])
        scheme_name = np.random.choice(possible_sch, 1)

        apply = Apply(name=name, dob=dob, email=email, phone=phone, aadhar=aadhar,
                      place_of_study=place_of_study, gender=gender, scheme_name=scheme_name)
        apply.save()

    return HttpResponse('success_page')


def help(request):
    if request.method == "POST":
        # Get data from the form using request.POST
        email = request.POST.get('email')
        name = request.POST.get('name')
        phone = request.POST.get('phone')
        desc = request.POST.get('desc')

        # Create a new Contact object with the retrieved data
        contact_form = Contact(email=email, name=name, phone=phone, desc=desc)

        # Save the object to the database
        contact_form.save()

        messages.success(request, 'Your feedback has been submitted successfully!')
        return redirect('help')  # Redirect to the same page after submission

    return render(request, 'help.html')



def about_us(request):
    return render(request, 'aboutus.html')