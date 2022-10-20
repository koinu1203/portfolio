import { IExperienceInfo } from './../common/interfaces/experience-information';
import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../common/services/data.service';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  @Input() experiences!:Array<IExperienceInfo>;
  technologies!:any;
  constructor(
    private dataService:DataService
  ) { }

  ngOnInit(): void {
    this.getTechnologies();
  }
  getTechnologies(){
    this.dataService.getTecnologies()
      .subscribe((val:any)=>{
        this.technologies = val.technologies;

      });
  }
}
