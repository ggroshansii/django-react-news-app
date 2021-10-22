from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from .serializers import ProfileSerializer
from .models import Profile


# Create your views here.

class ProfileCreateAPIView(generics.ListCreateAPIView):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()

    def perform_create(self, serializer):
        profile = Profile.objects.filter(user=self.request.user)
        if not profile.exists():
            serializer.save(user=self.request.user)
        else:
            # import pdb; pdb.set_trace();
            return Response(data={'detail': 'This user already has a profile'})

