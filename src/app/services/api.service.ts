import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITag } from '../tag/tag.model';
import { Observable, catchError, of } from 'rxjs';
import { IProduct } from '../product/product.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private tagsApiUrl = '../assets/tags.json';
  private productsApiUrl = '../assets/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>(this.productsApiUrl)
      .pipe(catchError(this.handleError('getProduct', [])));
  }

  getTags(): Observable<ITag[]> {
    return this.http
      .get<ITag[]>(this.tagsApiUrl)
      .pipe(catchError(this.handleError('getTags', [])));
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
