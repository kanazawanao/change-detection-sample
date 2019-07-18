import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { Sample2Component } from './sample2/sample2.component';

const routes: Routes = [
  { path: 'sample', component: SampleComponent },
  { path: 'sample2', component: Sample2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
