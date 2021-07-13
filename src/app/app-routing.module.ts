import { TopStoriesComponent } from './pages/top-stories/top-stories.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './pages/user-detail/user-detail.component';
import { StoryDetailedViewComponent } from './pages/story-detailed-view/story-detailed-view.component';

const routes: Routes = [{
  path: '',
  component: TopStoriesComponent,
},
{
  path: 'user/:id',
  component: UserDetailComponent
},
{
  path: 'story/:id',
  component: StoryDetailedViewComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
