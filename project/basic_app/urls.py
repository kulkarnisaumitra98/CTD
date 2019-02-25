from django.urls import path
from . import views


urlpatterns =[
    path('api/submissionsList/', views.SubmissionList.as_view()),
    path('api/questionsList/', views.QuestionsList.as_view()),
    path('api/userList/', views.UserList.as_view()),
    path('api/question/<int:pk>/', views.QuestionsDetail.as_view()),
    path('api/submission/<int:pk>/', views.SubmissionDetail.as_view()),
    path('api/user/<int:pk>/', views.UserDetail.as_view()),
    path('player/1/', views.register, name='register'),
    path('checkuser/', views.checkuser),
    path('Coding/<int:id>', views.questions,name='Coding'),
    path('Questions/', views.question_panel, name='QuestionHub'),
    path('Leaderboard/', views.leader, name='Leaderboard'),
    path('Submissions/<int:id>/', views.sub, name='Submissions'),
    path('loadbuffer/<int:pk>/', views.loadbuff, name='loadbuffer'),
    path('timer/', views.startTimer),
    path('getTime/', views.timer),
    path('Testcase/<int:id>', views.questions),
    path('Result/', views.Result, name='Result'),
    path('instruction/', views.instructions, name='instructions'),
    path('elogin/', views.elogin, name='elogin'),
    path('', views.waiting, name='waiting'),

]
