import { Component } from '@angular/core';
import { Ediclin } from './ediclin';

@Component ({
    selector: 'ediclin',
    templateUrl: './ediclin.template.html'
})

export class EditarclinicaComponent {
    public ediclin: Ediclin;

    constructor(){
        this.ediclin = new Ediclin('');
    }


}