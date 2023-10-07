import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooterViewService } from './footer-view.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private footerView: FooterViewService) { }

  hiddenFooter: boolean = false;

  ngOnInit(): void {
    this.footerView.mostrarFooter(this.router.url)
    this.footerView.footer.subscribe(
      mostrar => this.hiddenFooter = mostrar
    )
  }

  title = 'album-saves';
  isInitialScreen: boolean = true;
}
