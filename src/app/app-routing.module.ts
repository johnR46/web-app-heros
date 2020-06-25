import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./menu/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'authorization',
    loadChildren: () =>
      import('./menu/authorization/authorization.module').then(
        (m) => m.AuthorizationModule
      ),
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./menu/error/error.module').then((m) => m.ErrorModule),
  },

  {
    path: 'feature',
    loadChildren: () =>
      import('./menu/feature/feature.module').then((m) => m.FeatureModule),
  },

  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
