import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoComponent } from './components/auto/auto.component';
import { ManualComponent } from './components/manual/manual.component';

const routes: Routes = [
  {
    path: 'auto',
    component: AutoComponent,
  },
  {
    path: 'manual',
    component: ManualComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
