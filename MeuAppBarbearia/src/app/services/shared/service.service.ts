import { Service } from './service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Service[]>('http://localhost:3000/services').toPromise();
  }

  getById(id: number) {
    return this.http.get<Service[]>(`http://localhost:3000/services/${id}`).toPromise();
  }

}
