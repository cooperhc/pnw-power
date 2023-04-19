import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisComponent } from './vis/vis.component';

const routes: Routes = [
  { path: '', component: VisComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
