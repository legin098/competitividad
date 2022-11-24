from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Empresa(models.Model):
    usuario = models.OneToOneField(User, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=200)
    lat = models.CharField(max_length=255)
    lon = models.CharField(max_length=255)
    razon_social = models.CharField(max_length=255)
    nit = models.CharField(max_length=25)
    logo = models.ImageField(null=True, blank=True,
                              default='/placeholder.png')

    def __str__(self):
        return self.nombre

class SocialMediaUrl(models.Model):
    nombre =  models.CharField(max_length=200)
    url = models.CharField(max_length=500)
    empresa = models.ForeignKey(Empresa, on_delete=models.CASCADE)

    def __str__(self):
        return self.nombre

class Oferta(models.Model):
    empresa = models.ForeignKey(Empresa, on_delete=models.SET_NULL, null=True)
    nombre = models.CharField(max_length=200, null=True, blank=True)
    imagen = models.ImageField(null=True, blank=True,
                              default='/placeholder.png')
    description = models.TextField(null=True, blank=True)
    rating = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    precio = models.DecimalField(
        max_digits=7, decimal_places=2, null=True, blank=True)
    descuento = models.IntegerField(max_length=2)
    createdAt = models.DateTimeField(auto_now_add=True)
    end_date = models.DateField()
    categoria = models.ManyToManyField('Categoria', blank=True)
    _id = models.AutoField(primary_key=True, editable=False)


    def __str__(self):
        return self.nombre


class Review(models.Model):
    oferta = models.ForeignKey(Oferta, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    nombre = models.CharField(max_length=200, null=True, blank=True)
    rating = models.IntegerField(null=True, blank=True, default=0)
    comment = models.TextField(null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return str(self.rating)

class Categoria(models.Model):
    nombre = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nombre

