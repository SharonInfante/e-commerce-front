import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any[] = [];

  constructor(private productosService: ProductosService){}

  ngOnInit(): void {
      this.productosService.getProduct().subscribe(
        (products) => {
          this.products = products;
        }
      )
  }
}
