import { Component, OnInit } from '@angular/core';

import {Fengxin} from "../fengxin";


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentStudent:Fengxin = {
    number:991506158,
    name:"XInyu Feng",
    username:"fengxin",
    campus:"Davis Campus",
    assignmentTitle:"Assignment3"
  }

  constructor() { }

  ngOnInit() {
  }

}
