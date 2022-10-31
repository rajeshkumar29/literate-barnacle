import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegpegLiveComponent } from './degpeg-live.component';

describe('DegpegLiveComponent', () => {
  let component: DegpegLiveComponent;
  let fixture: ComponentFixture<DegpegLiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegpegLiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DegpegLiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
