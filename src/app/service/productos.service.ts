import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiURL = 'http://127.0.0.1:8000/api/addProduct';

  constructor(private http: HttpClient) { }

  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.apiURL, product)
  }
}
