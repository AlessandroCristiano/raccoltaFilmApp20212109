import { Directive, ElementRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/core/auth/auth.service';

@Directive({
  selector: '[appIfRoles]'
})
export class IfRolesDirective {


  constructor(
    private rolesService: AuthService, private elementRef: ElementRef
  ) {
    if(!this.rolesService.isAdmin()){
      this.elementRef.nativeElement.style.display='none';
    }else{
      this.elementRef.nativeElement.style.display='block';
    }
  }

  public ngOnInit(): void {
    
  }

}
