import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {
  @Input() projects:any;
  constructor() { }

  ngOnInit(): void {
  }

}
