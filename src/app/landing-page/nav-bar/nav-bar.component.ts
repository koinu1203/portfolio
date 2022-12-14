import { Component, OnInit,Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit,OnChanges {
  @Input() linksNavBar!:any;
  @Input() selected: string='';
  links: Array<any> = [];
  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!!this.links && changes['linksNavBar']?.currentValue){
      this.links = Object.keys(this.linksNavBar).map((key)=>{
        return {
          key: key,
          name: this.linksNavBar[key]
        };
      })
    }
  }

  ngOnInit(): void {
  }

  onSelectItem(key:string){
    if(this.selected===key){
      this.selected='';
    }else{
      this.selected=key;
    }
  }
  onLogo(){
    this.selected='';
  }
}
