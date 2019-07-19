import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private _httpService : HttpService) { }
  products : any= {};
  ngOnInit() {
    this.getProducts();
  }
  getProducts(){
    let Observable = this._httpService.getProducts();
    Observable.subscribe(data => {
      console.log("Data from getProducts: ",data);
      this.products = data;
    })
  }
  onDelete(id){
    let Observable = this._httpService.removeProduct(id);
    Observable.subscribe(data => {
      console.log("Data from onDelete: ",data);
      this.getProducts();
    })
  }

}
