import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct, Product } from '../product.model';
import { AsyncPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductsService } from '../../services/products.service';
import { ITag } from '../../tag/tag.model';
import { TagsService } from '../../services/tags.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-product-form',
  standalone: true,
  imports: [FormsModule, NgFor, AsyncPipe],
  templateUrl: './add-product-form.component.html',
  styleUrl: './add-product-form.component.scss',
})
export class AddProductFormComponent {
  @Input() visible!: boolean | undefined;
  @Output() visibleChange = new EventEmitter<boolean>();

  public newProduct: IProduct = new Product(0, '', '', 0);
  public tags$: Observable<ITag[]> = this.tagsService.tags$;

  constructor(
    private productsService: ProductsService,
    private tagsService: TagsService
  ) {}

  public addProduct(): void {
    console.log('TAGS: ', this.tagsService.tags);
    this.productsService.addProduct(this.newProduct);
    this.newProduct = new Product(0, '', '', 0);
    this.closeModal();
  }

  closeModal() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  updateTags(tag: ITag, event: any) {
    const isChecked = event.target.checked;

    if (isChecked) {
      this.newProduct.tags.push(tag);
    } else {
      const index = this.newProduct.tags.indexOf(tag);
      if (index !== -1) {
        this.newProduct.tags.splice(index, 1);
      }
    }
  }
}
