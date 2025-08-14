import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsSections } from './comments-sections';

describe('CommentsSections', () => {
  let component: CommentsSections;
  let fixture: ComponentFixture<CommentsSections>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommentsSections]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentsSections);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
