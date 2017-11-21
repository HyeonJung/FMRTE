import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FmrteService } from '../service/fmrte.service';
import 'rxjs/add/operator/map';
import { Video } from '../model/video.model';
declare const $: any;

@Component({
  selector: 'app-musiclist',
  templateUrl: './musiclist.component.html',
  styleUrls: ['./musiclist.component.css']
})
export class MusiclistComponent implements OnInit {

  video: Video = new Video();
  player: YT.Player;
  youtubeWidth = 500;
  yt: string;

  constructor(private fmrteService: FmrteService) { }

  ngOnInit() {
    this.video.videoId = '';
    this.getVideo();
    this.youtubeWidth = $('.youtubeDiv').width();
  }

  savePlayer (player) {
    this.player = player;
    this.player.cueVideoById(this.video.videoId);
  }

  onStateChange(event) {
    if (event.data === -1) {
      this.playVideo();
    } else if (event.data === 0) {
      this.videoChange();
    }
  }

  onReady() {
    this.playVideo();
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }

  videoChange() {
    this.getVideo();
    this.player.stopVideo();
    this.player.cueVideoById(this.video.videoId);
    this.player.playVideo();
  }

  getVideo() {
    this.fmrteService.getRandomVideo().subscribe(response => {
      if (response.status === 200) {
        this.video = response.json();
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
