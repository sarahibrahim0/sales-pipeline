import { Deal } from './../../interfaces/deal';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss']
})
export class DealComponent implements OnInit {

  @Input() deal : Deal

  constructor() { }

  ngOnInit(): void {
  }

}
