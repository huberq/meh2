import { Component, OnInit } from '@angular/core';
import { LoadServiceService } from '../service/load-service.service';

@Component({
  selector: 'app-card01',
  templateUrl: './card01.component.html',
  styleUrls: ['./card01.component.css']
})
export class Card01Component implements OnInit {

  constructor(
    public loadingIndicator: LoadServiceService
  ) { }

  ngOnInit(): void {
  }

}
