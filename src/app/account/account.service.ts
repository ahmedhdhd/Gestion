import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Address, User } from '../shared/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.apiUrl;
  private currentUserSource = new ReplaySubject<User | null>(1);
  currentUser$ = this.currentUserSource.asObservable();

  constructor(private http: HttpClient, private router: Router) { }
  getToken(): string | null {
    return localStorage.getItem("token");
  }

  getUserIdFromToken(): number | null {
    const token = this.getToken();
    if (token) {
      const tokenPayload = JSON.parse(atob(token.split('.')[0]));
      console.log(tokenPayload.id)
      return tokenPayload.id;  }
    return null;
  }
  /*setuserinlocalstorage(user : User){
    let jsonString: string = JSON.stringify(basket);
    localStorage.setItem("user",user )
  }*/
  loadCurrentUser(token: string | null) {
    if (token == null) {
      this.currentUserSource.next(null);
      return of(null);
    }

    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `Bearer ${token}`);

   const id = this.getUserIdFromToken()
   console.log(id)
    return this.http.get<User>(this.baseUrl + `Users/${id}`, {headers}).pipe(
      map(user => {
        if (user) {
          localStorage.setItem('token', user.token);
          this.currentUserSource.next(user);
          return user;
        } else {
          return null;
        }
      })
    )
  }

login1(values: any) {
    return this.http.post<User>(this.baseUrl + 'account/login', values).pipe(
      map(user => {
        localStorage.setItem('token', user.token);
        this.currentUserSource.next(user);
      })
    )
  }

    login(values: any){
      return this.http.post<User>(this.baseUrl+"Auth/authenticate", values).pipe(
        map(user => {         
        

          localStorage.setItem('token', user.token);
          console.log(user)
          this.currentUserSource.next(user);
          console.log(this.currentUserSource)
        })
      );
    }
  register(values: any) {
    return this.http.post<User>(this.baseUrl + 'Users', values).pipe(
      map(user => {
        localStorage.setItem('token', user.token);
        this.currentUserSource.next(user);
      })
    )
  }

  logout() {
    localStorage.removeItem('token');
    this.currentUserSource.next(null);
    this.router.navigateByUrl('/');
  }

  checkEmailExists(email: string) {
    return this.http.get<boolean>(this.baseUrl + 'Users/checkEmailExists/' + email);
  }

  getUserAddress() {
    return this.http.get<Address>(this.baseUrl + 'account/address');
  }

  updateUserAddress(address: Address) {
    return this.http.put(this.baseUrl + 'account/address', address);
  }
}
