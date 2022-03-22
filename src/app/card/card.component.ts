import { Component, OnInit } from '@angular/core';
import { LoadServiceService } from '../service/load-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
public tableX = [1,2,3,4,5];
  constructor(
    public loadingIndicator: LoadServiceService
  ) { 

    // loadingIndicator.Set("K1",false);
    // loadingIndicator.Set("K2",false);
    for (var val of this.tableX){
      loadingIndicator.Set('qq'+val,false);
    }
  
  }

  ngOnInit(): void {
  }
  
  doAction(): void{
    this.loadingIndicator.loading.next("dddpa");
    // this.loadingIndicator.Toggle('K1');
    // this.loadingIndicator.Toggle('K2');
    for (var val of this.tableX){
      this.loadingIndicator.Toggle('qq'+val);
    }


  }
}
