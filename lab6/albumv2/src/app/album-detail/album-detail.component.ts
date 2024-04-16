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
  photos!: Photos[];

  constructor(private route: ActivatedRoute,
              private albumService: AlbumService
  )
  { 


  }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const albumId = Number(params.get("albumId"));
      this.album = ALBUMS.find((album) => album.id === albumId) as Albums;
      this.albumService.getAlbum(albumId).subscribe((album) => {
        this.album = album;
      });
    })
  }

}
