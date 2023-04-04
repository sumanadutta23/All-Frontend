import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {
  constructor(private userService:UserService){
    
  }

  ngOnInit():void{}

  getUser(){
    this.userService.getUser().subscribe(
      user=>{
        console.log(user);
      },
      error=>{
        console.log(error);
        
      }
    )
  }
}
