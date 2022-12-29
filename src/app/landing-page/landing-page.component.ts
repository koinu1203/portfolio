import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { IDS } from './common/constants';
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
  idList:Array<any> = [];
  idSelected:string = '';
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
        IDS.forEach((val)=>{
          try{
            const element = document.getElementById(val);
            this.idList.push(element);
          }catch(e){
            console.error(e);
          }
        })
        this.skills = val['skills'];
        this.projects = val['projects'];
      });
  }

  private isInViewport(el:any) {
    const rect = el.getBoundingClientRect();
    return (
        (rect.top >= 0 &&rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
        // rect.left >= 0 &&
        || (rect.top <= 0  && rect.bottom >= (window.innerHeight || document.documentElement.clientHeight))
        // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  @HostListener('window:scroll',['event'])
  onScroll(event:any){
    this.idList.forEach((element)=>{
      const pass=this.isInViewport(element);
      if(pass){
        this.idSelected=element.id;
      }
    });

  }
}
