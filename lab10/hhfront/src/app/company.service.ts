import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Vacancy, Company } from "./models";
import { Observable, retry } from 'rxjs';



@Injectable({
    providedIn: 'root'
})

export class CompanyService {
    
    BASE_URL = 'http://localhost:8000/api/companies/'
    constructor(private client: HttpClient) { }

    getCompanyList():Observable<Company[]>{
        return this.client.get<Company[]>(this.BASE_URL);
      }
    
    getCompanyDetail(company_id:number): Observable<Company>{
    return this.client.get<Company>(`${this.BASE_URL}${company_id}/`);
    }

    getCompanyVacancyList(company_id:number):Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(this.BASE_URL + company_id + '/vacancies/');
    }






}