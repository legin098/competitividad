from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from base.models import Categoria, Oferta, SocialMediaUrl, Empresa


class OfertaSerializer(serializers.ModelSerializer):
    class Meta:
        model= Oferta
        fields = '__all__'

class SocialMediaUrlSerializer(serializers.ModelSerializer):
    class Meta:
        model= SocialMediaUrl
        fields = '__all__'
class EmpresaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Empresa
        fields = '__all__'