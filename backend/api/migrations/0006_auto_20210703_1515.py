# Generated by Django 3.2.4 on 2021-07-03 09:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0005_datatarget'),
    ]

    operations = [
        migrations.AddField(
            model_name='data',
            name='target',
            field=models.IntegerField(null=True),
        ),
        migrations.DeleteModel(
            name='DataTarget',
        ),
    ]
