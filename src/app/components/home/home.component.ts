import { Component } from '@angular/core';

@Component ({
    selector: 'home',
    templateUrl: './home.template.html'
})

export class HomeComponent {
    public titulo: string;

    constructor(){
        this.titulo = 'Página Principal';
    }

    ngOnInit(){
        console.log('Se ha cargado el componente <Home>');
    }
}