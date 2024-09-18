import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {
  private API = 'http://localhost:8090';
  constructor(private http: HttpClient) {}


}
