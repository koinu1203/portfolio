import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Subject, takeUntil } from 'rxjs';
import { Languages } from './common/enums';
import { DataService } from './common/services/data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit, OnDestroy {
  DATA: any;
  skills:Array<string> = [];
  private unsubscribe$: Subject<void> = new Subject();
  constructor(private dataService: DataService) {}
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.loadConfig();
  }
  loadConfig() {
    this.dataService
      .getConfig(Languages.ENGLISH)
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe((val:any) => {
        this.DATA = val;
        this.skills = val['skills'];
      });
  }
}
