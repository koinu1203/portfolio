import { Subject, takeUntil } from 'rxjs';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DataService } from '../common/services/data.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit,OnDestroy {
  @Input() skills:Array<string> = [];
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

      });
  }
}
