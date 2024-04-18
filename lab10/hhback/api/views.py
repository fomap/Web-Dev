from django.shortcuts import render
from rest_framework import generics, status
from api.models import Company, Vacancy
from api.serializers import CompanySerializer, VacancySerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response

@api_view(['GET'])  
def get_company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

class CompanyDetail(generics.RetrieveAPIView):
    companies = Company.objects.all()
    serializer = CompanySerializer

class VacancyDetail(generics.RetrieveAPIView):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer

class VacancyList(generics.ListAPIView):
    vacancies = Vacancy.objects.all()
    serializer = VacancySerializer

class CompanyVacancyList(generics.ListAPIView):
    serializer = VacancySerializer

    def select(self):
        company_id = self.kwargs['pk']
        return Vacancy.objects.filter(company_id=company_id)
    
class TopVacancies(generics.ListAPIView):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer
