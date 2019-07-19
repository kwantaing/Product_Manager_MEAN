import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) { }

  addProduct(newProduct){
    console.log("In service: ",newProduct);
    return this._http.post('/products/new',newProduct);
  }

  getProducts(){
    return this._http.get('/products');
  }
  removeProduct(id){
    return this._http.delete(`/products/${id}`);
  }
  editProduct(id,updatedProduct){
    return this._http.put(`/products/${id}`,updatedProduct);
  }
  getProduct(id){
    return this._http.get(`/products/${id}`);
  }
}
