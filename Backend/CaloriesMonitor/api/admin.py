from django.contrib import admin
from .models import Data
# Register your models here.

# admin.site.register(Data)

@admin.register(Data)
class DataModel(admin.ModelAdmin):
    list_display = ('date','meals','calories')