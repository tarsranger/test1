from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Email
from .serializers import EmailSerializer

def home_view(request):
    return render(request, 'home.html')

@api_view(('GET',))
def emails_list_view(request):
    qs = Email.objects.all()
    serializer = EmailSerializer(qs, many=True)
    return Response(serializer.data)
