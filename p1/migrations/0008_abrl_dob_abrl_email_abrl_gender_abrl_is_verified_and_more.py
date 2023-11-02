# Generated by Django 4.1.6 on 2023-03-11 20:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('p1', '0007_abrl'),
    ]

    operations = [
        migrations.AddField(
            model_name='abrl',
            name='dob',
            field=models.DateField(default=None, null=True),
        ),
        migrations.AddField(
            model_name='abrl',
            name='email',
            field=models.EmailField(default=None, max_length=122, null=True),
        ),
        migrations.AddField(
            model_name='abrl',
            name='gender',
            field=models.CharField(default=None, max_length=8, null=True),
        ),
        migrations.AddField(
            model_name='abrl',
            name='is_verified',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='abrl',
            name='name',
            field=models.CharField(default=None, max_length=122, null=True),
        ),
        migrations.AddField(
            model_name='abrl',
            name='pan',
            field=models.CharField(default=None, max_length=10, null=True),
        ),
        migrations.AddField(
            model_name='abrl',
            name='phone',
            field=models.CharField(default=None, max_length=12, null=True),
        ),
        migrations.AddField(
            model_name='abrl',
            name='place_of_study',
            field=models.CharField(default=None, max_length=122, null=True),
        ),
        migrations.AddField(
            model_name='abrl',
            name='scheme_name',
            field=models.CharField(default=None, max_length=122, null=True),
        ),
        migrations.AlterField(
            model_name='abrl',
            name='aadhar',
            field=models.CharField(default=None, max_length=12, null=True),
        ),
    ]
