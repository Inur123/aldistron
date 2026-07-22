import { Routes } from '@angular/router';
import { HttpStatusListComponent } from './ui/http-status-list/http-status-list.component';

export const HTTP_STATUS_ROUTES: Routes = [
  {
    path: '',
    component: HttpStatusListComponent
  }
];
