# Generated by Django 3.2.8 on 2021-10-24 18:09

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0008_article_status'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='popularity_score',
            field=models.IntegerField(default=0),
        ),
    ]
