import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../common/models/task.model';
import { Observable } from 'rxjs/Rx';
import { TaskService } from '../common/services/task.service';


@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})

export class TaskDetailsComponent implements OnInit {
  taskInfo: FormGroup;
  task: Task;

  constructor(private fb: FormBuilder, private taskService: TaskService) { }

  ngOnInit() {
    this.taskInfo = this.fb.group({
      taskname: ['', [Validators.required, Validators.minLength(1)]],
      priority: ['', [Validators.required]],
      duedate: ['', [Validators.required]],
      assignee: ['', [Validators.required]],
      status: ['', [Validators.required]],
      notes: ['', [Validators.required]]
    })
  }



  addPersonalInfo() {    
    alert("save");
    this.task = new Task(
      this.taskInfo.get('taskname').value,
      this.taskInfo.get('priority').value,
      this.taskInfo.get('duedate').value,
      this.taskInfo.get('assignee').value,
      this.taskInfo.get('status').value,
      this.taskInfo.get('notes').value,
    );

    let response = this.taskService.saveTask(this.task);
    response.then((success)=>{      
        alert("successfuly saved");
    }).catch((error) =>{
      console.log(error);
    })
  }
}
