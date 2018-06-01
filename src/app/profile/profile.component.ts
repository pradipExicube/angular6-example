import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup,FormControl, Validators} from '@angular/forms';

import { ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  options: FormGroup;
  fname=new FormControl('', [Validators.required]);;
  lname:string;
  mobile:any;
  image:any;
  formdata:FormGroup;
 
  constructor(fb: FormBuilder) {
   
    this.formdata = fb.group({
      image: ['',Validators.compose([Validators.required])],
      fname: ['',Validators.compose([Validators.required])],
      lname:['',Validators.compose([Validators.required])],
      mobile:['',Validators.compose([Validators.required ,Validators.maxLength(10)])]
   });
   //this.formdata.get('fname').setValue(this.a.fname);
  // console.log(this.formdata.get('fname'))
   }

  ngOnInit() {
  }
  
  getErrorMessage() {
    return this.fname.hasError('required') ? 'You must enter a value' :
        this.fname.hasError('email') ? 'Not a valid email' :
            '';
  }
  update(data) {
    console.log(data)
  }
}
