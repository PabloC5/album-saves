import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-button-login',
  templateUrl: './button-login.component.html',
  styleUrls: ['./button-login.component.scss']
})
export class ButtonLoginComponent {

  constructor(private router: Router) {}


  @Input() nameButton: string | undefined;
  @Input() routerName: string | undefined;
  @Input() buttonColor: string | undefined;


  navigateRoutes() {
    this.router.navigate([this.routerName]);
  }


}
