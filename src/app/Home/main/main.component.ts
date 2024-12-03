import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  item: number=10;
  name: string="john doe";
  product={
  name: "Iphone 13",
  price: 999,
  pImage:"/assets/images/x_logo.png",
  count:0
}
onClickInput(event: any){
  this.name=event.target.value;
  console.log(event.target.value);
}
decrement(){
  if(this.product.count>0){
    this.product.count--;
  }

}
increment(){
  if(this.product.count<this.item)
{this.product.count++;}
}




}
