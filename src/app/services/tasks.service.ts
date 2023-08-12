import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private urlSave ="http://localhost:3000/task/save"
  private urllistTask="http://localhost:3000/task"
  private urlDelete="http://localhost:3000/task/delete/"


  constructor(private http:HttpClient) { }

  //List Task
  list(){
    return this.http.get<any>(this.urllistTask)
  }

  //Save task
  save(task:object){
    return this.http.post<any>(this.urlSave,task)
  }

  delete(id:any){
    return this.http.delete<any>(this.urlDelete+id)

  }

  findTask(id:any){
    return this.http.get<any>(this.urllistTask+"/"+id)

  }

  update(task:any){
    return this.http.put<any>(this.urllistTask+"/update",task)
  }
 



}
