from django.db import models

class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    city = models.CharField(max_length=255)
    adress = models.TextField()

    # class Meta:
    #     usable_name = "company"
    #     usable_names = "companies"

    def __str__(self):
        return self.name
    
    def to_json(self):
        return
        {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'city': self.city,
            'adress': self.adress,

        }


class Vacancy(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    salary = models.FloatField()
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='vacancies')

    # class Meta:
    #     usable_name = "vacancy"
    #     usable_names = "vacancies"


    def __str__(self):
        return self.name
    

    def to_json(self):
        return 
        {
            'id': self.id,
            'name': self.name,
            'description': self.description,
            'salary': self.salary,
            'company_id': self.company.id,
        }


