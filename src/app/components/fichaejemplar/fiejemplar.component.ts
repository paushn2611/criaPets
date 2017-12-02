import { Component } from '@angular/core';
import { Fejemplar } from './fejemplar';

@Component ({
    selector: 'fejemplar',
    templateUrl: './fejemplar.template.html'
})

export class FiejemplarComponent {
    public fejemplar: Fejemplar;

    constructor(){
        this.fejemplar = new Fejemplar('');
    }


}