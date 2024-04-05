import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ITokens} from "../interfaces/tokens.interface";
import {IAuth} from "../interfaces/auth.interface";
import {BehaviorSubject, Observable, tap} from "rxjs";
import {urls} from "../constants/urls";
import {IUser} from "../interfaces/user.interface";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _accessTokenKey = 'access'
  private readonly _refreshTokenKey = 'refresh'
  private _authUserSubject = new BehaviorSubject<IUser>(null)


  constructor(private httpClient: HttpClient) {
  }

  login(user: IAuth): Observable<ITokens> {
    return this.httpClient.post<ITokens>(urls.auth.login, user).pipe(
      tap(tokens => {
        this._setTokens(tokens)
        this.me().subscribe()
      })
    )
  }

  refresh(): Observable<ITokens> {
    return this.httpClient.post<ITokens>(urls.auth.refresh, {refresh: this.getRefreshToken()}).pipe(
      tap(tokens => this._setTokens(tokens))
    )
  }

  me(): Observable<IUser> {
    return this.httpClient.get<IUser>(urls.auth.me).pipe(
      tap(user => this.setAuthUser(user))
    )
  }

  private _setTokens({access, refresh}: ITokens): void {
    localStorage.setItem(this._accessTokenKey, access)
    localStorage.setItem(this._refreshTokenKey, refresh)
  }

  getAccessToken(): string {
    return localStorage.getItem(this._accessTokenKey)
  }

  getRefreshToken(): string {
    return localStorage.getItem(this._refreshTokenKey)
  }

  deleteTokens(): void {
    localStorage.removeItem(this._refreshTokenKey)
    localStorage.removeItem(this._accessTokenKey)
  }

  setAuthUser(data: IUser): void {
    this._authUserSubject.next(data)
  }

  getAuthUser(): Observable<IUser> {
    return this._authUserSubject.asObservable()
  }

}
