# Generated by Django 4.0.4 on 2022-05-23 17:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hospitalDjango', '0015_alter_banner_fotobanner_alter_convenio_fotocovenio_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='noticia',
            name='Imagem',
            field=models.ImageField(blank=True, null=True, upload_to='Noticia'),
        ),
    ]
