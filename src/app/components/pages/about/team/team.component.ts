import { Component, OnInit } from '@angular/core';
import data from "../../../data/author";

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  public author = data;
  constructor() { }

  ngOnInit(): void {
  }

}
