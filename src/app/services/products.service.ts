import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IProduct } from '../product/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private apiUrl = '../assets/products.json';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>(this.apiUrl)
      .pipe(catchError(this.handleError('getProduct', [])));
  }

  getProduct(id: number): Observable<IProduct | undefined> {
    return this.getProducts().pipe(
      tap((product) => console.log(product)),
      map((product) => product.find((product) => product.id === id))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
