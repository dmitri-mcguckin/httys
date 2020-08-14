import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackPane } from './attacks.component';

describe('AttackPane', () => {
  let component: AttackPane;
  let fixture: ComponentFixture<AttackPane>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttackPane ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackPane);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
