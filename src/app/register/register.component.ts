import { Component, OnInit } from '@angular/core';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [RegisterService]
})
export class RegisterComponent implements OnInit {
  email: string = '';
  password: string = '';
  constructor(private regService: RegisterService) { }

  ngOnInit() {
  }

  onRegister() {
    this.regService.signup(this.email, this.password);
  }

}
