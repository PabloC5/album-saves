import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { FooterViewService } from './services/footer-view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private footerView: FooterViewService) { }

  hiddenFooter: boolean = false;
  urlAtual: string = '';
  urlAnterior: string = '';

  ngOnInit(): void {
    this.router.events.subscribe((e: any) => {
      if (e instanceof NavigationEnd) {
        this.urlAnterior = this.urlAtual;
        this.urlAtual = e.url;
        this.footerView.mostrarFooter(this.urlAtual)
      }
    });
    this.footerView.footer.subscribe(
      mostrar => this.hiddenFooter = mostrar
    )
  }

  title = 'album-saves';
  isInitialScreen: boolean = true;
}
