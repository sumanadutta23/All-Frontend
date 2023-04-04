import { Component,  Input,OnInit, Output,EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  todo !: Todo;
  todos:Todo[]=[];
  
  
  constructor( ) {
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
      }]
   }

  ngOnInit(): void{

  }
  delTodo(id:any){
    this.todos.splice(id,1);
    this.ngOnInit();
  }

}
