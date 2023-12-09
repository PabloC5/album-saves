import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumRegisterComponent } from './album-register/album-register.component';
import { DetailPageComponent } from './detail-page/detail-page.component';
import { FooterComponent } from './footer/footer.component';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from './home/home.component';
import { InitialScreenComponent } from './initial-screen/initial-screen.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  { path: '', component: InitialScreenComponent },
  { 
    path: 'home', 
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'album-register', component: AlbumRegisterComponent },
  {path: 'detail-album/:albumId', component: DetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
