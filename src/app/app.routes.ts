import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NewsComponent } from './pages/news/news.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { AIResourcesComponent } from './pages/ai-resources/ai-resources.component';
import { AboutComponent } from './pages/about/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'news', component: NewsComponent },
  { path: 'courses', component: CoursesComponent },
  { path: 'ai-resources', component: AIResourcesComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];
