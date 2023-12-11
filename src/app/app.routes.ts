import { Routes } from '@angular/router';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ManageTagsComponent } from './tag/manage-tags/manage-tags.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'manage-tags',
    component: ManageTagsComponent,
  },
];
