import { Component } from '@angular/core';
import { Ediprop } from './ediprop';

@Component ({
    selector: 'ediprop',
    templateUrl: './ediprop.template.html'
})

export class EditarpropietarioComponent {
    public ediprop: Ediprop;

    constructor(){
        this.ediprop = new Ediprop('');
    }


}