import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';


@Injectable()
export class FmrteService {

    constructor(private http: Http, private router: Router) {}

    public searchVideo(keyword: String) {
      return this.http.get(environment.apiUrl + 'search?keyword=' + keyword);
    }
}
