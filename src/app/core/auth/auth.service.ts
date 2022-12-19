import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, switchMap } from 'rxjs';
import { utente } from 'src/app/model/utente';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  private userLoggedSubject$: BehaviorSubject<utente | null> = new BehaviorSubject<utente | null>(null);

  private apiServerForRoles = "http://localhost:8080/api/utente/userInfo";

  private apiServer = "http://localhost:8080/api/auth/login";
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  login(loginForm: utente): Observable<utente> {
    //return of({ username: loginForm.username, token: '123456' });
    return this.http.post<{'jwt-token': string}>(this.apiServer, JSON .stringify(loginForm), this.httpOptions).pipe(
      map(res => { 
        return {username: loginForm.username, token: res['jwt-token'] }
      })
    );
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

  isAdmin(): boolean {
    console.log(this.userLoggedSubject$.value)
   if(this.userLoggedSubject$.value && this.userLoggedSubject$.value.role){
    return this.userLoggedSubject$.value.role?.includes('ROLE_ADMIN');
   }else{
    return false;
   }
  }

  getUserToken(): string | null {
    return this.userLoggedSubject$.value ? this.userLoggedSubject$.value.token : null;
  }

  logout() {
    this.setUserLogged(null);
  }

  roles(): Observable<string[]> {
    return this.http.get<{ roles: string[] }>(this.apiServerForRoles).pipe(
      map(res => res.roles)
    );
  }

}
