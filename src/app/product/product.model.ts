import { ITag } from '../tag/tag.model';

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  tags: ITag[];
}

export class Product implements IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  tags: ITag[];

  constructor(id: number, title: string, description: string, price: number) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.tags = [];
  }
}
