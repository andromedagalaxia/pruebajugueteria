import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: []
})
export class ProductsComponent implements OnInit, OnDestroy {
// llamar al private dentro del constructo es inyeccion de dependencias
 
misdatos: any [] = [];

constructor(private http:HttpClient) {
    this.http.get('assets/data/info.json').subscribe((data:any) =>{
      this.misdatos = data; 
      console.log('Mis datos leidos dentro del get  suscribe',this.misdatos);

    });

    console.log('Mis datos leidos dentro del get  suscribe',this.misdatos);

   }

  ngOnInit() {
  }
ngOnDestroy(){

}
}
