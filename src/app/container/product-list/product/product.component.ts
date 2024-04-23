import { Component, Input } from '@angular/core';
import { Product } from 'src/app/model/Product';
import { ProductListComponent } from '../product-list.component';

@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() prod:Product;


  

}
