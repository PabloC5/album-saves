import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterViewService {
  
  footer = new EventEmitter<boolean>();


  constructor() { }

  mostrarFooter(route: string) {
    debugger
    if (route != '/') {
      this.footer.emit(true);
    }
  }
}
