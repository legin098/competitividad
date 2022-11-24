from django.urls import path
from base.views import empresas_views as views

urlpatterns = [
    path('oferta/', views.OfertaView.as_view(),name= 'ofertas_list'),
]