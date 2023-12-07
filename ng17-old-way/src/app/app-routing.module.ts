import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ng-for', loadChildren: () => import('./ng-for/ng-for.module').then(m => m.NgForModule)
  },
  {
    path: 'ng-for-with-if', loadChildren: () => import('./ng-for-with-if/ng-for.module').then(m => m.NgForModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
