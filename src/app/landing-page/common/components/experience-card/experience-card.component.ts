import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { IExperienceInfo } from '../../interfaces';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-experience-card',
  templateUrl: './experience-card.component.html',
  styleUrls: ['./experience-card.component.scss']
})
export class ExperienceCardComponent implements OnInit,OnDestroy {
  @Input() experience!:IExperienceInfo;
  technologies!:any;
  unsubscribe$:Subject<void>;
  constructor(
    private dataService:DataService
  ) {
    this.unsubscribe$=new Subject();
  }
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
  ngOnInit(): void {
    this.getTechnologies();

  }
  getTechnologies(){
    this.dataService.getTecnologies()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((val:any)=>{
        this.technologies = val.technologies;
        console.log('val',val);

        console.log(this.technologies);
      });
  }
}
