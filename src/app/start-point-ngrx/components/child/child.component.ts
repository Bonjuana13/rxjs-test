import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-child',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnChanges {
  @Input() articles: Observable<any> = new Observable();

  ngOnChanges(): void {
    console.log(this.articles);
  }

}
