# Generated by Django 4.0.4 on 2022-05-20 16:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hospitalDjango', '0006_convenio'),
    ]

    operations = [
        migrations.AddField(
            model_name='convenio',
            name='FotoCovenio',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
