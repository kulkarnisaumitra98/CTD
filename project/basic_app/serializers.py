from rest_framework import serializers
from .models import Questions, UserProfileInfo, Submissions, UserQ


class QuestionSerializers(serializers.ModelSerializer):
    class Meta:
        model = Questions
        fields = '__all__'


class UserSerializers(serializers.ModelSerializer):
    class Meta:
        model = UserProfileInfo
        fields = '__all__'


class SubmissionSerializers(serializers.ModelSerializer):
    class Meta:
        model = Submissions
        fields = '__all__'

class UserQueSerializers(serializers.ModelSerializer):
    class Meta:
        model = UserQ
        fields = '__all__'


