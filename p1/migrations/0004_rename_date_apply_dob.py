# Generated by Django 4.1.6 on 2023-02-05 13:14

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('p1', '0003_apply'),
    ]

    operations = [
        migrations.RenameField(
            model_name='apply',
            old_name='date',
            new_name='dob',
        ),
    ]
