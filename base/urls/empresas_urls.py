from django.urls import path
from base.views import empresas_views as views

urlpatterns = [
    path('', views.OfertaView.as_view(),name= 'ofertas_list'),

    path('create/', views.createOferta, name="oferta-create"),
    path('upload/', views.uploadImage, name="image-upload"),

    path('<str:pk>/reviews/', views.createOfertaReview, name="create-review"),
    path('top/', views.getTopOfertas, name='top-ofertas'),
    path('<str:pk>/', views.getOferta, name="oferta"),

    path('update/<str:pk>/', views.updateOferta, name="oferta-update"),
    path('delete/<str:pk>/', views.deleteOferta, name="oferta-delete"),
]