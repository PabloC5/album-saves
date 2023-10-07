import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { InitialScreenComponent } from './initial-screen/initial-screen.component';

const routes: Routes = [
  { path: '', component: InitialScreenComponent },
  // { path: 'album-saves', component: InitialScreenComponent },

  { path: '**', component: FooterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
