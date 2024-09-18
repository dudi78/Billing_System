import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private API = 'http://localhost:8090';

  constructor(private http: HttpClient) {}

  public allClients(): Observable<any> {
    return this.http.get(`${this.API}/getClients`);
  }
  public registerClient(ClientData: any) {
    return this.http.post(this.API + '/registerClient', ClientData);
  }
  deleteClient(id: number): Observable<any> {
    return this.http.delete<any>(`${this.API}/deleteClient?id=${id}`);
  }

  updateClient(client: any): Observable<any> {
    return this.http.put(`${this.API}/UpdateClient`, client);
  }
}
