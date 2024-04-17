import { Component, OnInit } from '@angular/core';
import { Albums } from '../../models';
import { ALBUMS } from '../../database';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {

  albums!: Albums[];
  loaded: boolean = false;
  newAlbum: Albums;
  lastId = 100;


  constructor(private albumService: AlbumService)
  {
    this.newAlbum = {
      userId: 10,
      id: this.lastId,
      title: "",
    };
  }

  ngOnInit(): void {
    // this.getAlbums();
    this.albumService.getAlbums().subscribe(album =>{
      this.albums = album;
      // console.log(album);
    })
  }


  addAlbum()
  {
    this.albumService.createAlbum(this.newAlbum).subscribe(post=>{
      this.albums.push(this.newAlbum);
      this.newAlbum = {} as Albums;
    })
  }


  deleteAlbum(id: number)
  {
      this.albumService.deleteAlbum(id).subscribe(() =>{
      this.albums = this.albums.filter(p => p.id !== id);
      this.lastId -= 1;
    });
  }


}
