import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  constructor(private _httpService : HttpService, private _route : ActivatedRoute, private _router : Router) { }
  updatedProduct: any;
  id : any;
  errors : any;


  ngOnInit() {
    this.updatedProduct = {title: "", price: "", imageUrl: ""}
    this.getParams();
    this.getProduct(this.id);
  }
  
  getParams(){
    this._route.params.subscribe((params: Params) => {
      console.log(params);
      this.id = params["id"];
    })
  } 

  onUpdate(id,updatedProduct){
    console.log("id:",id);
    console.log(updatedProduct);
    let Observable = this._httpService.editProduct(id,updatedProduct);
    Observable.subscribe(data => {
      if(data["error"]){
        this.errors = data["error"]["errors"]
        console.log(this.errors)
      }else{
        this.updatedProduct = {title:"", price: "", imageUrl : ""}
        this._router.navigate(['/products'])
      }
    })
  }
  onDelete(id){
    let Observable = this._httpService.removeProduct(id);
    Observable.subscribe(data => {
      console.log("deleting",data);
      this._router.navigate(['/products'])
    })
  }
  getProduct(id){
    let Observable  = this._httpService.getProduct(id);
    Observable.subscribe(data => {
      console.log("Got product to be updated: ", data);
      this.updatedProduct = data["product"]
    })
    
  }


}
