import { Component } from '@angular/core';
import { Fpropietario } from './fpropietario';

@Component ({
    selector: 'fpropietario',
    templateUrl: './fpropietario.template.html'
})

export class FipropietarioComponent {
    public fpropietario: Fpropietario;

    constructor(){
        this.fpropietario = new Fpropietario('');
    }
}