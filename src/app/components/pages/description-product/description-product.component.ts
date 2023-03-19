import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/service/product';
import { ProductosService } from 'src/app/service/productos.service';

@Component({
  selector: 'app-description-product',
  templateUrl: './description-product.component.html',
  styleUrls: ['./description-product.component.css']
})
export class DescriptionProductComponent {
  products: Product[] = [];

  constructor(private route: ActivatedRoute, private productosService: ProductosService,  private router: Router){}

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.productosService.getDescription(id).subscribe(
      (product)=> {
      this.products.push(product);
    });
  }

  onDelete(id: number) {
    const confirmDelete = confirm('¿Desea eliminar este producto?');
    if (confirmDelete) {
      this.productosService.deleteProduct(id).subscribe(() => {
        alert('Producto eliminado exitosamente');
        this.router.navigate(['/'])
      });
    }
  }
}
