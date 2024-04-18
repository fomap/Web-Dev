import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';

const routes: Routes = [

    {path: '', redirectTo: 'company', pathMatch:"full"},
    {path: 'company', component:CompanyListComponent},
    {path:'company/:id', component:CompanyListComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
