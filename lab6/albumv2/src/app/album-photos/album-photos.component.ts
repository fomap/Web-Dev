import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumService } from '../album.service';
import { Albums, Photos } from '../../models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent {
  photos!: Photos[];
  albumId!: number;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService
  ){}

  ngOnInit(){
    this.route.paramMap.subscribe( params => {
      this.albumId = Number(params.get('albumId'));
      
      this.albumService.getPhotosById(this.albumId).subscribe( photos => {
        this.photos = photos;
      })
    })
  }
}
