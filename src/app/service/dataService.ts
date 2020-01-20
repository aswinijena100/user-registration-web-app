import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpErrorResponse, HttpResponse, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap, finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from "@angular/router";
import { ConnectionService } from 'ng-connection-service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'

  })
};

const imageHttpOptions = {
  headers: new HttpHeaders({
    // 'Content-Type': 'multipart/form-data'
  })
}
@Injectable()
export class DataService {

  // baseUrl = 'http://localhost:8080/safetherapeutics/';  //local server URL to web api

  // baseUrl = 'http://http://172.246.126.44:8080/safetherapeutics/';  //QA server URL to web api
  baseUrl = 'http://3.130.105.203:8080/safetherapeutics/';  //UAT server URL to web api
  serviceUrl: string;
  count: number = 0;
  headersFromService: {};
  constructor(private connectionService: ConnectionService, private router: Router, private http: HttpClient, private spinner: NgxSpinnerService) { }

  HttpPostRequest(bodydata: any, urlpath: string, headers: string): Observable<any> {
    this.spinner.show();
    this.serviceUrl = '';
    this.serviceUrl = this.baseUrl + urlpath;
    httpOptions.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      'Cache-Control': 'no-cache',
      'Pragma': 'no-cache',
    })
    if (headers != '' && headers != 'undefined' && headers != undefined) {
      this.headersFromService = JSON.parse(headers);
      if (Object.keys(this.headersFromService).length > 0) {
        for (let key in this.headersFromService) {
          let value = this.headersFromService[key];
          httpOptions.headers = httpOptions.headers.append(key, value)
        }
      }
    }
    return this.http.post<any>(this.serviceUrl, bodydata, httpOptions)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          if (err.status == 0) {
            this.connectionService.monitor().subscribe(isConnected => {
              console.log(isConnected)
              if (!isConnected) {

                window.location.reload();
              }
            })
          } else if (err.status == 401) {
            window.localStorage.clear();
            this.router.navigate(['/login'])
          }
          return throwError(err);
        }),
        finalize(() => {
          this.spinner.hide();
        })
      )
  }

  HttpGetRequest(urlpath: string, headers: string): Observable<any> {
    this.spinner.show();
    this.serviceUrl = '';
    this.serviceUrl = this.baseUrl + urlpath;
    if (urlpath.startsWith("search/autocomplete") || urlpath.startsWith("search/searchResults")) {
      httpOptions.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
      });
    } else {
      httpOptions.headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        'Expires': 'Sat, 01 Jan 2000 00:00:00 GMT'
      });

    }

    if (headers != '' && headers != 'undefined' && headers != undefined) {
      this.headersFromService = JSON.parse(headers);
      if (Object.keys(this.headersFromService).length > 0) {
        for (let key in this.headersFromService) {
          let value = this.headersFromService[key];
          httpOptions.headers = httpOptions.headers.append(key, value)
        }
      }
    }
    return this.http.get<any>(this.serviceUrl, httpOptions)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          if (err.status == 0) {
            this.connectionService.monitor().subscribe(isConnected => {
              console.log(isConnected)

              if (!isConnected) {

                window.location.reload();
              }
            })
          } else if (err.status == 401) {
            window.localStorage.clear();
            this.router.navigate(['/login'])
          }
          return throwError(err);
        }),
        finalize(() => {
          this.spinner.hide();
        })
      )
  }
  HttpDeleteRequest(urlpath: string): Observable<any> {
    this.spinner.show();
    this.serviceUrl = '';
    this.serviceUrl = this.baseUrl + urlpath;
    httpOptions.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    })
    return this.http.delete(this.serviceUrl, httpOptions)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          if (err.status == 0) {
            this.connectionService.monitor().subscribe(isConnected => {
              if (!isConnected) {
                window.location.reload();
              }
            })
          } else if (err.status == 401) {
            window.localStorage.clear();
            this.router.navigate(['/login'])
          }
          return throwError(err);
        }),
        finalize(() => {
          this.spinner.hide();
        })
      )
  }
  HttpPutRequest(bodydata: any, urlpath: string): Observable<any> {
    this.spinner.show();
    this.serviceUrl = '';
    this.serviceUrl = this.baseUrl + urlpath;
    httpOptions.headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    })
    return this.http.put<any>(this.serviceUrl, bodydata, httpOptions).pipe(
      catchError((err: HttpErrorResponse) => {
        if (err.status == 0) {
          this.connectionService.monitor().subscribe(isConnected => {
            if (!isConnected) {
              window.location.reload();
            }
          })
        } else if (err.status == 401) {
          window.localStorage.clear();
          this.router.navigate(['/login'])
        }
        return throwError(err);
      }),
      finalize(() => {
        this.spinner.hide();
      })
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  thirdPartyHttpGetRequest(urlpath: string, headers: string): Observable<any> {
    this.spinner.show();
    this.serviceUrl = urlpath;
    httpOptions.headers = new HttpHeaders({
      // 'Content-Type': 'application/json',
      // 'Accept': 'application/json',
      // 'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Credentials': 'true',
      // 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    })

    return this.http.get<any>(this.serviceUrl, httpOptions)
      .pipe(
        catchError((err: HttpErrorResponse) => {
          if (err.status == 0) {
            this.connectionService.monitor().subscribe(isConnected => {
              if (!isConnected) {
                window.location.reload();
              }
            })
          } else if (err.status == 401) {
            window.localStorage.clear();
            this.router.navigate(['/login'])
          }
          return throwError(err);
        }),
        finalize(() => {
          this.spinner.hide();
        })
      )
  }
}