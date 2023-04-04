import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task';
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  serviceURL: string;

  constructor(private http : HttpClient) {
    this.serviceURL = "http://localhost:3000/tasks";
   }
   addTask(task: Task) : Observable<Task>{
    return this.http.post<Task>(`${this.serviceURL}`,task);
   }

   getAllTask(task: Task) : Observable<Task>{
    return this.http.get<Task>("http://localhost:3000/tasks",{responseType:'json'});
   }

   deleteTask(task: Task) : Observable<Task>{
    return this.http.delete<Task>("http://localhost:3000/tasks"+'/'+task.id);
   }

   editTask(task: Task) : Observable<Task>{
    return this.http.put<Task>("http://localhost:3000/tasks"+'/'+task.id,task);
   }

  }
