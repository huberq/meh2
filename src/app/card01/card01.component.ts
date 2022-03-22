import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { LoadServiceService } from '../service/load-service.service';

@Component({
  selector: 'app-card01',
  templateUrl: './card01.component.html',
  styleUrls: ['./card01.component.css']
})
export class Card01Component implements OnInit,OnDestroy {
  @Input() public imageSrc: string;

  constructor(
    public loadingIndicator: LoadServiceService
  ) { 
    this.imageSrc="nic";
  }
  
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

}
