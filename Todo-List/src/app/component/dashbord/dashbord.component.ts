import { Task } from "src/app/model/task";
import { CrudService } from "src/app/service/crud.service";
import { Component } from "@angular/core";

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})

export class DashbordComponent {

    taskobj: Task = new Task();
    taskArr:any;

    addTaskValue: string = '';
    editTaskValue: string = '';

    constructor(private crudService: CrudService) {}

    ngOnInit(): void{
      this.editTaskValue = '';
      this.addTaskValue = '';
      this.taskobj = new Task();
      this.getAllTask();
    }
  getAllTask() {
    this.crudService.getAllTask(this.taskobj).subscribe(res => {
      this.taskArr=<Task>res;
    })
  }

  addTask(){
    this.taskobj.task_name = this.addTaskValue;
    this.crudService.addTask(this.taskobj).subscribe(res => {
      this.ngOnInit();
      this.addTaskValue = '';
    })
  }
   
  editTask(){
    this.taskobj.task_name = this.editTaskValue;
    this.crudService.editTask(this.taskobj).subscribe(res => {
      this.ngOnInit()
    })
  }
  deleteTask(etask: Task){
    this.crudService.deleteTask(etask).subscribe(res => {
      this.ngOnInit()
    })
  }

  call(etask: Task){
    this.taskobj = etask;
    this.editTaskValue = etask.task_name;
  }
}