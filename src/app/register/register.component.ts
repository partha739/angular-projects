import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { data } from 'jquery';
import { ApiserviceService } from '../services/apiservice.service';
import { PasswordValidator } from '../shared/password-validator';
import { forbiddenNameValidator } from '../shared/username-validator';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  get username(){
   return this.registrationForm.get('username');
  }

  constructor(private fb:FormBuilder,private service:ApiserviceService) { }

  email=""

  ngOnInit() {
    this.service.getEmailAPI(data).subscribe((res)=>{
    console.log(res);
      this.email=res
    })
    
   }
    
    







  registrationForm=this.fb.group({
    username:['',[Validators.required,Validators.minLength(3),forbiddenNameValidator(/password/)]],
    email:['',[Validators.required,Validators.email]],
    password:[''],
    confirmpassword:['']

  },{validator:PasswordValidator});
successmsg=""
    




  onSubmit(){
   
   
      this.service.createUserData(this.registrationForm.value).subscribe((res)=>{
        this.registrationForm.reset();
        this.successmsg=res.message
      })
    
  }
  
  
}

