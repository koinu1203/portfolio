import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title:string ='<!-- Daniel Ortiz -->';
  subtitle:string ='<Front End Developer • Web Developer • Translator/>';
  constructor() { }

  ngOnInit(): void {
  }

}
