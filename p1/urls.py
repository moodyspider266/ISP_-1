from django.contrib import admin
from django.urls import path
from p1 import views

urlpatterns = [
    path('', views.index, name='p1'),
    path('sco', views.sco, name='sco'),
    path('studentapply', views.apply, name='apply'),
    path('organisationapply', views.apply1, name='apply1'),
    path('ugc1', views.apply2, name='apply2'),
    path('log', views.log, name='login'),
    path('scholarship', views.apply2, name='apply2'),
    path('contact', views.contact, name='contact'),
    path('private', views.private, name='private'),
    path('ugc', views.ugc, name='ugc'),
    path('signup', views.SignupPage, name='signup'),
    path('logout', views.LogoutPage, name='logout'),
    path('fake', views.generate_fake_data, name='fake'),
    path('help', views.help, name='help'),
    path('apply', views.apply, name='apply'),
    path('aboutus', views.about_us, name='about_us'),
]