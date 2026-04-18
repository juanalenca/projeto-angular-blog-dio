import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { DATA_FAKE } from '../data/dataFake';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  getArticles(): Article[] {
    return DATA_FAKE;
  }

  getArticleById(id: string | null): Article | undefined {
    return DATA_FAKE.find(article => article.id === id);
  }
}
