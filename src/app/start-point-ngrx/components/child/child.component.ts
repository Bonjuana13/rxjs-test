import { Component, Input, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../../interfaces/articles';

@Component({
  selector: 'app-child',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges {
  @Input() articles: Observable<any> = new Observable();

  constructor() { }

  ngOnChanges() {
    console.log(this.articles);
  }

}
