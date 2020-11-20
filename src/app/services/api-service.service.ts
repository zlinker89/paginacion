import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskResponse } from '../interfaces/responses/TaskResponse';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor(
    private http: HttpClient
  ) { }
  getUsuarios(): Observable<TaskResponse[]> {
    return this.http.get<TaskResponse[]>('https://jsonplaceholder.typicode.com/todos');
  }
}
