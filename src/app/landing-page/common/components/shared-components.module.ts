import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCardComponent } from './skill-card/skill-card.component';
import { ProyectCardComponent } from './proyect-card/proyect-card.component';
import { ExperienceCardComponent } from './experience-card/experience-card.component';


const components = [SkillCardComponent,ProyectCardComponent,ExperienceCardComponent];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components
  ]
})
export class SharedComponentsModule { }
