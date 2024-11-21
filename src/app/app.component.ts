import { Component } from '@angular/core';
import { resetFakeAsyncZone } from '@angular/core/testing';
import { NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public title: string = 'Hola Mundo';



}
