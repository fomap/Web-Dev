import { Component } from '@angular/core';
import { Company } from '../models';
import { CompanyService } from '../company.service';
@Component({
  selector: 'app-company-list',
  standalone: false,

  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent {

  companyList!: Company[];


  constructor(private companyService: CompanyService){}

  ngOnInit(){
    this.companyService.getCompanyList()
    .subscribe(companyList => {
      console.log(companyList);
      
      this.companyList = companyList;
    })
  }


}
