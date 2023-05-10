from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from .views import *

urlpatterns = [
    # Páginas Principais
    path('', viewHome, name='home'),
    path('parceiros/', viewParceiros, name='parceiros'),
    path('eventos', vieweventos, name="eventos"),
    path('doacao', viewdoacao, name="doacao"),
    path('guia-medico/', viewGuiaMedico, name="guia-medico"),
    path('convenio/', viewConvenio, name='convenio'),
    path('transparencia', viewTransparencia, name='transparencia'),

    # Notícias
    path("noticias/<int:id>/", viewDetailNoticia, name = "detail-noticias"),
    path('noticias/', viewNoticia, name='noticias'),

    # Serviços
    path('servicos/consultas', viewConsultas, name="consultas"),
    path('servicos/exames', viewExames, name="exames"),
    path('servicos/resultado-exame', viewResultadoExame, name="resultado-exame"),
    path('servicos/telemedicina', viewTelemedicina, name="telemedicina"),
    
    # Quem Somos
    path('quem-somos/historia-hospital', viewHistoriaHospital, name="historiaHospital"),
    path('quem-somos/diretoria-hospital', viewDiretoriaHospital, name='diretoriaHospital'),
    path('quem-somos/nossa-missao', viewNossaMissao, name='nossaMissao'),    
    path('quem-somos/historia-fundacao', viewHistoriaFundacao, name='historiaFundacao'),    
    path('quem-somos/diretoria-fundacao', viewDiretoriaFundacao, name='diretoriaFundacao'),
    path('quem-somos/galeria', viewGaleria, name = "galeria"),

    # Fale Conosco
    path('fale-conosco/ouvidoria', viewOuvidoria, name='ouvidoria'),
    path('fale-conosco/pesquisa-de-satisfacao', PesquisaSatisfacao, name='pesquisaSatisfacao'),
    path('fale-conosco/seja-um-residente', viewSejaumResidente, name='sejaResidente'),
    path('fale-conosco/trabalhe-conosco', viewTrabalheConosco, name='trabalheConosco'),
    
    # Login
    path('registrar-paciente', viewRegister, name="register-user"),
    path('acesso-paciente', viewLoginUser, name="login-user"),
    path('alterar-senha', viewAlterarSenha, name="alterar-senha"),
    path('sair-da-conta', viewLogout, name="logout-user"),
    ]

if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL,
                              document_root=settings.MEDIA_ROOT)
