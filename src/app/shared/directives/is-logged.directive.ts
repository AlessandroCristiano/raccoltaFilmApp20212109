import { Directive, ElementRef, Input } from '@angular/core';
import { AuthService } from 'src/app/core/auth/auth.service';

@Directive({
  selector: '[isLogged]'  //il nome di questa deve essere uguale a sotto
})
export class IsLoggedDirective {

  @Input() set isLogged(isLoggedIn: boolean){
    if(!isLoggedIn){
      this.elementRef.nativeElement.style.display='none';
    }else{
      this.elementRef.nativeElement.style.display='block';
    }
  }

  constructor(private elementRef: ElementRef) { }

}
