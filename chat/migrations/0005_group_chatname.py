# Generated by Django 4.1.3 on 2023-09-24 13:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0004_rename_chatname_group_uuid'),
    ]

    operations = [
        migrations.AddField(
            model_name='group',
            name='chatname',
            field=models.CharField(blank=True, max_length=50),
        ),
    ]
