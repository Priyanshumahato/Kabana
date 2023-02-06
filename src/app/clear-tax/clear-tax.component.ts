import { Component, OnInit } from '@angular/core';
import { ContaskService } from '../contask.service';
import { AssignTask } from '../task.interface';

@Component({
  selector: 'app-clear-tax',
  templateUrl: './clear-tax.component.html',
  styleUrls: ['./clear-tax.component.css'],
})
export class ClearTaxComponent implements OnInit {
  contackservice: any;
  constructor(contackservice: ContaskService) {
    this.contackservice = contackservice;
  }

  planned: AssignTask[] = [];
  started: AssignTask[] = [];
  done: AssignTask[] = [];
  plan: string = 'plan';

  ngOnInit(): void {
    this.planned = this.contackservice.getplanned();
    this.started = this.contackservice.getstarted();
    this.done = this.contackservice.getdone();
  }
  editableplan(task: AssignTask) {
    this.contackservice.editplanned(task);
    this.contackservice.enabledit();
  }
  editablestart(task: AssignTask) {
    this.contackservice.editstart(task);
    this.contackservice.enabledit();
  }
  editabledone(task: AssignTask) {
    this.contackservice.editend(task);
    this.contackservice.enabledit();
  }
  createmode(){
    this.contackservice.createmodemode();
  }
}
