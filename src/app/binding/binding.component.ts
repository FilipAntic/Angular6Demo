import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent implements OnInit {


  constructor() { }
  server: string = '';
  listaServera: string[] = [];
  ngOnInit() {

  }

  ubaciServer() {
    console.log(this.server);
    this.listaServera.push(this.server);
    this.server = '';
  }

  //https://stackoverflow.com/questions/11365632/how-to-detect-when-the-user-presses-enter-in-an-input-field

}
