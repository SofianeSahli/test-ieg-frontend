import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersLists } from './users-lists';

describe('UsersLists', () => {
  let component: UsersLists;
  let fixture: ComponentFixture<UsersLists>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersLists]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsersLists);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
