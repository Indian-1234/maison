from django.db import models

# Create your models here.
class house(models.Model):
    price=models.FloatField()
    sf=models.FloatField()
    location=models.TextField()
    bhk=models.IntegerField()
    # furnished status
    furn_status=models.TextField()
    age_of_prop=models.IntegerField()
    # types of properties
    ty_of_prop=models.TextField()
    gender=models.TextField()
    # image = models.ImageField(blank=True,null=True)
    image1 = models.ImageField(blank=True,null=True)
    image2 = models.ImageField(blank=True,null=True)
    image3 = models.ImageField(blank=True,null=True)
    image4 = models.ImageField(blank=True,null=True)
    image5 = models.ImageField(blank=True,null=True)

    def __str__(self):
         return self.location