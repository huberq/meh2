import { Component, OnInit } from '@angular/core';
import { LoadServiceService } from '../service/load-service.service';

@Component({
  selector: 'app-card02',
  templateUrl: './card02.component.html',
  styleUrls: ['./card02.component.css']
})
export class Card02Component implements OnInit {

  constructor(
    public loadingIndicator: LoadServiceService
  ) { }

  ngOnInit(): void {
  }

}
