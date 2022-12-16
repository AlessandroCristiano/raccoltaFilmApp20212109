import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { utente } from 'src/app/model/utente';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private userLoggedSubject$: BehaviorSubject<utente | null> = new BehaviorSubject<utente | null>(null);

  login(loginForm: utente): Observable<utente> {
    this.setUserLogged(loginForm);
    return of({ username: loginForm.username, token: '123456' });
    //return this.http.post<utente>("login", JSON.stringify(loginForm));
  }

  setUserLogged(utente: utente | null) {
    this.userLoggedSubject$.next(utente);
  }

  getUserLogged(): Observable<utente | null> {
    return this.userLoggedSubject$.asObservable();
  }

  isLoggedIn(): boolean {
    return this.userLoggedSubject$.value ? !!this.userLoggedSubject$.value.token : false;
  }

  getUserToken(): string | null {
    return this.userLoggedSubject$.value ? this.userLoggedSubject$.value.token : null;
  }

  logout() {
    this.setUserLogged(null);
  }

}
