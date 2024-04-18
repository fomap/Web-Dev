from django.urls import path

from api.views import get_company_list, CompanyDetail, VacancyDetail, VacancyList, CompanyVacancyList, TopVacancies


urlpatterns = [

    path('companies/', get_company_list, name="get_company_list"),
    path('companies/<int:pk>/', CompanyDetail.as_view(), name='company_detail'),
    path('companies/<int:pk>/vacancies', CompanyVacancyList.as_view(), name="company_vacancy_list"),
    path('vacancies/', VacancyList.as_view(), name="vacancy_list"),
    path('vacancies/<int:pk>/', VacancyDetail.as_view(), name="vacancy_detail"),
    path('vacancies/top/',TopVacancies.as_view(), name="top_vacancies"),

]