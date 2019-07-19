import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})
export class ProductCreationComponent implements OnInit {

  constructor(private _httpService : HttpService, private _router : Router) { }
  newProduct : any;
  errors : any;

  ngOnInit() {
    this.newProduct = {title:"", price: "", imageUrl : ""}
  }

  onCreate(newProduct){
    console.log(newProduct);
    let Observable = this._httpService.addProduct(this.newProduct);
    Observable.subscribe( data => {
      console.log("Data from onCreate(): ",data)
      if(data["error"]){
        this.errors = data["error"]["errors"]
        console.log(this.errors)
      }else{
        this.newProduct = {title:"", price: "", imageUrl : ""}
        this._router.navigate(['/products'])
      }
    })
  }


}
