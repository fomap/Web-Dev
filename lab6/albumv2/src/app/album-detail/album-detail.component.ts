import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ALBUMS } from '../../database';
import { Albums, Photos } from '../../models';
import { AlbumService } from '../album.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-album-detail',
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent  implements OnInit{
  album !: Albums;
  newTitle: string = '';

  constructor(private route: ActivatedRoute,
              private albumService: AlbumService
  )
  { 


  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const albumId = Number(params.get("albumId"));
     
     // this.album = ALBUMS.find((album) => album.id === albumId) as Albums;
      this.albumService.getAlbum(albumId).subscribe((album) => {
        this.album = album;
      });
    })
  }

  updateTitle(){
    
    this.album.title = this.newTitle;
    this.newTitle = '';
    this.albumService.updateTitle(this.album).subscribe(album =>{
      console.log('title is updated!');
    })
  }

  getPhotosById(id:number){
    this.albumService.getPhotosById(id).subscribe(photo =>{
      console.log(photo);
      
    })
  }
}
