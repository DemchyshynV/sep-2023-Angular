import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {BehaviorSubject, catchError, filter, Observable, switchMap, take, tap, throwError} from 'rxjs';
import {AuthService} from "./services/auth.service";
import {Injectable} from "@angular/core";
import {urls} from "./constants/urls";
import {Router} from "@angular/router";

@Injectable()
export class MainInterceptor implements HttpInterceptor {
  private _isRefreshing = false
  private _waitRefreshListSubject = new BehaviorSubject<string>(null)

  constructor(private authService: AuthService, private router: Router) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const accessToken = this.authService.getAccessToken();

    if (accessToken) {
      req = this._addToken(req, accessToken)
    }

    return next.handle(req).pipe(
      catchError((res: HttpErrorResponse) => {
        if (res && res.error && res.status === 401 && res.url !== urls.auth.login) {
          const refreshToken = this.authService.getRefreshToken();

          if (!this._isRefreshing && refreshToken) {
            return this._handle401Error(req, next)
          }

          if (res.url === urls.auth.refresh) {
            this._isRefreshing = false
            this.authService.deleteTokens()
            this.router.navigate(['auth', 'login'], {queryParams: {sessionExpired: true}})
            return throwError(() => res)
          }

          return this._waitRefreshListSubject.pipe(
            filter(token => token !== null),
            take(1),
            switchMap(token => {
              return next.handle(this._addToken(req, token))
            })
          )
        }
      })
    )

  }

  private _addToken(req: HttpRequest<any>, token: string): HttpRequest<any> {
    return req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    })
  }

  private _handle401Error(req: HttpRequest<any>, next: HttpHandler): any {
    this._isRefreshing = true
    return this.authService.refresh().pipe(
      switchMap(({access}) => {
        this._isRefreshing = false
        this._waitRefreshListSubject.next(access)
        return next.handle(this._addToken(req, access))
      })
    )
  }

}
