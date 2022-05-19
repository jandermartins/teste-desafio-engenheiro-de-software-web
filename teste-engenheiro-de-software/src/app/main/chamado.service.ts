import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Chamado } from "./chamado";

@Injectable({
    providedIn: 'root'
})
export class ChamadoService {

    private chamadoUrl: string = 'https://teste-eng-api.herokuapp.com/im-day';

    constructor(private httpClient: HttpClient) {}

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
      }


    retrieveAll(): Observable<Chamado[]> {
        return this.httpClient.get<Chamado[]>(this.chamadoUrl);
    }
}