import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {
  @Input()
  photoCover:string=""
  @Input()
  cardTitle:string=""
  @Input()
  cardDescription:string="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eleifend placerat ante eu ornare. Nullam magna nisi, accumsan a euismod nec, fringilla vel mi."
  @Input()
  id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
