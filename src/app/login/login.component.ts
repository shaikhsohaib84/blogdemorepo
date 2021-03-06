import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
  <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">

  <div class="container">
    <form (ngSubmit)="successfullsubmit()" #loginform="ngForm">
      <h1>Welcome Back</h1>
      <hr>
      <div class="row">
        <div class="col margin-top">
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" 
            name="email" 
            ngModel pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
            class="form-control" 
            id="email" 
            placeholder="jhondoe@gmail.com"   
            [(ngModel)]="email"
            #emailinput="ngModel"
            required email>
            <div class="alert" role="alert" *ngIf="emailinput.invalid && emailinput.touched">
              Email Required!
            </div>
          </div>

          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" 
            ngModel pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"
            class="form-control" 
            name="password"
            id="password" 
            [(ngModel)]="password"
            #passwordinput="ngModel"
            required >
            <div class="alert" role="alert" *ngIf="passwordinput.invalid && passwordinput.touched">
            password requires minimum 8 character. one upper-case, lower-case and number!
            </div>
          </div>
        </div>

        <div class="col is-content">
          <img class = "responsive-img" src="assets/image/signin.svg"  width="500" height="auto" alt="side image">
        </div>
      </div>
      <hr>
      <button type="submit" class="btn btn-warning" [disabled]="loginform.invalid">Submit</button>

    </form>

  </div>
  `,
  styles: [`
    *{
      font-family: 'Poppins', sans-serif !important;
      color:#414141;
    }
    .margin-top{
      margin-top: 5%;
    }
    .container{
      padding:50px;
    }
    .alert{
      color:red !important;
      padding-left: 0px;
    }
    hr{
    border-top: 1px solid #FF8C00!important;
    }
    .responsive-img{
      width:100%;
      height:auto;
    }
    @media screen and (max-width:767px)){
      .is-content
      {
        display:contents;
      }
    }
  `]
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;
  constructor() { }
  successfullsubmit(){
    alert(this.email+" Welcome to Blog")
  }
  ngOnInit(): void {
  }

}
