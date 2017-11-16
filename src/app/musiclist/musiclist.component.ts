import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare const $: any;

@Component({
  selector: 'app-musiclist',
  templateUrl: './musiclist.component.html',
  styleUrls: ['./musiclist.component.css']
})
export class MusiclistComponent implements OnInit {

  player: YT.Player;
  videoId = 'mDXZ7RRh5T4';
  youtubeWidth = 500;

  constructor() { }

  ngOnInit() {
    this.youtubeWidth = $('.youtubeDiv').width();
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

  onReady() {
     this.playVideo();
  }

  playVideo() {
    this.player.playVideo();
  }

  pauseVideo() {
    this.player.pauseVideo();
  }


}
