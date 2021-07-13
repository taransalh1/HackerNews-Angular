import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryCommentViewComponent } from './story-comment-view.component';

describe('StoryCommentViewComponent', () => {
  let component: StoryCommentViewComponent;
  let fixture: ComponentFixture<StoryCommentViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryCommentViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryCommentViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
