import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';  // https://github.com/angular/angular/issues/20349
import {map, catchError} from 'rxjs/operators';

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

    private apiUrl = 'https://restcountries.eu/rest/v2/all';

    constructor(public http: HttpClient) {
        console.log('Hello RestProvider Provider');
    }

    getCountries(): Observable<{}> {
        return this.http.get(this.apiUrl).pipe(
            map(RestProvider.extractData),
            catchError(RestProvider.handleError)
        );
    }

    private static extractData(res: Response) {
        return res || {};
    }

    private static handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const err = error || '';
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
