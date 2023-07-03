import { Component, OnInit } from '@angular/core';
import { Stock } from './stock';

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list-bootstrap.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  // create an array of objects
  stocksList: Stock[] = [
    new Stock('AAPL', 100, 200, 100),
    new Stock('GOOG', 120, 125, 5),
    new Stock('MSFT', 78, 75, -3)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
