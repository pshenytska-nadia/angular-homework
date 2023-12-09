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

  constructor(title: string, description: string, price: number) {
    this.id = Math.abs(
      new Date('08/12/2023 12:56 PM').getTime() - new Date().getTime()
    );

    this.title = title;
    this.description = description;
    this.price = price;
    this.tags = [];
  }
}
