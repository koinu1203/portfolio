import { Component, Input, OnInit } from '@angular/core';
import { IProyect } from '../../interfaces';

@Component({
  selector: 'app-proyect-card',
  templateUrl: './proyect-card.component.html',
  styleUrls: ['./proyect-card.component.scss']
})
export class ProyectCardComponent implements OnInit {
  @Input() dataProject:IProyect;
  showContent:boolean=false;
  constructor() {
    this.dataProject={
      projectName: 'default',
      projectURL: 'fasf',
      githubRepository:'sfaasf',
      description:'lore ipsunm fankfsak asfnmasf nkmas a fasf af a asf fasf asfa  afa sfasfasf af as',
      previewImg: 'Untitled.png'
    } as IProyect;
  }

  ngOnInit(): void {
  }
  clickCard(){
    this.showContent = !this.showContent;
  }
}
