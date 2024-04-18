import { Routes } from '@angular/router';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { CompanyListComponent } from './company-list/company-list.component';
export const routes: Routes = [

    {path: '', redirectTo: 'company', pathMatch:"full"},
    {path: 'company', component:CompanyListComponent},
    {path:'company/:id', component:CompanyDetailComponent},



];
