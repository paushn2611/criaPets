import { Component } from '@angular/core';
import { Ediserv } from './ediserv';

@Component ({
    selector: 'ediserv',
    templateUrl: './ediserv.template.html'
})

export class EditarservicioComponent {
    public ediserv: Ediserv;

    constructor(){
        this.ediserv = new Ediserv('');
    }


}