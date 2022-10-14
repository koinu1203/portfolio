import { Component, OnInit,Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit,OnChanges {
  @Input() linksNavBar!:any;
  links: Array<any> = [];

  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['linksNavBar'].currentValue){
      this.links = Object.keys(this.linksNavBar).map((key)=>{
        return {
          key: key,
          name: this.linksNavBar[key]
        };
      })
      console.log(this.linksNavBar);
    }
  }

  ngOnInit(): void {
  }

}
