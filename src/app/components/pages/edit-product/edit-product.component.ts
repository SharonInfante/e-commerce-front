import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/service/product';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
  name = 'Actualizar';
  titleProduct = "Editar Producto";

  newProduct: Product = {
    id: 0,
    product_name : '',
    code: 0,
    price: 0,
    description: '',
    image: ''
  }

  constructor(private productosService: ProductosService, private router: Router, private route: ActivatedRoute){ }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.productosService.getDescription(id).subscribe(
      product => {
        this.newProduct = product;
      }
    );
  }

  editProduct() {
    const id = this.newProduct.id;
    const product: Product = {
      id: this.newProduct.id,
      product_name : this.newProduct.product_name,
      code: this.newProduct.code,
      price: this.newProduct.price,
      description: this.newProduct.description,
      image: this.newProduct.image
    };
    this.productosService.updateProduct(id, product).subscribe(
      product => {
        alert('Producto actualizado')
        this.router.navigate(['descripcion-producto', id]);
      }
    );
  }

}
