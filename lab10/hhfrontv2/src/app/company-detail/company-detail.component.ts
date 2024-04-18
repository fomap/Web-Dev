import { Component } from '@angular/core';
import { Company, Vacancy } from '../models';
import { CompanyService,  } from '../company.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-company-detail',
  standalone: false,
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css'
})
export class CompanyDetailComponent {

  company!:Company;
  vacancies!: Vacancy[];

  constructor(private companyService: CompanyService, private route: ActivatedRoute){}

  ngOnInit(){
    const companyId = Number(this.route.snapshot.paramMap.get('id'));
    this.companyService.getCompanyDetail(companyId)
    .subscribe(company =>{
      this.company = company;
    })
    this.companyService.getCompanyVacancyList(companyId)
    .subscribe(vacancies =>{
      this.vacancies = vacancies;
    })
  }


}
