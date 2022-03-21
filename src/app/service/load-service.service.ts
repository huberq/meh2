import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadServiceService {

  private mapa = new Map<String,BehaviorSubject<boolean>>();

  public loading = new Subject<String>();
  public loading$ = this.loading.asObservable();
   constructor() {
     this.loading.next("START");
    }

  Set(k:String, v: boolean):void{
    let z = new BehaviorSubject<boolean>(v);
    this.mapa.set(k,z);
  }

  Change(k:String, v: boolean):void{
    this.mapa.get(k)?.next(v);
  }

  Toggle(k:String):void{
    const x = this.mapa.get(k);
    if (x?.getValue())    this.mapa.get(k)?.next(false);
    else this.mapa.get(k)?.next(true);
  }

  Get(k: String): BehaviorSubject<boolean> | undefined{
    return this.mapa.get(k);
  }
}
