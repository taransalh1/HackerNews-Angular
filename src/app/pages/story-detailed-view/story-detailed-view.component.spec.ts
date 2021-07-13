import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryDetailedViewComponent } from './story-detailed-view.component';

describe('StoryDetailedViewComponent', () => {
  let component: StoryDetailedViewComponent;
  let fixture: ComponentFixture<StoryDetailedViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryDetailedViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryDetailedViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
