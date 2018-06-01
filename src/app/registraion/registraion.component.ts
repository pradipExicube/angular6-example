import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-registraion',
  templateUrl: './registraion.component.html',
  styleUrls: ['./registraion.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegistraionComponent implements OnInit {
  public firstName : string;
  public lastName : string;
  public mobile : string;
  public email : any;
  public password : any;
  // public firstName = new FormControl('', [Validators.required]);
  // public lastName = new FormControl('', [Validators.required]);
  // public mobile = new FormControl('', [Validators.required]);
  // public email = new FormControl('', [Validators.required]);
  // public password = new FormControl('', [Validators.required]);

 
  options: FormGroup;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      //hideRequired: false,
      //floatLabel: 'auto',
      firstName : '',
      lastName: '',
      mobile: '',
      email: '',
      password: ''
    });
  }

  // getErrorMessage() {
    
  //   return this.email.hasError('required') ? 'You must enter a value' :
  //       this.email.hasError('email') ? 'Not a valid email' :
  //           '';
  // }
  ngOnInit() {
  }

  registration(){
    alert("hi");
  }

}
