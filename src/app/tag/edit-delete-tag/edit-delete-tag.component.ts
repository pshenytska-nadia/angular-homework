import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ITag } from '../tag.model';
import { TagsService } from '../../services/tags.service';

@Component({
  selector: 'app-edit-delete-tag',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-delete-tag.component.html',
  styleUrl: './edit-delete-tag.component.scss',
})
export class EditDeleteTagComponent {
  @Input() visible!: boolean;
  @Input() tagToEdit!: ITag;
  @Output() visibleChange = new EventEmitter<boolean>();

  constructor(private tagsService: TagsService) {}

  deleteTag() {
    this.tagsService.deleteTag(this.tagToEdit.color);
    this.closeModal();
  }
  addTag() {
    this.tagsService.updateTag(this.tagToEdit);
    this.closeModal();
  }
  closeModal() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
