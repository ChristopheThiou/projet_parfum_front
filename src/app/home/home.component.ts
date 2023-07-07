import { Component, OnInit } from '@angular/core';
import { Product } from '../entities';
import { ParfumService } from '../parfum.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
list :Product[]=[];
constructor(private service: ParfumService) { }

ngOnInit(): void {
  this.service.fetchAll()
    .subscribe(data => this.list = data);

}
}
