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
            f"<img src='{obj.FotoDiretoria.url}' width='300' style=''/>")
    readonly_fields = ['FotoDiretoria_preview']
    list_display = ('NomeDiretoria', 'CargoDiretoria')
    search_fields = ('NomeDiretoria', 'CargoDiretoria')

@admin.register(Convenio)
class ConvenvioAdmin(admin.ModelAdmin):
    def FotoCovenio_preview(self, obj):
         return format_html(
            f"<img src='{obj.FotoCovenio.url}' width='300' style=''/>")
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
            f"<img src='{obj.Imagem.url}' width='500' style=''/>")
    readonly_fields = ['Imagem_preview']
    list_display = ('Titulo', 'Subtitulo', 'Data')
    search_fields = ('Titulo',)

@admin.register(Premio)
class PremioAdmin(admin.ModelAdmin):
    def Imagem_preview(self, obj):
         return format_html(
            f"<img src='{obj.FotoPremio.url}' width='300' style=''/>")
    readonly_fields = ['Imagem_preview']
    list_display = ('NomePremio', 'FotoPremio')
    search_fields = ('NomePremio',)

@admin.register(Banner)
class BannerAdmin(admin.ModelAdmin):
    def Imagem_preview(self, obj):
         return format_html(
            f"<img src='{obj.FotoBanner.url}' width='500' style=''/>")
    readonly_fields = [('Imagem_preview')]
    list_display = ('NomeBanner', 'Posicao')
    search_fields = ('NomeBanner',)

@admin.register(Transparencia)
class TransparenciaAdmin(admin.ModelAdmin):
    list_display = ('NomeTransparencia', 'PdfTransparencia', 'DataTransparencia')
    search_fields = ('NomeTransparencia',)

@admin.register(DiretoriaExecutiva)
class DiretoriaExecutivaAdmin(admin.ModelAdmin):
    def FotoDiretorExecutivo_preview(self, obj):
         return format_html(
            f"<img src='{obj.FotoDiretorExecutivo.url}' width='300' style=''/>")
    readonly_fields = ['FotoDiretorExecutivo_preview']
    list_display = ('NomeDiretorExecutivo', 'CargoDiretorExecutivo')
    search_fields = ('NomeDiretorExecutivo', 'CargoDiretorExecutivo')

@admin.register(ConselhoDeliberativo)
class ConselhoDeliberativoAdmin(admin.ModelAdmin):
    def FotoConselho_preview(self, obj):
         return format_html(
            f"<img src='{obj.FotoConselho.url}' width='{obj.FotoConselho.width}' height='{obj.FotoConselho.height}' style=''/>")
    readonly_fields = ['FotoConselho_preview']
    list_display = ('NomeConselho', 'CargoConselho')
    search_fields = ('NomeConselho', 'CargoConselho')

@admin.register(FaleConosco)
class FaleConoscoAdmin(admin.ModelAdmin):
    list_display = ('NomeCompleto', 'Email', 'Telefone', 'Assunto')
    search_fields = ('NomeCompleto', 'Email', 'Telefone', 'Assunto')

@admin.register(Galeria)
class Galeria(admin.ModelAdmin):
    list_display = ('Titulo', 'Categoria', 'Data')
    search_fields = ('Titulo', 'Categoria')
    def FotoGaleria_preview(self, obj):
         return format_html(
            f"<img src='{obj.Foto.url}' width='{obj.Foto.width}' height='{obj.Foto.height}' style=''/>")
    readonly_fields = ['FotoGaleria_preview']

@admin.register(NossaMissao)
class NossaMissao(admin.ModelAdmin):
    list_display = ('Titulo', )

@admin.register(InformacaoRodape)
class InformacaoRodape(admin.ModelAdmin):
    list_display = ('Titulo', )

@admin.register(RedesSociais)
class RedesSociais(admin.ModelAdmin):
    list_display = ('Titulo', )

@admin.register(HistoriaHospital)
class HistoriaHospital(admin.ModelAdmin):
    list_display = ('Titulo', )

@admin.register(Eventos)
class Eventos(admin.ModelAdmin):
    list_display = ('Titulo', 'DataInicio')
    search_fields = ('Titulo', )

@admin.register(Doacao)
class Doacao(admin.ModelAdmin):
    list_display = ('Meio', )
    search_fields = ('Meio', )
    def ImagemDoacao_preview(self, obj):
         return format_html(
            f"<img src='{obj.Imagem.url}' width='300' style=''/>")
    readonly_fields = ['ImagemDoacao_preview']