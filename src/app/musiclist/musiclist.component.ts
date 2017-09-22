import { Component, OnInit } from '@angular/core';
declare const $: any;

@Component({
  selector: 'app-musiclist',
  templateUrl: './musiclist.component.html',
  styleUrls: ['./musiclist.component.css']
})
export class MusiclistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.owl-carousel').owlCarousel();
  }

}
