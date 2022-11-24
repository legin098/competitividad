from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from base.models import Categoria, Oferta, SocialMediaUrl, Empresa


class OfertaSerializer(serializers.ModelSerializer):
    class Meta:
        model= Oferta
        fields = '__all__'