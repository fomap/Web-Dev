import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { Albums, Photos } from '../models';
import { ALBUMS } from '../database';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {
  BASE_URL: string = 'https://jsonplaceholder.typicode.com'
  constructor(private client : HttpClient) { 
  }
  
  getAlbums() : Observable<Albums[]>
  {
    return this.client.get<Albums[]>('https://jsonplaceholder.typicode.com/albums');
  }

  getAlbum(id:number) : Observable<Albums>
  {
    return this.client.get<Albums>("https://jsonplaceholder.typicode.com/albums/${id}");
  }


  
  deleteAlbum(id:number){
    return this.client.delete(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
  

  createAlbum(newAlbum : Albums): Observable<Albums>
  {
    return this.client.post<Albums>("https://jsonplaceholder.typicode.com/albums", newAlbum);

  }
  updateTitle(album:Albums){
    return this.client.patch(`https://jsonplaceholder.typicode.com/albums/${album.id}`, album);
  }
  getPhotosById(id:number):Observable<Photos[]>{
    console.log(`https://jsonplaceholder.typicode.com/posts/${id}/photos`);
    return this.client.get<Photos[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }

}
