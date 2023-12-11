import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ITag, Tag } from '../tag.model';
import { TagsService } from '../../services/tags.service';

@Component({
  selector: 'app-add-tag',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-tag.component.html',
  styleUrl: './add-tag.component.scss',
})
export class AddTagComponent {
  @Input() visible: boolean | undefined;
  @Output() visibleChange = new EventEmitter<boolean>();

  public newTag: ITag = new Tag('#000', '');

  constructor(private tagsService: TagsService) {}

  public addTag(): void {
    this.tagsService.addTag(this.newTag);
    this.newTag = new Tag('#000', '');
    this.closeModal();
  }

  closeModal() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }
}
