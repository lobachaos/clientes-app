import {Injectable} from '@angular/core';
import {Cliente} from "./clientes/cliente";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  save(cliente: Cliente): Observable<Cliente> {
    return this.http.post('http://localhost:8080/api/clientes', cliente)
  }

  getCliente(): Cliente {
    let cliente: Cliente = new Cliente()
    cliente.nome = "Teste"
    cliente.cpf = "123456"
    return cliente
  }
}
