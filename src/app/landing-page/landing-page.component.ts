import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Languages } from './common/enums';
import { IProyect } from './common/interfaces';
import { DataService } from './common/services/data.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
})
export class LandingPageComponent implements OnInit, OnDestroy {
  DATA: any;
  skills:Array<string> = [];
  projects:Array<IProyect> = [];
  private unsubscribe$: Subject<void> = new Subject();
  constructor(
    private dataService: DataService,
    private router:Router
    ) {}
  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  ngOnInit(): void {
    this.router.navigate(['']);
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
        this.projects = val['projects'];
      });
  }
}
