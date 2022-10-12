import { Component, OnInit,Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit,OnChanges {
  @Input() links!:Array<any>;
  constructor() {
    this.links=[];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['links'].currentValue){
      console.log(this.links);
    }
  }

  ngOnInit(): void {
  }

}
