from django.shortcuts import render,redirect
from rest_framework import generics
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework import permissions
from .serializers import QuestionSerializers, UserSerializers, SubmissionSerializers
from .models import UserProfileInfo, Submissions, Questions, UserQ
from django.urls import reverse
from django.contrib.auth import login, logout
from django.http import HttpResponseRedirect, HttpResponse, JsonResponse
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
#from rest_framework.response import Response
from rest_framework.renderers import JSONRenderer

import datetime
import json
import os


# Create your views here.

class QuestionsList(generics.ListCreateAPIView):
    queryset = Questions.objects.all()
    serializer_class = QuestionSerializers


class QuestionsDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Questions.objects.all()
    serializer_class = QuestionSerializers


class UserList(generics.ListCreateAPIView):
    queryset = UserProfileInfo.objects.all()
    serializer_class = UserSerializers
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    authentication_classes = (BasicAuthentication, SessionAuthentication)


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = UserProfileInfo.objects.all()
    serializer_class = UserSerializers
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    authentication_classes = (BasicAuthentication, SessionAuthentication)


class SubmissionList(generics.ListCreateAPIView):
    queryset = Submissions.objects.all()
    serializer_class = QuestionSerializers


class SubmissionDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Submissions.objects.all()
    serializer_class = QuestionSerializers


endtime = 0
_flag = False

starttime = ""

path = 'data/users_code'
path2 = 'data/standard'
path3 = 'data/standard/testcaseScore'


def startTimer(request):
    if request.method == 'GET':
        return render(request, 'frontend/timer.html')  # timer url known only to us
    else:
        adminpassword = '1'
        _password = request.POST.get('pass1')   # get admin password
        if _password == adminpassword:
            global _flag
            _flag = True    # flag True when you start the timer(used so he cannot go to register before waitin page# )
            now1 = datetime.datetime.now()  # cuurent time       ( by putting the url )
            min1 = now1.minute + 1  # 1 signifies time after hitting timer url
            hour1 = now1.hour
            time1 = str(hour1) + ':' + str(min1)    # makes the string of current time + 1 min

            time = now1.second+now1.minute * 60 + now1.hour * 60 * 60
            global endtime
            global starttime
            starttime = time1
            endtime = time + 7200   # 7200 defines our event time

            return HttpResponse('<p>Good to go</p>')
        else:
            return HttpResponse("Invalid login details supplied.")


# def waiting(request):   # this view gets called every 5 seconds
#     if request.user.is_authenticated:
#         return HttpResponseRedirect(reverse('question_panel'))
#     else:
#         now = datetime.datetime.now()
#         min = now.minute
#         hour = now.hour
#         sec = min * 60 + hour * 60 * 60
#         time = str(hour)+":" + str(min)
#
#         global starttime    # has current time + 1 min time in string format
#
#         if not starttime == "": # condition to handle if user types url of waiting page from register page
#             _time_string = starttime.split(":")
#             _min = int(_time_string[1]) # extract the hour and min for later use
#             _hour = int(_time_string[0])
#             _sec = _hour * 60 * 60 + _min * 60  # the hour and min in seconds
#             if sec > _sec:  #if current time of hr:min in seconds greater than starttime ka seconds(hr:min conversion)
#                             # so he should not go back to waiting page once he goes to register page
#                 return HttpResponseRedirect(reverse('register'))
#
#         if time == starttime:   # since waiting page refreshes every 5 seconds when the current time equates to
#                                 # time defined when timer was hit i.e +1 the curr time then :
#             return HttpResponseRedirect(reverse('register'))
#         else:
#             return render(request, 'basic_app/waiting.html')


def waiting(request):
    return render(request, 'frontend/index.html', {})


def testcase(request):
    return render(request, 'frontend/index.html', {})


def timer(request):
    now = datetime.datetime.now()
    time = now.second + now.minute * 60 + now.hour * 60 * 60
    global endtime  # defined once when timer was hit
    return JsonResponse({'time': endtime-time})


def nowTime():
    now = datetime.datetime.now()
    time = now.second + now.minute * 60 + now.hour * 60 * 60
    global endtime  # defined once when timer was hit

    return endtime - time


def questions(request, id=1):
    if request.user.is_authenticated:
        if request.is_ajax():
            if request.method=='POST':
                print(request.user)
                body_unicode = request.body.decode('utf-8')
                Postobject = json.loads(body_unicode)

                some_text = Postobject['questionField']  # code to store in submission instance
                subb = Submissions(user=request.user, que=Questions.objects.get(pk=id))
                subb.sub = some_text
                time = nowTime()
                hour = time // (60 * 60)
                a = time % (60 * 60)
                if a < 60:
                    sec = a
                    min = 0
                else:
                    min = a // 60
                    sec = a % 60

                subb.subtime = '{}:{}:{}'.format(hour, min, sec)    # stores time of submission

                option = Postobject['lang']   # get c or cpp
                username = request.user.username
                user = UserProfileInfo.objects.get(user=request.user)
                juniorSenior = user.level
                user.option = option
                subb.save()

                testlist = ['fail', 'fail', 'fail', 'fail', 'fail']

                user.attempts += 1

                fo = open('{}/{}/question{}/{}{}.{}'.format(path, username, id, username, user.attempts, option), 'w')
                fo.write(some_text)     # writes .c file
                fo.close()

                dictt = {}

                if os.path.exists('{}/{}/question{}/{}{}.{}'.format(path, username, id, username, user.attempts, option)):
                    ans = os.popen("python data/main.py " + "{}/{}/question{}/{}{}.{}".format(path, username, id, username, user.attempts, option) + " " + username + " " + str(id) + " " + juniorSenior + " " + str(user.attempts)).read()
                    # sandbox returns the 2 digit code of five testcases as a single integer of 10 digit number
                    ans = int(ans)  # saves 99'99'89'99'50 as 9999899950 these ae sandbox returned codes of 5 testcases
                    print("THE SANDBOX CODE IS", ans)
                    data = [1, 2, 3, 4, 5]  # codes of each testcase for the question
                    tcOut = [0, 1, 2, 3, 4] # switch case number for sandbox coode
                    switch = {

                        10: 0,  # correct answer code
                        99: 1,  # wrong answer code
                        50: 2,  # System commands
                        89: 3,  # compile time error
                        70: 4,  # Abnormal termination
                        20: 5,  # custom error
                        60: 6,  # Run time error
                        40: 7   # Motherfucking code
                    }

                    user.score = 0
                    for i in range(0, 5):
                        data[i] = ans % 100	# stores output for each case but in reverse order
                        ans = int(ans / 100)

                        tcOut[i] = switch.get(data[i], 2)
                        if tcOut[i] == 0:  # if data[i] is 10 i.e correct answer
                            testlist[4 - i] = 'pass'    # since data stored in reverse order

                    testlistcopy = ['pass'] * 5

                    if testlist == testlistcopy:
                        user.score = 100
                    else:
                        user.score = 0

                    user.save()

                    cerror = ""

                    tle_flag = False
                    abt_flag = False
                    rte_flag = False
                    cte_flag = False

                    status = ""

                    if tcOut[4] == 3:   # if compiler error then store read it for error.txt which was made in main.py
                        cte_flag = True # and store it in strinf cerror to display on console
                        error = path + "/" + username + "/" + str("error{}.txt".format(id))
                        status = "CTE"
                        with open(error, 'r') as e:
                            cerror = e.read()
                            cerror1 = cerror.split('/')

                            cerror2 = cerror1[0]+'/'+cerror1[1]+'/'+cerror1[2]+'/'
                            cerror = cerror.replace(cerror2, '')    # scrape the file path of users

                    if tcOut[0] == 2 or tcOut[1] == 2 or tcOut[2] == 2 or tcOut[3] == 2 or tcOut[4] == 2:
                        tle_flag = True
                        status = "TLE"

                    if tcOut[0] == 4 or tcOut[1] == 4 or tcOut[2] == 4 or tcOut[3] == 4 or tcOut[4] == 4:
                        abt_flag = True
                        status = "W.A"

                    if tcOut[0] == 5 or tcOut[1] == 5 or tcOut[2] == 5 or tcOut[3] == 5 or tcOut[4] == 5:
                        abt_flag = True
                        status = "RTE"

                    if tcOut[0] == 6 or tcOut[1] == 6 or tcOut[2] == 6 or tcOut[3] == 6 or tcOut[4] == 6:
                        rte_flag = True
                        status = "RTE"   # strings to display on console

                    if tcOut[0] == 7 or tcOut[1] == 7 or tcOut[2] == 7 or tcOut[3] == 7 or tcOut[4] == 7:
                        rte_flag = True
                        status = "RTE"   # strings to display on console

                    if UserQ.objects.filter(user = user.user, Qid=id):
                        if UserQ.objects.get(user=user.user, Qid=id).score <= user.score:
                            q = UserQ.objects.get(user=user.user, Qid=id)
                            q.score = user.score
                            q.save()
                            UserQ.objects.get(user=user.user, Qid=id).save()
                    else:
                        q = UserQ(Qid=id, user=user.user)
                        q.score = user.score
                        q.save()

                    user.save()

                    user.totalScore = 0
                    user1 = User.objects.get(username=user.user.username)
                    for userque in user1.userq_set.all():
                        user.totalScore += userque.score

                    user.total = user.totalScore // 6
                    user.save()

                    Q = Questions.objects.get(id=id)    # current question object

                    for_count = 0

                    for i in testlist:
                        if i == 'pass':
                            for_count += 1

                    if for_count == 5:
                        status = 'A.C'
                        Q.submission += 1      # if score 100 then increase successful subs for that question by 1
                        Q.save()

                    else:
                        if not (tle_flag or rte_flag or abt_flag or cte_flag):
                            status = 'W.A'
                        for_count = 0

                    subb.testCaseScore = (for_count / 5) * 100  # testcase % completion

                    subb.save()
                    if subb.testCaseScore == 100:
                        user.uacsubtime = '{}:{}:{}'.format(hour, min, sec)

                    user.save()

                    dictt = {'e':cerror,
                             't':nowTime(),
                             'testlist':testlist,
                             'status':status,
                             'score': user.score,
                             'qid': id}

                return JsonResponse(dictt)
        else:
            return render(request, 'frontend/index.html')
    else:
         return redirect(reverse('register'))


def question_panel(request):
    if request.user.is_authenticated:
        if request.is_ajax():
            try:
                user = UserProfileInfo.objects.get(user=request.user)
            except UserProfileInfo.DoesNotExist:
                return render(request, 'frontend/index.html')

            user.flag = True    # once reaches question_panel do not enable user to go back
            user.save()

            all_user = UserProfileInfo.objects.all()

            accuracy_count = [0] * 6        # number of users who have 100 score for each 6 questions
            user_sub_count = [0] * 6        # number of users who have atleast one submissions
            percentage_accuracy = [0] * 6   # stores accuracy of each question

            for user in all_user:
                for i in range(6):
                    if UserQ.objects.filter(Qid=i+1, user=user.user):
                        user_sub_count[i] += 1
                        if UserQ.objects.get(Qid=i+1, user=user.user).score == 100:
                            accuracy_count[i] += 1

            for i in range(0, 6):
                try:
                    percentage_accuracy[i] = int((accuracy_count[i] / user_sub_count[i]) * 100)
                except ZeroDivisionError:
                    percentage_accuracy[i] = 0  # since for the first get request no submissions so 0/0 error

            all_question = Questions.objects.all()

            a1 = 0

            for i in all_question:
                i.accuracy = percentage_accuracy[a1]
                a1 += 1
                i.save()    # save the accuracy

            serializer = QuestionSerializers(all_question, many=True)

            data = JSONRenderer().render(serializer.data).decode('utf-8')
            data = json.loads(data)
            data = {'data': data}

            return JsonResponse(data)

        else:
            return render(request, 'frontend/index.html')
    else:
        return redirect(reverse('register'))


def leader(request):
    if request.user.is_authenticated:
        if request.is_ajax():
            a = UserProfileInfo.objects.order_by("totalScore", "uacsubtime")
            b = a.reverse()

            users = [
            ]

            for user in b:
                templist = [0] * 6
                for i in range(6):
                    if UserQ.objects.filter(Qid=i + 1, user=user.user):
                        templist[i] = UserQ.objects.get(Qid=i + 1, user=user.user).score

                users.append({
                    'username' : user.user.username,
                    'totalScore': user.totalScore,
                    'questionScores': templist
                })

            response_data ={
                'users' : users
            }

            return JsonResponse(response_data)
        else:
            return render(request, 'frontend/index.html')
    else:
        return redirect(reverse('register'))


def instructions(request):
    if request.user.is_authenticated:
        try:
            user = UserProfileInfo.objects.get(user=request.user)
        except UserProfileInfo.DoesNotExist:
            user = UserProfileInfo()
        if user.flag:   # if user has before visited question panel and tries to come back
            return HttpResponseRedirect(reverse('question_panel'))
        if request.method == "POST":
            return HttpResponseRedirect(reverse('question_panel'))
        return render(request, 'frontend/index.html')
    else:
        return HttpResponseRedirect(reverse('register'))


def user_logout(request):
    if request.user.is_authenticated:
        if request.is_ajax():

            try:
                user = UserProfileInfo.objects.get(user=request.user)
            except UserProfileInfo.DoesNotExist:
                return register(request)
            a = UserProfileInfo.objects.order_by("total")
            b = a.reverse()
            counter = 0
            for i in b:
                counter += 1
                if str(i.user) == str(request.user.username):
                    break

            dict = {'count': counter, 'name': request.user.username, 'score': user.totalScore}

            logout(request)
            return JsonResponse(dict)
        else:
            return render(request, 'frontend/index.html')
    else:
        return redirect(reverse('register'))


def register(request):
    if request.method == 'POST':
        body_unicode = request.body.decode('utf-8')
        Postobject = json.loads(body_unicode)

        username = Postobject['username']
        password = Postobject['password']
        name1 = Postobject['name1']
        name2 = Postobject['name2']
        phone1 = Postobject['phone1']
        phone2 = Postobject['phone2']
        level = Postobject['level']

        b = UserProfileInfo()
        b.user = User.objects.create_user( username=username, password=password)
        b.name1 = name1
        b.name2 = name2
        b.phone1 = phone1
        b.phone2 = phone2
        b.level = level
        login(request, b.user)
        b.save()

        if not os.path.exists('{}/{}/'.format(path, b.user.username)):  # make folders of user
            b.attempts = 0  # this line should be exceuted only once
            os.system('mkdir {}/{}'.format(path, b.user.username))

            for i in range(1, 7):
                os.system('mkdir {}/{}/question{}'.format(path, username, i))

        b.save()

        serializer = UserSerializers(b)

        #print(serializer.data)

        return JsonResponse(serializer.data)
    else:
        return render(request, 'frontend/index.html')


def sub(request, id=1):
    if request.user.is_authenticated:
        if request.is_ajax():

            a = Submissions.objects.filter(user=request.user, que=Questions.objects.get(id=id)) # create sub for that question for that user
            # check models for clear picture

            serializer = SubmissionSerializers(a, many=True)

            data = JSONRenderer().render(serializer.data).decode('utf-8')
            data = json.loads(data)
            data = {'data': data}

            return JsonResponse(data)
        else:
            return render(request, 'frontend/index.html')
    else:
        return redirect(reverse('register'))


def retry(request, id=1):
    if request.method == "GET":
        user = UserProfileInfo.objects.get(user=request.user)
        a = Submissions.objects.filter(user=request.user, qid=user.question_id) # create sub for that question for that user
        array = []  # all codes subs for that questions
        idd = []    # for qids

        for i in a:
            array.append(i.sub) # i.sub is code written by user
            idd.append(i.qid)
        var = Questions.objects.all()

        f = idd[int(id)-1]
        q = var[int(f)-1]   # extract question from the url id
        question = q.questions  # text of the question
        dict = {'sub': array[int(id)-1], 'question': question, 's': user.score, 't': nowTime()}

        return render(request, 'basic_app/Codingg.html', context=dict)
    if request.method == "POST":
        return questions(request)


def checkuser(request): # ajax validation of username
    body_unicode = request.body.decode('utf-8')
    Postobject = json.loads(body_unicode)
    username = Postobject['username']
    response_data = {}
    check1 = User.objects.filter(username=username)
    if not check1:  # if same user not present return success
        response_data["is_success"] = True
    else:
        response_data["is_success"] = False
    return JsonResponse(response_data)


def loadbuff(request, pk):
    response_data = {}
    username = request.user.username
    user = UserProfileInfo.objects.get(user=request.user)

    file = '{}/{}/question{}/{}{}.{}'.format(path, username, pk, username, user.attempts,
                                                           user.option)
    f = open(file, "r")
    text = f.read()

    if not text:
        response_data["text"] = ''
        return JsonResponse(response_data)

    response_data["text"] = text

    return JsonResponse(response_data)


def elogin(request):    # emergency login
    if request.method == 'POST':
        adminpassword = '1'
        username = request.POST.get('user')
        password = request.POST.get('pass')
        _password = request.POST.get('pass1')
        user = authenticate(username=username, password=password)

        if user is not None and _password is adminpassword:
            if user.is_active:
                login(request, user)
                return HttpResponseRedirect(reverse('question_panel'))

        else:
            return HttpResponse("Invalid login details supplied.")

    else:
        return render(request, 'basic_app/elogin.html', {})


# COMMENTS COURTESY OF SAUMITRA KULKARNI :P
