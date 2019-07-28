import { Component, OnInit } from '@angular/core';
import {Fengxin} from "../fengxin";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

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
