import { Component, OnInit } from '@angular/core';
import { FmrteService } from '../service/fmrte.service';
import 'rxjs/add/operator/map';
import { Video } from '../model/video.model';

@Component({
  selector: 'app-musicregist',
  templateUrl: './musicregist.component.html',
  styleUrls: ['./musicregist.component.css']
})
export class MusicregistComponent implements OnInit {
  keyword = '';
  videoList: Video[];
  constructor(private fmrteService: FmrteService) { }

  ngOnInit() {
  }

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

}
