from rest_framework import serializers
from .models import Data, DataTarget
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import AccessToken


class DataSerializer(serializers.ModelSerializer):
    class Meta:
        model = Data
        fields = ['id','date','meals','calories','user']


class DataTargetSerializer(serializers.ModelSerializer):
    class Meta:
        model = DataTarget
        fields = ['id','target','user']


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id','username','email','name']

    def get_name(self,obj):
        name = obj.first_name
        return name


#direact login after registration



