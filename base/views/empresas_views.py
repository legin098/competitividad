from base.serializers.empresa_serializers import OfertaSerializer
from base.models import Oferta, Review, Empresa, SocialMediaUrl
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status
from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger



class OfertaView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        ofertas = Oferta.objects.all()
        serializer = OfertaSerializer(ofertas, many=True)
        return Response(serializer.data)

    def post(self, request, *args, **kwargs):
        ofertas_serializer = OfertaSerializer(data=request.data)
        if ofertas_serializer.is_valid():
            ofertas_serializer.save()
            return Response(ofertas_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', ofertas_serializer.errors)
            return Response(ofertas_serializer.errors, status=status.HTTP_400_BAD_REQUEST)