import { Component } from '@angular/core';
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'week9t1';
  name:string="Monash";
  quantity:number=0;
  price:number=0;
  items=[];

  saveItem():void{
    this.items.push({
      name:this.name,
      quantity:this.quantity,
      price:this.price

    });
  }

  getCheapNumber():number{
    let count:number=0;
    for(let i =0;i<this.items.length;i++){
      if(this.items[i].price<10)
      count++;
    }
    return count;
  }

  deleteItem(index:number):void{
    this.items.splice(index,1)

  }

  deleteCheap():void{
    let i = 0;
    while(i<this.items.length){
    for(let i =0;i<this.items.length;i++){
      if(this.items[i].price<10)
      this.items.splice(i,1);
        else  
          i++;

    }

    }
  }

  }