import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit{
  todos!:Todo[]
  constructor(){ 
    this.todos=[
      {
        sno:1,
        title:"This is title 1",
        desc:"Description",
        active:true
      },
      {
        sno:2,
        title:"This is title 2",
        desc:"Description",
        active:true
      },
      {
        sno:3,
        title:"This is title 3",
        desc:"Description",
        active:true
      },
    ]
  }
    ngOnInit(): void {

    }
    deleteTodo(id:any){
      this.todos.splice(id,1)
    }
  }


