import { Component, OnInit, AfterViewInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-musiclist',
  templateUrl: './musiclist.component.html',
  styleUrls: ['./musiclist.component.css']
})
export class MusiclistComponent implements OnInit, AfterViewInit {

  player: YT.Player;
  videoId = 'qDuKsiwS5xw';

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit() {

  }


  savePlayer (player) {
    this.player = player;
    console.log('player instance', player);
  }

  onStateChange(event) {
    console.log('player state', event.data);
    if (event.data === -1) {
      this.playVideo();
    }
  }

  onReadystatechange(event) {
     this.playVideo();
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }


}
