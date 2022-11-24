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
from django.db.models import Q



class OfertaView(APIView):
    parser_classes = (MultiPartParser, FormParser)

    def get(self, request, *args, **kwargs):
        query = request.query_params.get('keyword')
        if query == None:
            query = ''
        
        ofertas = Oferta.objects.distinct().filter(
        Q(categoria__nombre__icontains=query) |
        Q(nombre__icontains=query)).order_by('-createdAt')
        page = request.query_params.get('page')
        paginator = Paginator(ofertas, 5)

        try:
            ofertas = paginator.page(page)
        except PageNotAnInteger:
            ofertas = paginator.page(1)
        except EmptyPage:
            ofertas = paginator.page(paginator.num_pages)

        if page == None:
            page = 1

        page = int(page)
        print('Page:', page, '')
        serializer = OfertaSerializer(ofertas, many=True)
        
        return Response({'ofertas': serializer.data, 'page': page, 'pages': paginator.num_pages})

    def post(self, request, *args, **kwargs):
        ofertas_serializer = OfertaSerializer(data=request.data)
        if ofertas_serializer.is_valid():
            ofertas_serializer.save()
            return Response(ofertas_serializer.data, status=status.HTTP_201_CREATED)
        else:
            print('error', ofertas_serializer.errors)
            return Response(ofertas_serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET'])
def getTopOfertas(request):
    products = Oferta.objects.filter(rating__gte=4).order_by('-rating')[0:5]
    serializer = OfertaSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def getOferta(request, pk):
    product = Oferta.objects.get(_id=pk)
    serializer = OfertaSerializer(product, many=False)
    return Response(serializer.data)


@api_view(['POST'])
@permission_classes([IsAdminUser])
def createOferta(request):
    user = request.user

    oferta = Oferta.objects.create(
        user=user,
        nombre='Sample Name',
        price=0,
        brand='Sample Brand',
        countInStock=0,
        category='Sample Category',
        description=''
    )

    serializer = OfertaSerializer(oferta, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
@permission_classes([IsAdminUser])
def updateOferta(request, pk):
    data = request.data
    oferta = Oferta.objects.get(_id=pk)

    oferta.name = data['name']
    oferta.price = data['price']
    oferta.brand = data['brand']
    oferta.countInStock = data['countInStock']
    oferta.category = data['category']
    oferta.description = data['description']

    oferta.save()

    serializer = OfertaSerializer(oferta, many=False)
    return Response(serializer.data)


@api_view(['DELETE'])
@permission_classes([IsAdminUser])
def deleteOferta(request, pk):
    oferta = Oferta.objects.get(_id=pk)
    oferta.delete()
    return Response('Oferta Eliminada')


@api_view(['POST'])
def uploadImage(request):
    data = request.data

    oferta_id = data['product_id']
    oferta = Oferta.objects.get(_id=oferta_id)

    oferta.image = request.FILES.get('image')
    oferta.save()

    return Response('Image was uploaded')


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def createOfertaReview(request, pk):
    user = request.user
    oferta = Oferta.objects.get(_id=pk)
    data = request.data

    # 1 - Review already exists
    alreadyExists = oferta.review_set.filter(user=user).exists()
    if alreadyExists:
        content = {'detail': 'ya calificaste esta oferta'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    # 2 - No Rating or 0
    elif data['rating'] == 0:
        content = {'detail': 'Porfavor ingresa una puntuacion'}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    # 3 - Create review
    else:
        review = Review.objects.create(
            user=user,
            oferta=oferta,
            name=user.first_name,
            rating=data['rating'],
            comment=data['comment'],
        )

        reviews = oferta.review_set.all()
        oferta.numReviews = len(reviews)

        total = 0
        for i in reviews:
            total += i.rating

        oferta.rating = total / len(reviews)
        oferta.save()

        return Response('Review Added')