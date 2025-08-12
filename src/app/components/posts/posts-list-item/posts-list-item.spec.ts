import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListItem } from './posts-list-item';

describe('PostsListItem', () => {
  let component: PostsListItem;
  let fixture: ComponentFixture<PostsListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsListItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsListItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
