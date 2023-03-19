import { Component } from '@angular/core';
import { Product } from 'src/app/service/product';
import { ProductosService } from 'src/app/service/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  name = 'Enviar';
  titleProduct = "Añadir Producto";

  newProduct: Product = {
    id: 0,
    product_name : '',
    code: 0,
    price: 0,
    description: '',
    image: ''
  }

  constructor(private productosService: ProductosService, private router: Router){}

  addProduct(){
    this.productosService.addProduct(this.newProduct).subscribe(
      product => {
        alert('Producto añadido con exito');
        this.router.navigate(['/descripcion-producto', product.id]);
      },
      err => {
        alert("Error.");
      }
    )
  }

  onSubmit() {
    this.clearForm();
  }

  clearForm() {
    this.newProduct = {
      id: 0,
      product_name : '',
      code: 0,
      price: 0,
      description: '',
      image: ''
    };
  }
}
