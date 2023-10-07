import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  showFooter: boolean = true;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log("estou aqui no footer");
    console.log(this.router.url);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        // Verifique a rota atual
        const isLoginPage = this.activatedRoute.snapshot.url[0]?.path === 'login';
        const isLandingPage = this.activatedRoute.snapshot.url[0]?.path === '';

        // Defina showFooter com base nas condições
        this.showFooter = !isLoginPage && !isLandingPage;
      }
    });
  }

}
