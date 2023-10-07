import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { InitialScreenComponent } from './initial-screen/initial-screen.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: InitialScreenComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
