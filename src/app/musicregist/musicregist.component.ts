import { Component, OnInit } from '@angular/core';
import { FmrteService } from '../service/fmrte.service';
import 'rxjs/add/operator/map';
import { Video } from '../model/video.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-musicregist',
  templateUrl: './musicregist.component.html',
  styleUrls: ['./musicregist.component.css']
})
export class MusicregistComponent implements OnInit {
  keyword = '';
  videoList: Video[] = new Array<Video>();
  constructor(private fmrteService: FmrteService, private router: Router) { }

  ngOnInit() {
  }


  moveMain() {
    this.router.navigate(['/list']);
  }

  /**
   * 검색
   */
  searchVideo() {
    this.fmrteService.searchVideo(this.keyword).subscribe(response => {
      if (response.status === 200) {
        this.videoList = response.json();
      }
  }, error => {
    if (error.status === 401 || error.status === 403) {
      alert('로그인이 만료되었거나 잘못된 인증입니다.\n다시 로그인 해주세요');
    } else {
      alert('오류가 발생했습니다.');
    }
   });
  }

  /**
   * 저장
   */
  saveVideo(video: Video) {
    this.fmrteService.saveVideo(video).subscribe(response => {
      if (response.status === 200) {
        video.regist = true;
        alert('등록되었습니다.');
      }
    }, error => {
      if (error.status === 401 || error.status === 403) {
        alert('로그인이 만료되었거나 잘못된 인증입니다.\n다시 로그인 해주세요');
      } else {
        alert('오류가 발생했습니다.');
      }
    });
  }

}
