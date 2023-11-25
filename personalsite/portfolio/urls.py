from django.urls import include, path
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register(r'projects', views.ProjectViewSet)

app_name = 'portfolio'
urlpatterns = [
    path('', views.index, name='index'),
    path('api/', include(router.urls)),
    path('get_model_data/', views.get_model_data, name='get_model_data')
]