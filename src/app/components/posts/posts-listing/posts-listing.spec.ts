import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListing } from './posts-listing';

describe('PostsListing', () => {
  let component: PostsListing;
  let fixture: ComponentFixture<PostsListing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostsListing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostsListing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
