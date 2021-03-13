import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { ProductResponseModel } from 'northwind/src/app/models/productResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl='https://localhost:4400/api/products/getall';

  constructor(private httpClient : HttpClient) { }

  getProducts():Observable<ResponseModel>{
   return this.httpClient.get<ProductResponseModel>(this.apiUrl);

    }

}
