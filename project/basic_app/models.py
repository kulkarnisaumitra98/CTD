from django.db import models
from django.contrib.auth.models import User


class Questions(models.Model):
    questions = models.TextField(default="")
    questionTitle = models.TextField(default="")
    accuracy = models.IntegerField(default=0)
    submission = models.IntegerField(default=0)   # No of successful submissions
    all_submissions = models.IntegerField(default=0)    # All submissions

    def __str__(self):
        return self.questionTitle


class UserProfileInfo(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    score = models.IntegerField(default=0)     # temporary score of a question
    totalScore = models.IntegerField(default=0)     # Total question score
    total = models.IntegerField(default=0)          # percentage score

    phone1 = models.CharField(max_length=10)
    phone2 = models.CharField(max_length=10)
    name1 = models.CharField(max_length=100)
    name2 = models.CharField(max_length=100)
    option = models.CharField(max_length=3, default='c')
    level = models.CharField(max_length=10)
    flag = models.BooleanField(default=False)
    uacsubtime = models.CharField(default=0, max_length=10)

    def __str__(self):

        return self.user.username


class Submissions(models.Model):
    sub = models.TextField(null=True)
    subtime = models.CharField(default='', max_length=10)
    testCaseScore = models.IntegerField(default=0)
    que = models.ForeignKey(Questions, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)


class UserQ(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    Qid = models.IntegerField(default=0)
    score = models.IntegerField(default=0)
    attempt = models.IntegerField(default=0)