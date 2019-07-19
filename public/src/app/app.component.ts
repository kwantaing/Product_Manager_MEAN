import { Component } from '@angular/core';

import { EditProductComponent } from './edit-product/edit-product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends EditProductComponent {
  title = 'hello!';

  
}
