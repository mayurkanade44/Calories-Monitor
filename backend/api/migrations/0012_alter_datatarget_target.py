# Generated by Django 3.2.4 on 2021-07-04 07:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0011_alter_datatarget_target'),
    ]

    operations = [
        migrations.AlterField(
            model_name='datatarget',
            name='target',
            field=models.IntegerField(),
        ),
    ]
