import { Component } from '@angular/core';
import { AsyncPipe, NgFor } from '@angular/common';
import { IProduct } from '../product.model';
import { ProductsService } from '../../services/products.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [NgFor, AsyncPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  public products$: Observable<IProduct[]> = this.productsService.getProducts();

  constructor(
    private productsService: ProductsService,
    private router: Router
  ) {}
}
