import { Component, OnInit } from '@angular/core';
import { DataService } from './common/services/data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  DATA:any;
  constructor(
    private dataService:DataService
  ) { }

  ngOnInit(): void {
    this.getEnglishData();
  }
  getSpanishData(){
    this.dataService.getSpanish()
      .subscribe(val=>{
        this.DATA=val;
      });
  }
  getEnglishData(){
    this.dataService.getEnglish()
      .subscribe(val=>{
        this.DATA=val;
        console.log(this.DATA);
      })
  }
}
