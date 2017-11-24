import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { Video } from '../model/video.model';
import { User } from '../model/user.model';

@Injectable()
export class FmrteService {

    constructor(private http: Http, private router: Router) {}

    /**
     * 유튜브에서 동영상 검색
     * @param keyword
     */
    public searchVideo(keyword: String) {
      return this.http.get(environment.apiUrl + 'api/search?keyword=' + keyword, {
        headers : this.getHeadersFromSession()
      });
    }

    /**
     * 추가하기
     * @param video
     */
    public saveVideo(video: Video) {
      return this.http.post(environment.apiUrl + 'api/video', video, {
        headers : this.getHeadersFromSession()
      });
    }

    /**
     * 랜덤 동영상 가져오기
     */
    public getRandomVideo() {
      return this.http.get(environment.apiUrl + 'api/video/random', {
        headers : this.getHeadersFromSession()
      });
    }

    /**
     * 로그인
     */
    public login(user: User) {
      return this.http.post(environment.apiUrl + 'login', user);
    }

    /**
     * 회원가입
     */
    public regist(user: User) {
      return this.http.post(environment.apiUrl + 'api/users', user);
    }

       /**
     * 헤더 설정
     */
    getHeadersFromSession() {
      const headers = new Headers({'authorization' : sessionStorage.getItem('access_token')});
      return headers;
    }




}

