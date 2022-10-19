import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { ProyectCardComponent } from './proyect-card/proyect-card.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';


const components = [SkillCardComponent,ProyectCardComponent];

@NgModule({
  declarations: [
    ...components,
    ExperienceCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components
  ]
})
export class SharedComponentsModule { }
