from django.db import models
from django.contrib.auth.models import User


class Data(models.Model):
    user = models.ForeignKey(User, null=True, on_delete=models.CASCADE)
    date = models.DateField()
    meals = models.CharField(max_length=100)
    calories = models.IntegerField()

    def __str__(self):
        return str(self.date)


class DataTarget(models.Model):
    user = models.ForeignKey(User, null=True, on_delete=models.CASCADE)
    target = models.IntegerField()

    def __str__(self):
        return str(self.target)