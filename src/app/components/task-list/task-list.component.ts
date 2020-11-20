import { Component, OnInit } from '@angular/core';
import { TaskResponse } from 'src/app/interfaces/responses/TaskResponse';
import { ApiServiceService } from 'src/app/services/api-service.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.sass']
})
export class TaskListComponent implements OnInit {
  datos: TaskResponse[] = [];
  pageNumber = 1;
  pageSize = 10;
  constructor(
    private api: ApiServiceService
  ) { }

  ngOnInit(): void {
    this.api.getUsuarios().subscribe(taskList => {
      this.datos = taskList;
    });
  }


}
