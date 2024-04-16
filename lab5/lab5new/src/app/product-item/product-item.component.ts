import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Product, products } from '../products';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  products = products;
  @Input() selectedProduct:string | undefined;

  like(products:Product){
    products.likes+=1;
  }

  remove(product:Product){
    for(let i=0; i<products.length; i++){
      if(products[i]==product){
        delete products[i];
        break;
      }
    }
    }


    share(link:string|URL|undefined) {
      window.open("https://wa.me/77017219758" + link,'menubar=off, toolbar=off');
    }
    kaspi(a:string|URL|undefined) {
      window.open(a);
    }

    onNotify() {
      window.alert('You will be notified when the product goes on sale');
    }


}
