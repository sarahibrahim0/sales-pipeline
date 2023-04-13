import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deal } from '../../interfaces/deal';
@Injectable({
  providedIn: 'root'
})
export class DealsService {

  constructor(private http: HttpClient) {

  }


  getDeals(): Observable<[Deal]> { return this.http.get<[Deal]>('https://my-json-server.typicode.com/mabukoush1/contacts/deals') }
}
