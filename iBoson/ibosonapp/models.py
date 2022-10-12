from django.db import models

# Create your models here.

class Options(models.Model):
    option = models.CharField(max_length=50)

    def __str__(self):
        return self.option

class Divone(models.Model):
    option = models.OneToOneField(
        Options,
        on_delete=models.CASCADE,
        primary_key=True,
    )

    def __str__(self):
        return self.option.option

class Divtwo(models.Model):
    option = models.OneToOneField(
        Options,
        on_delete=models.CASCADE,
        primary_key=True,
    )

    def __str__(self):
        return self.option.option
