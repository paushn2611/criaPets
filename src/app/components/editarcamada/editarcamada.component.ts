import { Component } from '@angular/core';
import { Edicam } from './edicam';

@Component ({
    selector: 'edicam',
    templateUrl: './edicam.template.html'
})

export class EditarcamadaComponent {
    public edicam: Edicam;

    constructor(){
        this.edicam = new Edicam('');
    }


}