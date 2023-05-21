import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ClientServicesService {

  private url = "http://localhost:3000/users/usuarios"

  constructor(
    private http:HttpClient
  ) {}

  getClients(){
    return this.http.get<any>(this.url);
  }

}
