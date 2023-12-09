export interface ITag {
  color: string;
  name: string;
}

export class Tag implements ITag {
  color: string;
  name: string;

  constructor(color: string, name: string) {
    this.color = color;
    this.name = name;
  }
}
