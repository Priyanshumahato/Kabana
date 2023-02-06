import { Injectable } from '@angular/core';
import { AssignTask } from './task.interface';

@Injectable({
  providedIn: 'root',
})
export class ContaskService {
  tasks: AssignTask[] = [
    {
      title: 'Gst Filling Flow',
      due: new Date(),
      name: 'James',
      status: 'planned',
    },
    {
      title: 'Itr Filling Flow',
      due: new Date(),
      name: 'James',
      status: 'planned',
    },
  ];
  editingmode: boolean = false;
  planned: AssignTask[] = [];
  started: AssignTask[] = [];
  done: AssignTask[] = [];
  index: Number = 0;

  getplanned(): AssignTask[] {
    return this.tasks;
    // return this.planned;
  }
  getstarted(): AssignTask[] {
    return this.tasks;
    return this.started;
  }
  getdone(): AssignTask[] {
    return this.tasks;
    return this.done;
  }
  setplanned(params: AssignTask) {
    console.log('hit');
    this.planned.push(params);
  }
  setstarted(params: AssignTask) {
    this.started.push(params);
  }
  setdone(params: AssignTask) {
    this.done.push(params);
  }
  editplanned(param: AssignTask) {
    this.index = this.tasks.findIndex((element) => element === param);
  }
  editstart(param: AssignTask) {}
  editend(param: AssignTask) {}

  enabledit() {
    return (this.editingmode = false);
  }
  createmodemode(){
    return (this.editingmode = true);
  }
  mode(){
    return this.editingmode;
  }
  constructor() {}
}
