from rest_framework import serializers
from api.models import Vacancy, Company


class VacancySerializer(serializers.ModelSerializer):
    company_id = serializers.IntegerField(source="company.id", read_only=True)
    
    class Meta:
        model = Vacancy
        fields = ['id', 'name', 'description', 'salary', 'company_id']


class CompanySerializer(serializers.Serializer):
    id = serializers.IntegerField()
    name = serializers.CharField()
    description = serializers.CharField()
    city = serializers.CharField()
    adress = serializers.CharField()
