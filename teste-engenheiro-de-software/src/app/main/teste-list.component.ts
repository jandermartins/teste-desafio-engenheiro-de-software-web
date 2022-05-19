import { Component, OnInit } from "@angular/core";
import { Chamado } from "./chamado";
import { ChamadoService } from "./chamado.service";

@Component({
    templateUrl: './teste-list.component.html'
})
export class ChamadoListComponent implements OnInit {

    constructor(private chamadoService: ChamadoService) { }

    ngOnInit(): void {
        this.retrieveAll();
    }

    retrieveAll(): void {
        this.chamadoService.retrieveAll().subscribe({
            next: chamados => {
                this._chamados = chamados;
            },
            error: err => console.log('Error', err)
        });
    }

    _chamados: Chamado[] = [];

}
