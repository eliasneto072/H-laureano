from django.contrib import admin
from .models import *
from django.contrib.auth.models import Group
from django.utils.html import format_html

admin.site.unregister(Group)

# Changing the header
admin.site.site_header = 'Administração Laureano'

# Register the fields
@admin.register(Medico)
class MedicoAdmin(admin.ModelAdmin):
    list_display = ('Nome', 'Especialidade')
    ordering = ('Especialidade',)
    search_fields = ('Nome', )
    list_filter = ('Especialidade', )

@admin.register(Diretoria)
class DiretoriaAdmin(admin.ModelAdmin):
    def FotoDiretoria_preview(self, obj):
         return format_html(
            f"<img src='{obj.FotoDiretoria.url}' width='{obj.FotoDiretoria.width}' height='{obj.FotoDiretoria.height}' style=''/>")
    readonly_fields = ['FotoDiretoria_preview']
    list_display = ('NomeDiretoria', 'CargoDiretoria')
    search_fields = ('NomeDiretoria', 'CargoDiretoria')

@admin.register(Convenio)
class ConvenvioAdmin(admin.ModelAdmin):
    def FotoCovenio_preview(self, obj):
         return format_html(
            f"<img src='{obj.FotoCovenio.url}' width='{obj.FotoCovenio.width}' height='{obj.FotoCovenio.height}' style=''/>")
    readonly_fields = ['FotoCovenio_preview']
    search_fields = ('NomeConvenio',)


@admin.register(Parceiros)
class ParceirosAdmin(admin.ModelAdmin):
    def FotoParceiro_preview(self, obj):
         return format_html(
            f"<img src='{obj.FotoParceiro.url}' width='{obj.FotoParceiro.width}' height='{obj.FotoParceiro.height}' style=''/>")
    readonly_fields = ['FotoParceiro_preview']
    search_fields = ('NomeParceiro',)

@admin.register(Noticia)
class NoticiaAdmin(admin.ModelAdmin):
    def Imagem_preview(self, obj):
         return format_html(
            f"<img src='{obj.Imagem.url}' width='{obj.Imagem.width}' height='{obj.Imagem.height}' style=''/>")
    readonly_fields = ['Imagem_preview']
    list_display = ('Titulo', 'Subtitulo')
    search_fields = ('Titulo',)

@admin.register(Premio)
class PremioAdmin(admin.ModelAdmin):
    def Imagem_preview(self, obj):
         return format_html(
            f"<img src='{obj.FotoPremio.url}' width='{obj.FotoPremio.width}' height='{obj.FotoPremio.height}' style=''/>")
    readonly_fields = ['Imagem_preview']
    list_display = ('NomePremio', 'FotoPremio')
    search_fields = ('NomePremio',)

@admin.register(Banner)
class BannerAdmin(admin.ModelAdmin):
    def Imagem_preview(self, obj):
         return format_html(
            f"<img src='{obj.FotoBanner.url}' width='{obj.FotoBanner.width}' height='{obj.FotoBanner.height}' style=''/>")
    readonly_fields = ['Imagem_preview']
    list_display = ('NomeBanner', 'FotoBanner')
    search_fields = ('NomeBanner',)

@admin.register(Transparencia)
class TransparenciaAdmin(admin.ModelAdmin):
    list_display = ('NomeTransparencia', 'PdfTransparencia', 'DataTransparencia')
    search_fields = ('NomeTransparencia',)
    