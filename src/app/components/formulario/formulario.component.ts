import { Component } from '@angular/core';
import { Usuario } from './usuario';
import { PeticionesService } from '../../services/peticiones.service';

@Component ({
    selector: 'formulario',
    templateUrl: './formulario.template.html',
    providers: [PeticionesService]
})

export class FormularioComponent {
    public usuario: Usuario;
    public usuarios: Array<Usuario>;
    public articulos;
    public post;

    constructor(
        private _peticionesService: PeticionesService
    ) {
        this.usuario = new Usuario('','','','');
        this.usuarios = [];
    }

    ngOnInit(){
        this._peticionesService.getArticulos().subscribe(
            result => {
                this.articulos = result;
                if(!this.articulos){
                    console.log('Empty!');
                } else {
                    console.log(this.articulos);
                }                
            },
            error => {
                var errorMessage = <any>error;
                console.log(errorMessage);
            }
        );
    }

    onSubmit() {
        console.log(this.usuario);
        this.usuarios.push(this.usuario);  
        this.usuario = new Usuario('','','','');      
        console.log(this.usuarios);
    }
}
