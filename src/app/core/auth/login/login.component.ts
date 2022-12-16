import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { utente } from 'src/app/model/utente';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy{

  errorMessage: string = '';

  utente:utente={username:"",password:"",token:""};

  destroy$: Subject<boolean> = new Subject();

  constructor(private route:Router, private authService:AuthService) { }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {}

  save(loginForm:NgForm):void{
    this.authService.login(loginForm.value).pipe(
      takeUntil(this.destroy$))
    .subscribe(res=>{
      this.route.navigateByUrl("welcome")
    });
  }

}
