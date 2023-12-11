import { Injectable } from '@angular/core';
import { ITag } from '../tag/tag.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TagsService {
  private readonly _tags$ = new BehaviorSubject<ITag[]>([]);
  public readonly tags$ = this._tags$.asObservable();

  get tags(): ITag[] {
    return this._tags$.getValue();
  }
  private set tags(tags: ITag[]) {
    this._tags$.next(tags);
  }
  public setTags(tags: ITag[]): void {
    this.tags = tags;
  }
  public addTag(newTag: ITag): void {
    this.tags = [...this.tags, newTag];
  }
  public updateTag(updatedTag: ITag): void {
    this.tags = this.tags.map((tag) =>
      tag.color === updatedTag.color ? { ...tag, ...updatedTag } : tag
    );
  }
  public deleteTag(color: string): void {
    this.tags = this.tags.filter((tag) => tag.color !== color);
  }
}
