import { Component } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {


  Newuser={
    email:"",
    name:"",
    password:""
  }

  enviar(){
    console.log(this.Newuser)

  }

}
