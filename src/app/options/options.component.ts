import { Component, Input } from '@angular/core';
import { Options } from '../entities';
import { ParfumService } from '../parfum.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent {
  @Input({ required: true })
  options: Options [] = [];
  
  }

