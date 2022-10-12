from rest_framework import serializers
# from django.contrib.auth.models import User
from .models import Options,Divtwo,Divone

class OptionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Options
        fields = "__all__"

class DivoneSerializer(serializers.ModelSerializer):
    class Meta:
        model = Divone
        fields = "__all__"

class DivtwoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Divtwo
        fields = "__all__"