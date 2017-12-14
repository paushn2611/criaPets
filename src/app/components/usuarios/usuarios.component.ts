import { Component } from '@angular/core';
import { Usuario } from './usuario';

@Component ({
    selector: 'usuarios',
    templateUrl: './usuarios.template.html'
})

export class UsuariosComponent {
    public usuario: Usuario;

    constructor(){
        this.usuario = new Usuario('','','',true);
    }


}