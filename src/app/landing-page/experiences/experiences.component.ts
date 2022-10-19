import { IExperienceInfo } from './../common/interfaces/experience-information';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experiences',
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.scss']
})
export class ExperiencesComponent implements OnInit {
  @Input() experiences!:Array<IExperienceInfo>;
  constructor() { }

  ngOnInit(): void {
  }

}
