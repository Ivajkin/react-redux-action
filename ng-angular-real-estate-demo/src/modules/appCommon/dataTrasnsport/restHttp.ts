import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import {TMarkerData} from "modules/appCommon/AppTypes";


@Injectable()
export class RestHttp {
  constructor(private http: HttpClient) {
  }

  getMapPoints(): Observable<TMarkerData[]> {
    return this.http.get<TMarkerData[]>('/api/test_buildings.json')
      .pipe(
        catchError(this.handleError('getMapPoints', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
