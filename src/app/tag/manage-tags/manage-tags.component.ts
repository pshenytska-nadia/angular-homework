import { AsyncPipe, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { TagsService } from '../../services/tags.service';
import { Observable } from 'rxjs';
import { ITag, Tag } from '../tag.model';
import { ApiService } from '../../services/api.service';
import { EditDeleteTagComponent } from '../edit-delete-tag/edit-delete-tag.component';

@Component({
  selector: 'app-manage-tags',
  standalone: true,
  imports: [AsyncPipe, NgFor, EditDeleteTagComponent],
  templateUrl: './manage-tags.component.html',
  styleUrl: './manage-tags.component.scss',
})
export class ManageTagsComponent implements OnInit {
  openModal(tag: ITag) {
    this.dialogVisibility = true;
    this.tagToEdit = tag;
  }
  public dialogVisibility: boolean = false;
  public tagToEdit: ITag = new Tag('#000', '');

  constructor(
    private tagsService: TagsService,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.apiService.getTags().subscribe();
  }

  public tags$: Observable<ITag[]> = this.tagsService.tags$;

  goBack() {
    this.router.navigate(['/']);
  }
}
