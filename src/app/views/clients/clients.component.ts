import { Component,OnInit } from '@angular/core';
import { ClientServicesService } from 'src/app/services/client-services.service';


@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent {

  constructor(
    private clientsService:ClientServicesService
  ){}

  ngOnInit(): void {
    this.getClients()

  }

  clients:any

  getClients(){
    this.clientsService.getClients().subscribe((res)=>{
      this.clients=res.users
      console.log(this.clients)

    })
  }


}
