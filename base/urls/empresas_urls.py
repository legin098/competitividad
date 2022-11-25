from django.urls import path
from base.views import empresas_views as views

urlpatterns = [
    path('', views.GetEmpresas.as_view(), name='empresas_list'),
    
    path('ofertas/', views.OfertaView.as_view(),name= 'ofertas_list'),
    path('social-urls/<str:pk>', views.GetSocialMediaUrls.as_view(), name='social-media-urls'),
    path('reviews/oferta/<str:pk>', views.GetOfertaReviews.as_view(), name='review-list'),
    path('ofertas/empresa/<str:pk>', views.GetOfertasEmpresa.as_view(), name='ofertas-empresa'),
    path('ofertas/create/', views.createOferta, name="oferta-create"),
    path('ofertas/upload/', views.uploadImage, name="image-upload"),

    path('ofertas/<str:pk>/reviews/', views.createOfertaReview, name="create-review"),
    path('ofertas/top/', views.getTopOfertas, name='top-ofertas'),
    path('ofertas/<str:pk>/', views.getOferta, name="oferta"),

    path('ofertas/update/<str:pk>/', views.updateOferta, name="oferta-update"),
    path('ofertas/delete/<str:pk>/', views.deleteOferta, name="oferta-delete"),
    path('<str:pk>/', views.GetEmpresa.as_view(), name= 'empresa')
]