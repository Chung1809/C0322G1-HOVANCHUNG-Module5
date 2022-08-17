import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardName: string;
  @Input() email: string;
  @Input() phone: string;
  constructor() { }

  ngOnInit(): void {
  }

}
