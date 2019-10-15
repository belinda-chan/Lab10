import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteactormoviesComponent } from './deleteactormovies.component';

describe('DeleteactormoviesComponent', () => {
  let component: DeleteactormoviesComponent;
  let fixture: ComponentFixture<DeleteactormoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteactormoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteactormoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
