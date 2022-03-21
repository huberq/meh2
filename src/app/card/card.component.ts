import { Component, OnInit } from '@angular/core';
import { LoadServiceService } from '../service/load-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor(
    public loadingIndicator: LoadServiceService
  ) { 

    loadingIndicator.Set("K1",false);
    loadingIndicator.Set("K2",false);
  }

  ngOnInit(): void {
  }
  
  doAction(): void{
    this.loadingIndicator.loading.next("dddpa");
    this.loadingIndicator.Toggle('K1');
    this.loadingIndicator.Toggle('K2');
  }
}
