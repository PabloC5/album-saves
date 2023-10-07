import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterViewService {
  
  footer = new EventEmitter<boolean>();


  constructor() { }

  mostrarFooter(route: string) {
    if (route == '/') {
      this.footer.emit(true);
    }
  }
}
