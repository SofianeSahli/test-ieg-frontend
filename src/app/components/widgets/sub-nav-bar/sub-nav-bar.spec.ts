import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNavBar } from './sub-nav-bar';

describe('SubNavBar', () => {
  let component: SubNavBar;
  let fixture: ComponentFixture<SubNavBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubNavBar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubNavBar);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
