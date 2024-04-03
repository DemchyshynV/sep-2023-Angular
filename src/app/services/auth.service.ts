import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ITokens} from "../interfaces/tokens.interface";
import {IAuth} from "../interfaces/auth.interface";
import {Observable, tap} from "rxjs";
import {urls} from "../constants/urls";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly _accessTokenKey = 'access'
  private readonly _refreshTokenKey = 'refresh'


  constructor(private httpClient: HttpClient) {
  }
  login(user:IAuth):Observable<ITokens>{
    return this.httpClient.post<ITokens>(urls.auth.login, user).pipe(
      tap(tokens=>{
        this._setTokens(tokens)
      })
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

}
