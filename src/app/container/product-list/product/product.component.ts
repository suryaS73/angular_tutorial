import { Component, Input } from '@angular/core';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() prod:{
      id: number,
      name: string,
      description: string,
      brand: string,
      gender: string,
      category: string,
      size: Array<number>,
      color: Array<string>,
      price: number,
      discountPrice?:number,
      is_in_inventory: boolean,
      items_left:number,
      imageURL: string,
      slug:string
  } =undefined;

}
