import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { AddProductFormComponent } from '../add-product-form/add-product-form.component';
import { AddTagComponent } from '../../tag/add-tag/add-tag.component';
import { ApiService } from '../../services/api.service';
import { TagsService } from '../../services/tags.service';
import { ProductsService } from '../../services/products.service';
import { IProduct, Product } from '../product.model';
import { ITag } from '../../tag/tag.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
  imports: [
    NgFor,
    AsyncPipe,
    AddProductFormComponent,
    AddTagComponent,
    MatIconModule,
  ],
})
export class ProductListComponent implements OnInit {
  deleteProduct(productId: number) {
    this.productsService.deleteProduct(productId);
  }
  editProduct(product: IProduct) {
    this.selectedProduct = product;
    this.addProductVisibility = true;
  }
  public addProductVisibility!: boolean | undefined;
  public addTagVisibility: boolean | undefined;
  public products$: Observable<IProduct[]> = this.productsService.products$;
  public tags: Observable<ITag[]> = this.tagsService.tags$;
  public selectedProduct: IProduct = new Product(0, '', '', 0);

  constructor(
    private productsService: ProductsService,
    private tagsService: TagsService,
    private apiService: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.apiService
      .getProducts()
      .subscribe((products) => this.productsService.setProducts(products));

    this.apiService
      .getTags()
      .subscribe((tags) => this.tagsService.setTags(tags));
  }
}
