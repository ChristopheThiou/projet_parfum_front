import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../entities';

@Component({
  selector: 'app-list-parfum',
  templateUrl: './list-parfum.component.html',
  styleUrls: ['./list-parfum.component.css']
})
export class ListParfumComponent {

  @Input({ required: true })
  product: Product;

}
