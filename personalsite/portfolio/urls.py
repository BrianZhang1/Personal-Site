from django.urls import path

from . import views

app_name = 'portfolio'
urlpatterns = [
    path('', views.index, name='index'),
    path('get_model_data/', views.get_model_data, name='get_model_data')
]