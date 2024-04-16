import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDetailsComponent } from './album-detail.component';

describe('AlbumDetailComponent', () => {
  let component: AlbumDetailsComponent;
  let fixture: ComponentFixture<AlbumDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlbumDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlbumDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
