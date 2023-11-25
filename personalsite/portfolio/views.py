from django.shortcuts import render
from django.http import JsonResponse

from rest_framework import viewsets

from .models import Project
from .serializers import ProjectSerializer


def index(request):
    projects = Project.objects.values('order', 'title', 'description', 'image_name')
    sorted_projects = sorted(projects, key=lambda p: p['order'])
    context = {'projects': sorted_projects}
    return render(request, 'portfolio/index.html', context)


class ProjectViewSet(viewsets.ReadOnlyModelViewSet):
    """
    API endpoint that allows projects to be viewed.
    """
    queryset = Project.objects.all().order_by('order')
    serializer_class = ProjectSerializer
