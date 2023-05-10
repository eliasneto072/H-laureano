from django.db import models


# Create your models here.


class Medico(models.Model):
    Nome = models.CharField(max_length=100) 
    Especialidade = models.CharField(max_length=50)
    def __str__(self):
        return self.Nome

class Noticia(models.Model):
    Titulo = models.CharField(max_length=100)
    Subtitulo = models.CharField(max_length=100)
    Imagem = models.ImageField(upload_to='Noticia',null=True, blank=True)
    Corpo = models.TextField()
    Detalhes = models.TextField(null=True, blank=True)
    def __str__(self):
        return self.Titulo

class Parceiros(models.Model):
    NomeParceiro = models.CharField(max_length=50)
    FotoParceiro = models.ImageField(upload_to='parceiro', null=True)
    def __str__(self):
        return self.NomeParceiro

class Convenio(models.Model):
    NomeConvenio = models.CharField(max_length=100)
    FotoCovenio = models.ImageField(upload_to='Convenio', null=True, blank=True)
    def __str__(self):
        return self.NomeConvenio

class Diretoria(models.Model):
    NomeDiretoria = models.CharField(max_length=100)
    CargoDiretoria = models.CharField(max_length=50)
    FotoDiretoria = models.ImageField(upload_to='Diretoria', null=True, blank=True)
    def __str__(self):
        return self.NomeDiretoria

class Premio(models.Model):
    NomePremio = models.CharField(max_length=100)
    FotoPremio = models.ImageField(upload_to='Premio', null=True, blank=True)
    def __str__(self):
        return self.NomePremio

class Banner(models.Model):
    NomeBanner = models.CharField(max_length=100)
    FotoBanner = models.ImageField(upload_to='Banner', null=True, blank=True)
    def __str__(self):
        return self.NomeBanner

class Transparencia(models.Model):
    NomeTransparencia = models.CharField(max_length=100)
    PdfTransparencia = models.FileField(upload_to='pdf/', null=True, blank=True)
    DataTransparencia = models.DateField(null=True, blank=True)
    def __str__(self):
        return self.NomeTransparencia