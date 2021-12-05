import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, startWith, switchMap } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';

import { StartPointService } from './../../services/start-point.service';

@Component({
  selector: 'app-start-point',
  templateUrl: './start-point.component.html',
  styleUrls: ['./start-point.component.scss']
})
export class StartPointComponent implements OnInit {
  myForm : FormGroup = new FormGroup({
    email:  new FormControl(this.route.snapshot.queryParamMap.get('email')),
    in_active: new FormControl(this.route.snapshot.queryParamMap.get('status') == 'active' ? true : false),
  });

  users: Observable<any> = this.formTyping();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private startPointService: StartPointService
  ) { }

  ngOnInit(): void {

  }

  formTyping(): Observable<any> {
    return this.myForm.valueChanges
      .pipe(
        debounceTime(800),
        startWith({ email: this.route.snapshot.queryParamMap.get('email'),
          in_active: this.route.snapshot.queryParamMap.get('status') == 'active' ? true : false }),
        switchMap(() => {
          this.router.navigate([], { queryParams: { email: this.myForm.controls['email'].value, status: this.myForm.controls['in_active'].value ? 'active' : 'inactive' } });
          return this.startPointService.filteredUsers(this.myForm.controls['in_active'].value ? 'active' : 'inactive',
            this.myForm.controls['email'].value == null ? '' : this.myForm.controls['email'].value);
        }),
        map(x => x.data));
  }

}
