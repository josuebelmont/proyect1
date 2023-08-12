import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/services/tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  constructor(private taskService :TasksService){}

  ngOnInit(): void {
    this.list()
  }
  //----------------

  tasks:any

  UpTask:any

  
  
  Newtask={
    title:"",
    description:""
  }


  save(){
    this.taskService.save(this.Newtask).subscribe((res)=>{
      console.log(res)
      this.clear()
      this.list();

    },(err)=>{
      console.log(err)
    })
    console.log(this.Newtask)
  }

  //list Task
  list(){
    this.taskService.list().subscribe((res)=>{
      this.tasks = res.tasks
      console.log(this.tasks)
    },(err)=>{
      console.log(err)
    })
  }

  //
  delete(id:any){ 
    this.taskService.delete(id).subscribe((res)=>{
      this.list();
      console.log(res)
    },(err)=>{
      console.log(err)
    })
  }


  //Find task
  find(id:any){
    this.taskService.findTask(id).subscribe((res)=>{
       this.UpTask=res

   
      console.log(this.UpTask)
    },(err)=>{
      console.log(err)
    })
  }



  //update
  update(){
    

    console.log(this.UpTask)
     this.taskService.update(this.UpTask).subscribe((res)=>{
       console.log(res)
       this.list()
     },(err)=>{
       console.log(err)
     })

  }

  clear(){
    this.Newtask.title=""
    this.Newtask.description=""

  }


}
