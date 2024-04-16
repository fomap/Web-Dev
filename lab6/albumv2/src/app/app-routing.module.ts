import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailComponent } from './album-detail/album-detail.component';

const routes: Routes = [
  {path : '', redirectTo: 'home', pathMatch: "full"},
  {path : "home", component : HomeComponent, title: "Home"},
  {path : "about", component: AboutComponent, title: "About"},
  {path: "albums", component: AlbumsComponent, title: "Albums" },
  {path : "albums/:albumId", component: AlbumDetailComponent, title: "Album Detail"},
  {path : "albums/:albumId/photoId", component: AlbumDetailComponent, title: "photos Detail"},
  {path: '**', component: NotFoundComponent, title: "Not Found"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
