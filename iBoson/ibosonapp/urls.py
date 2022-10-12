from django.contrib import admin
from django.urls import path
from . import views

urlpatterns = [
    path('api/option',views.OptionList.as_view(),name='option'),

    path('api/Divone',views.DivoneList.as_view(),name='Divone'),
    path('api/deletedivone',views.DeleteDivoneview.as_view(),name='deletedivone'),


    path('api/Divtwo',views.DivtwoList.as_view(),name='Divtwo'),
    path('api/deletedivtwo',views.DeleteDivtwoview.as_view(),name='Divtwo'),
]