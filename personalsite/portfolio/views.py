from django.shortcuts import render
from django.http import JsonResponse

from .models import Project


def index(request):
    projects = Project.objects.values('order', 'title', 'description', 'image_name')
    sorted_projects = sorted(projects, key=lambda p: p['order'])
    context = {'projects': sorted_projects}
    return render(request, 'portfolio/index.html', context)


def get_model_data(request):
    projects = {'projects': list(Project.objects.values())}
    return JsonResponse(projects)
