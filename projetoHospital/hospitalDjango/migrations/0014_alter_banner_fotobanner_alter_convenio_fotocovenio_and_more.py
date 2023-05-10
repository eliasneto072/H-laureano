# Generated by Django 4.0.4 on 2022-05-23 17:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hospitalDjango', '0013_transparencia_datatransparencia'),
    ]

    operations = [
        migrations.AlterField(
            model_name='banner',
            name='FotoBanner',
            field=models.ImageField(blank=True, null=True, upload_to='images/Banner'),
        ),
        migrations.AlterField(
            model_name='convenio',
            name='FotoCovenio',
            field=models.ImageField(blank=True, null=True, upload_to='images/Convenio'),
        ),
        migrations.AlterField(
            model_name='diretoria',
            name='FotoDiretoria',
            field=models.ImageField(blank=True, null=True, upload_to='images/Diretoria'),
        ),
        migrations.AlterField(
            model_name='noticia',
            name='Imagem',
            field=models.ImageField(blank=True, null=True, upload_to='images/Noticia'),
        ),
        migrations.AlterField(
            model_name='parceiros',
            name='FotoParceiro',
            field=models.ImageField(null=True, upload_to='images/parceiro'),
        ),
        migrations.AlterField(
            model_name='premio',
            name='FotoPremio',
            field=models.ImageField(blank=True, null=True, upload_to='images/Premio'),
        ),
        migrations.AlterField(
            model_name='transparencia',
            name='PdfTransparencia',
            field=models.FileField(blank=True, null=True, upload_to='pdf/'),
        ),
    ]
