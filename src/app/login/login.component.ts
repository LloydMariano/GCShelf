import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators , FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../Services/data.schema';
import { DataService } from '../Services/data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:any = FormGroup;

  userData:any;
  role: any;
  constructor(
    private formControl: FormBuilder,
    private route: Router,
    private _url: DataService, 
  ) { }

  ngOnInit(): void {
    
  }

  //call
  frmGroup: FormGroup = this.formControl.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
  });
  
  token:any;


  login(e:any):void{
    e.preventDefault();
    let frm = this.frmGroup.controls;
    let acc: User ={
      email: frm['email'].value,
      password: frm['password'].value,
      token:'',
      role: 'string'
    }

    this._url.request('login','',acc ,'post').subscribe((res:any)=>{
      console.log(res)
      this.token = res.token;
      this.userData = res.user;
      this.role = res.user.role;

      localStorage.setItem('token', this.token);
      localStorage.setItem('student:', JSON.stringify(this.userData));
      let getData = localStorage.getItem('student:') as unknown as string;
      
      console.log(JSON.parse(getData));

      this.userData.email = res.user.email;
      this.userData.fname_fld = res.user.fname_fld;
      this.userData.mname_fld = res.user.mname_fld;
      this.userData.lname_fld = res.user.lname_fld;

      console.log(this.role);

      if(this.role === 'admin'){
        this.route.navigate(['/admin/dashboard']);
      }
      else if(this.role === 'student'){
        this.route.navigate(['/public/home']);
      }else{
        alert('error');
      }
      


      
    }),(error: any)=> {
      console.log("Error", error);
    } 
  } 
}
