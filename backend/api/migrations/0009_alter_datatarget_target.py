# Generated by Django 3.2.4 on 2021-07-03 17:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0008_auto_20210703_1528'),
    ]

    operations = [
        migrations.AlterField(
            model_name='datatarget',
            name='target',
            field=models.IntegerField(default=0),
        ),
    ]
