import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Video } from '../model/video.model';

@Injectable()
export class FmrteService {

    constructor(private http: Http, private router: Router) {}

    /**
     * 유튜브에서 동영상 검색
     * @param keyword
     */
    public searchVideo(keyword: String) {
      return this.http.get(environment.apiUrl + 'search?keyword=' + keyword);
    }

    /**
     * 추가하기
     * @param video
     */
    public saveVideo(video: Video) {
      return this.http.post(environment.apiUrl + 'video', video);
    }

    /**
     * 랜덤 동영상 가져오기
     */
    public getRandomVideo() {
      return this.http.get(environment.apiUrl + 'video/random');
    }
}
