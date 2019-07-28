import { Component, OnInit } from '@angular/core';

import {mySongs} from "../../assets/data/mySong";

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  mysongs = mySongs;
  goodToShow: boolean[] = [];

  constructor() { }

  ngOnInit() {
  }

  post(i){
    alert(
      this.mysongs[i].name +"//" + 
      this.mysongs[i].artist + "//" +
      this.mysongs[i].genre + "//"+
      this.mysongs[i].yearReleased
          
    );

  }

  showMe(i){
    if (this.goodToShow[i]){
      this.goodToShow[i] = false;
    }else{
      this.goodToShow[i] = true;
    }
  }

}
