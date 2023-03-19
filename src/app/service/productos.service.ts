import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  private apiURL = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(`${this.apiURL}/addProduct`, product).pipe(
      map(response => response as Product)
    );
  }

  getProduct(): Observable<Product[]>{
    return this.http.get<Product[]>(`${this.apiURL}`).pipe(
      map(response => response as Product[])
    );
  }

  getDescription(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.apiURL}/descriptionProduct/${id}`).pipe(
      map(response => response as Product)
    );
  }

  edit(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.apiURL}/editProduct/${id}`).pipe(
      map(response => response as Product)
    );
  }

  updateProduct(id: number, product: Product): Observable<Product>{
    return this.http.put<Product>(`${this.apiURL}/editProduct/${id}`, product);
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiURL}/deleteProduct/${id}`);
  }
}
