import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

const routes: Routes = [
  {
    path: '', component: AboutComponent,
    children: [
      {
        path: '',
        outlet: 'contactus',
        loadChildren: () => import('./contactus/contactus.module').then(m => m.ContactusModule)
      },
      {
        path: '',
        component: ConfirmDialogComponent,
        outlet: 'popup'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
