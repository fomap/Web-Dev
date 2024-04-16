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



  constructor(private albumService: AlbumService)
  {
    this.newAlbum = {
      userId: 10,
      id: 0,
      title: "",
    };
  }

  ngOnInit(): void {
    this.getAlbums();
  }


  addAlbums()
  {
    this.albumService.createAlbum(this.newAlbum).subscribe( (album) => {
      this.newAlbum.id = this.newAlbum.id + 1;
      this.albums.push(album);
    });
  }

  getAlbums()
  {
    // this.albums = ALBUMS;
    this.loaded = false;
    this.albumService.getAlbums().subscribe((albums) => {
      this.albums = albums;
      this.loaded = true;
    });

  }

  deleteAlbum(id: number)
  {
    this.albums = this.albums.filter( (p) => p.id !== id);
    this.albumService.deleteAlbum(id).subscribe(() =>
    {
      console.log("deleted");
    });
  }


}
