import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Options, Product } from '../entities';
import { ActivatedRoute } from '@angular/router';
import { ParfumService } from '../parfum.service';

@Component({
  selector: 'app-single-parfum',
  templateUrl: './single-parfum.component.html',
  styleUrls: ['./single-parfum.component.css'],
})
export class SingleParfumComponent implements OnInit {
  product: Product;
  editing = false;
  options: Options [] = [];
  constructor(private route: ActivatedRoute, private service: ParfumService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) =>
      this.service
        .fetchOne(params['id'])
        .subscribe((data) => (this.product = data))
    );
    this.route.params.subscribe((params) =>
      this.service
        .findByProduct(params['id'])
        .subscribe((data) => (this.options = data))
    );
  }

  updateMovie(product: Product) {
    this.service.update(product).subscribe((data) => {
      this.product = data;
      this.editing = false;
    });
  }
  
}
