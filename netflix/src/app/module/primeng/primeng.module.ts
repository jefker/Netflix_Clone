import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],

  exports: [
    AccordionModule,
    InputTextModule,
    ButtonModule,
    SplitButtonModule
  ]

})

export class PrimengModule { }
