export class Product{
      id: number;
      name: string;
      description: string;
      brand: string;
      gender: string;
      category: string;
      size: Array<number>;
      color: Array<string>;
      price: number;
      discountPrice?:number;
      is_in_inventory: boolean;
      items_left:number;
      imageURL: string;
      slug:string
}