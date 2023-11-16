from django.shortcuts import render
from django.http import JsonResponse

from .models import Project


def index(request):
    projects = Project.objects.values('tag_id', 'title', 'description', 'image_name')
    context = {'projects': projects}
    return render(request, 'portfolio/index.html', context)


def get_model_data(request):
    projects = {'projects': list(Project.objects.values())}
    return JsonResponse(projects)
