import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
  ],

  declarations: [
  ],

  exports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule { }
