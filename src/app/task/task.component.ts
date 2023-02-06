import { ContaskService } from './../contask.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  increatemode: boolean = true;
  editable: string = 'editable';
  form: any;
  contackservices: ContaskService;
  constructor(fb: FormBuilder, contackservice: ContaskService) {
    this.contackservices = contackservice;
    this.increatemode = this.contackservices.mode();
    console.log(this.contackservices.mode());
    this.form = fb.group({
      title: ['', [Validators.required, Validators.minLength(1)]],
      due: ['', [Validators.required]],
      status: ['', [Validators.required]],
      name: ['', [Validators.required]],
    });
  }
  get fc() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
    if (this.form.value.status == 'planned') {
      this.contackservices.setplanned(this.form.value);
      console.log(this.contackservices.getplanned());
    } else if (this.form.value.status == 'started') {
      this.contackservices.setstarted(this.form.value);
    } else {
      this.contackservices.setdone(this.form.value);
    }
  }
  setval() {}
  ngOnInit(): void {}
}
