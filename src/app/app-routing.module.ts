import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InitialScreenComponent } from './initial-screen/initial-screen.component';

const routes: Routes = [
  { path: 'album-saves', component: InitialScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  // teste
}
