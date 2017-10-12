import { Component, OnInit } from '@angular/core';
import { Task } from '../common/models/task.model';
import { TaskService } from '../common/services/task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  
  taskList : any;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    let response = this.taskService.getTask();
    response.then((success)=>{      
        this.taskList = success;
    }).catch((error) =>{
      console.log(error);
    })    
  }

}
