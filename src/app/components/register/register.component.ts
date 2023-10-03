import { Component,OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  form:FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ){}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name:"",
      email:"",
      password:""
    })
  }
  ValidateEmail = (email: any) => {
    const validRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return validRegex.test(email);
  }

  submit():void{
    const user = this.form.getRawValue();
    console.log(user);
    

    if(user.name.trim() == ""|| user.email.trim() == "" || user.password.trim() == ""){
      Swal.fire("Error","Please fill the all field","error");
    } else if(!this.ValidateEmail(user.email)){
      Swal.fire("Error","please enter a valid email","error")
    } else {
      this.http.post("http://localhost:5000/api/register",user,{
        withCredentials:true
      })
      .subscribe(()=>{
        this.router.navigate(['/']),
          (err: { error: { message: string; }; }) => {
            console.log("http",err);
            
            Swal.fire("Error", err.error.message, "error")
          }
      });
    }

  }

}
