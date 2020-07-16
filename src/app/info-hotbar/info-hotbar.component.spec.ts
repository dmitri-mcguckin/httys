import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoHotbarComponent } from './info-hotbar.component';

describe('InfoHotbarComponent', () => {
  let component: InfoHotbarComponent;
  let fixture: ComponentFixture<InfoHotbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfoHotbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoHotbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
