from django.shortcuts import render
from django.http import JsonResponse
from api.models import Company, Vacancy


def get_company_list(request):
    company_list = [company.to_json() for company in Company.objects.all()]
    return JsonResponse(company_list)


def get_company_by_id(request,company_id):
    try:
        company = Company.objects.filter(id = company_id).first()
        if company is None:
            return JsonResponse({'error': "company not found"}, status=404)
        return JsonResponse(company.to_json())
    except Exception as e:
        return JsonResponse({'error': 'error occured'}, status=500)
    

def get_company_vacancies(request, company_id):
    try:
        vacancy = Vacancy.objects.filter(compant_id=company_id).first()
        if vacancy is None:
            return JsonResponse({'error': 'Vacancy not found in this company'}, status=404)
        vacancies = [v.to_json() for v in Vacancy.objects.filter(company_id=company_id)]
        return JsonResponse(vacancies)
    except Exception as e:
        return JsonResponse({'error': 'error sty'}, status=500)
    

def get_vacancies_list(request):
    vacancy_list = [vacancy.to_json() for vacancy in Vacancy.objects.all()]
    return JsonResponse(vacancy_list)


def get_vacancy_by_id(request, vacancy_id):
    try:
        vacancy = Vacancy.objects.filter(id=vacancy_id).first()
        if vacancy is None:
            return JsonResponse({'error': 'vacancy not found'}, status=404)
        return JsonResponse (vacancy.to_json())
    except Exception as e:
        return JsonResponse({'error':'error occured'}, status=500)
    
def get_vacancy_top(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    vacancies_json = [v.to_json for v in vacancies]
    return JsonResponse(vacancies_json)

