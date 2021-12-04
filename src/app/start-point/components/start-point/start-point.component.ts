import { Component, OnInit } from '@angular/core';
import { StartPointService } from './../../services/start-point.service';
import { Observable, switchMap } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-start-point',
  templateUrl: './start-point.component.html',
  styleUrls: ['./start-point.component.scss']
})
export class StartPointComponent implements OnInit {
  email: string = '';
  in_active: any = ['active', 'inactive'];

  myForm : FormGroup = new FormGroup({
    "email": new FormControl(),
    "in_active": new FormControl(),
  });

  users: Observable<any> = this.formTyping();

  constructor(
    private startPointService: StartPointService
  ) { }

  ngOnInit() {
  }

  getFilteredUsers(): Observable<any> {
    return this.startPointService.filterUsers(this.myForm.controls['in_active'].value == null ? '' : this.myForm.controls['in_active'].value,
                                                  this.myForm.controls['email'].value == null ? '' : this.myForm.controls['email'].value);
  }

  formTyping(): Observable<any> {
    return this.myForm.valueChanges
      .pipe(debounceTime(800),
      switchMap(() => {
        return this.startPointService.filterUsers(this.myForm.controls['in_active'].value == null ? '' : this.myForm.controls['in_active'].value,
                                                    this.myForm.controls['email'].value == null ? '' : this.myForm.controls['email'].value);
      }),
      map(x => x.data));
  }

  getUsers() {
    this.startPointService.getUsers().subscribe(users => {
      // console.log(users);
      this.users = users.data;
    });
  }

}
