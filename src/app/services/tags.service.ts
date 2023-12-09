import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ITag } from '../tag/tag.model';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  private apiUrl = '../assets/tags.json';

  constructor(private http: HttpClient) {}

  getTags(): Observable<ITag[]> {
    return this.http
      .get<ITag[]>(this.apiUrl)
      .pipe(catchError(this.handleError('getTags', [])));
  }

  getTag(name: string): Observable<ITag | undefined> {
    return this.getTags().pipe(
      map((tags) => tags.find((tag) => tag.name === name))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
