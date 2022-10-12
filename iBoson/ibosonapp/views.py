from django.shortcuts import render
from ibosonapp.models import Divone, Options,Divtwo
from .serializers import DivoneSerializer, DivtwoSerializer, OptionsSerializer
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

class OptionList(generics.ListCreateAPIView):
    queryset = Options.objects.all()
    serializer_class = OptionsSerializer

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


# To get and add the divonelist
class DivoneList(generics.ListCreateAPIView):
    queryset = Divone.objects.all()
    serializer_class = DivoneSerializer
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):        
        return self.create(request, *args, **kwargs)


#  To Delete the Divone list
class DeleteDivoneview(APIView):
    def delete(self,request):
        id = self.request.GET.get('id')
        option = Divone.objects.filter(option=id)
        option.delete()
        return Response({'message':'Options deleted'})



# To get and add the Divtwolist
class DivtwoList(generics.ListCreateAPIView):
    queryset = Divtwo.objects.all()
    serializer_class = DivtwoSerializer
    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        option = request.data
        option = Divone.objects.filter(option=option['option'])
        option.delete()
        return self.create(request, *args, **kwargs)


#  To Delete the Divtwo list
class DeleteDivtwoview(APIView):
    def delete(self,request):
        id = self.request.GET.get('id')
        option = Divtwo.objects.filter(option=id)
        option.delete()
        return Response({'message':'Options deleted'})