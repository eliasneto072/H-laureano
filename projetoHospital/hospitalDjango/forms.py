from dataclasses import fields
from django import forms
from .models import *

class MedicoForm(forms.ModelForm):
    class Meta:
        model = Medico
        fields = ['Nome', 'Especialidade']

class NoticiaForm(forms.ModelForm):
    class Meta:
        model = Noticia
        fields = ['Titulo', 'Subtitulo', 'Imagem', 'Corpo', 'Detalhes', 'Data']

class ParceirosForm(forms.ModelForm):
    class Meta:
        model = Parceiros
        fields = ['NomeParceiro','FotoParceiro']

class Covenio(forms.ModelForm):
    class Meta:
        model = Convenio
        fields = ['NomeConvenio', 'FotoCovenio']


class FaleConoscoForm(forms.ModelForm):
    class Meta:
        model = FaleConosco
        fields = ['NomeCompleto', 'Email', 'Telefone', 'Assunto', 'Mensagem']
        