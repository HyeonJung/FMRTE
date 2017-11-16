import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicregistComponent } from './musicregist.component';

describe('MusicregistComponent', () => {
  let component: MusicregistComponent;
  let fixture: ComponentFixture<MusicregistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicregistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicregistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
