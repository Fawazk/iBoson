# Generated by Django 4.1 on 2022-08-04 05:13

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Options',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('option', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Divtwo',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('option', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='ibosonapp.options')),
            ],
        ),
        migrations.CreateModel(
            name='Divone',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('option', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to='ibosonapp.options')),
            ],
        ),
    ]
