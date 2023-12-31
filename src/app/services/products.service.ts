import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../product/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly _products$ = new BehaviorSubject<IProduct[]>([]);
  public readonly products$ = this._products$.asObservable();

  get products(): IProduct[] {
    return this._products$.getValue();
  }
  private set products(products: IProduct[]) {
    this._products$.next(products);
  }
  public setProducts(products: IProduct[]): void {
    this.products = products;
  }
  public getProductById(productId: number): IProduct | undefined {
    return this.products.find((product) => product.id === productId);
  }
  public addProduct(newProduct: IProduct): void {
    newProduct.id = this.products.length + 1;
    this.products = [...this.products, newProduct];
  }
  public updateProduct(updatedProduct: IProduct): void {
    this.products = this.products.map((product) =>
      product.id === updatedProduct.id
        ? { ...product, ...updatedProduct }
        : product
    );
  }
  public deleteProduct(id: number): void {
    this.products = this.products.filter((product) => product.id !== id);
  }
}
