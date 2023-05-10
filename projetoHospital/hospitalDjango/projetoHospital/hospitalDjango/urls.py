from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from .views import *

urlpatterns = [
    # Páginas Principais
    path('', viewHome, name='home'),
    path('parceiros/', viewParceiros, name='parceiros'), 
    path('contatos/', viewContato, name='contatos'),
    path('resultado-exame', viewResultadoExame, name="resultado-exame"),
    path('quem-somos', viewquemSomos, name="quem-somos"),
    path('eventos', vieweventos, name="eventos"),
    path('servicos', viewservicos, name="servicos"),
    path('doacao', viewdoacao, name="doacao"),
    path('guia-medico/', viewGuiaMedico, name="guia-medico"),
    path('noticias/', viewNoticia, name='noticias'),
    path('convenio/', viewConvenio, name='convenio'),
    path('diretoria', viewDiretoria, name='diretoria'),
    path('premio', viewPremio, name='premio'),
    path('transparencia', viewTransparencia, name='transparencia'),
    
    # Login
    path('registrar-paciente', viewRegister, name="register-user"),
    path('acesso-paciente', viewLoginUser, name="login-user"),
    path('alterar-senha', viewAlterarSenha, name="alterar-senha"),
    path('sair-da-conta', viewLogout, name="logout-user"),
    ]

if settings.DEBUG:
        urlpatterns += static(settings.MEDIA_URL,
                              document_root=settings.MEDIA_ROOT)
