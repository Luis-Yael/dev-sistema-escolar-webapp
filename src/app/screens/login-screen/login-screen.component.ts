import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.scss']
})
export class LoginScreenComponent implements OnInit {
  //Variables para la vista
  public username:string = "";
  public password:string = "";
  public type: string = "password";
  public errors:any = {};
  public load:boolean = false;

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {

  }

  public login(){

  }

  //Metodo para mostrar/ocultar la contraseña
  //Opción 1: Cambiar el tipo de input de password a text
  showHidePassword():void{
    if(this.type == "password"){
      this.type = "text";
    }else{
      this.type = "password";
    }
  }

  //Opción 2: Cambiar el icono de ojo abierto/cerrado
  public showPassword(){
    this.type = this.type === "password" ? "text" : "password";
  }

  public registrar(){
    this.router.navigate(["registro-usuarios"]);
  }

}
