import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumRegisterComponent } from './album-register.component';

describe('AlbumRegisterComponent', () => {
  let component: AlbumRegisterComponent;
  let fixture: ComponentFixture<AlbumRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumRegisterComponent]
    });
    fixture = TestBed.createComponent(AlbumRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
