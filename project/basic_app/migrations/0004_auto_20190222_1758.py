# Generated by Django 2.1.4 on 2019-02-22 17:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('basic_app', '0003_remove_userprofileinfo_questiondetails'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='userprofileinfo',
            name='attempts',
        ),
        migrations.AddField(
            model_name='userq',
            name='attempt',
            field=models.IntegerField(default=0),
        ),
    ]