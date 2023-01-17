import { Component, OnInit } from '@angular/core';
import data from "../../../data/author";

@Component({
  selector: 'app-single-team',
  templateUrl: './single-team.component.html',
  styleUrls: ['./single-team.component.css']
})
export class SingleTeamComponent implements OnInit {
  public author = data;
  constructor() { }

  ngOnInit(): void {
  }

}
