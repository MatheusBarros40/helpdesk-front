import { Component, OnInit } from '@angular/core';
import {Credenciais} from "../../models/credenciais";
import {FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  creds: Credenciais = {
    email:'',
    senha:''
  }

  email= new FormControl(null, Validators.email);
  senha= new FormControl(null, Validators.minLength(3));
  validaCampos():boolean{
    if(this.email.valid && this.senha.valid){
      return true;
    }else{
      return false;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
