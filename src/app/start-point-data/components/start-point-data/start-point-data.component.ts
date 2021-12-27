import { Component, OnInit } from '@angular/core';
import { map, Observable, switchMap } from 'rxjs';
import { Article } from '../../interfaces/articles';
import { ArticleDataService } from '../../services/start-point-data.service';
// import { ArticleService } from '../../services/start-point-data.service';

@Component({
  selector: 'app-start-point-data',
  templateUrl: './start-point-data.component.html',
  styleUrls: ['./start-point-data.component.scss']
})
export class StartPointDataComponent implements OnInit {
  amakaArticles$: Observable<Article[]> = this.reload();;

  constructor(
    private articleDataService: ArticleDataService
  ) { }

  ngOnInit(): void { }

  reload(): Observable<Article[]> {
    let currentArticles: any[] = [];
    return this.articleDataService.getAll()
  }

}
