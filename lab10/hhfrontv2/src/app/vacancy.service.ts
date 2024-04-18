import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Vacancy } from "./models";
import { Observable, retry } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class VacancyService
{
    constructor(private client : HttpClient, 
                private vacancyService: VacancyService){}

    getVacancyDetail(id:number) : Observable<Vacancy>
    {
        return this.client.get<Vacancy>(`http://localhost:4200/api/vacancies/${id}/`)
       
    }
}

