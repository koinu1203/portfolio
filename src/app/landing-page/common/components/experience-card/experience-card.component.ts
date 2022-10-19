import { Component, Input, OnInit } from '@angular/core';
import { IExperienceInfo } from '../../interfaces';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit {
  @Input() experience!:IExperienceInfo;
  @Input() technologies!:any;
  constructor(
  ) {}
  ngOnInit(): void {}

}
