from django.contrib import admin
from .models import (Empresa,Oferta,Categoria,SocialMediaUrl,Review)

class OfertaAdmin(admin.ModelAdmin):
    fields =['nombre','imagen','description','precio','descuento','end_date','Categoria']
    def save_model(self, request, obj, form, change):
        empresa = Empresa.objects.get(usuario=request.user.id)
        obj.empresa = empresa
        
        return super(OfertaAdmin, self).save_model(request, obj, form, change)
    def get_queryset(self, request):
        empresa = Empresa.objects.get(usuario=request.user.id)
        qs = super().get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(empresa=empresa)

class SocialMediaUrlAdmin(admin.ModelAdmin):
    fields= ['nombre','url']
    def save_model(self, request, obj, form, change):
        empresa = Empresa.objects.get(usuario=request.user.id)
        obj.empresa = empresa
        
        return super(SocialMediaUrlAdmin, self).save_model(request, obj, form, change)
    def get_queryset(self, request):
        empresa = Empresa.objects.get(usuario=request.user.id)
        qs = super().get_queryset(request)
        if request.user.is_superuser:
            return qs
        return qs.filter(empresa=empresa)

# Register your models here.
admin.site.register(Empresa)
admin.site.register(Oferta, OfertaAdmin)
admin.site.register(Categoria)
admin.site.register(SocialMediaUrl, SocialMediaUrlAdmin)
admin.site.register(Review)