import { Component, OnInit } from '@angular/core';
import { Product } from '../entities';
import { ActivatedRoute } from '@angular/router';
import { ParfumService } from '../parfum.service';

@Component({
  selector: 'app-single-parfum',
  templateUrl: './single-parfum.component.html',
  styleUrls: ['./single-parfum.component.css']
})
export class SingleParfumComponent implements OnInit {

  product: Product;
  editing=false;
  constructor(private route: ActivatedRoute, private service: ParfumService) { }

  ngOnInit(): void {

    this.route.params.subscribe(params =>
      this.service.fetchOne(params['id']).subscribe(data => this.product = data));

  }

  updateMovie(product: Product) {
    this.service.update(product).subscribe(data =>{
      this.product = data;
      this.editing=false;
    });

  }
}
