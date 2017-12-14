import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from "./app.routes";
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { EspeciesComponent } from './components/especies/especies.component';
import { FiclinicaComponent } from './components/fichaclinica/ficlinica.component';
import { FiejemplarComponent } from './components/fichaejemplar/fiejemplar.component';
import { FipropietarioComponent } from './components/fichapropietario/fipropietario.component';
import { FicamadaComponent } from './components/fichacamadas/ficamada.component';
import { FiserviciosComponent } from './components/fichaservicios/fiservicios.component';
import { InicioejemplarComponent } from './components/inicioejemplar/inicioejemplar.component';
import { IniciopropietarioComponent } from './components/iniciopropietario/iniciopropietario.component';
import { InicioclinicaComponent } from './components/inicioclinica/inicioclinica.component';
import { IniciocamadaComponent } from './components/iniciocamada/iniciocamada.component';
import { InicioservicioComponent } from './components/inicioservicios/inicioservicio.component';
import { VercamadaComponent } from './components/vercamada/vercamada.component';
import { VerclinicaComponent } from './components/verclinica/verclinica.component';
import { VerejemplarComponent } from './components/verejemplar/verejemplar.component';
import { VerpropietarioComponent } from './components/verpropietario/verpropietario.component';
import { VerservicioComponent } from './components/verservicio/verservicio.component';
import { EditarcamadaComponent } from './components/editarcamada/editarcamada.component';
import { EditarclinicaComponent } from './components/editarclinica/editarclinica.component';
import { EditarejemplarComponent } from './components/editarejemplar/editarejemplar.component';
import { EditarpropietarioComponent } from './components/editarpropietario/editarpropietario.component';
import { EditarservicioComponent } from './components/editarservicio/editarservicio.component';
import { FireservaComponent } from './components/fichareserva/fireserva.component';


@NgModule({
	declarations: [
		AppComponent,
		MainComponent,
		LoginComponent,
		NavigationComponent,
		TopNavbarComponent,
		HomeComponent,
		FormularioComponent,
		EspeciesComponent,
		FiclinicaComponent,
		FiejemplarComponent,
		FipropietarioComponent,
		FicamadaComponent,
		FireservaComponent,
		FiserviciosComponent,
		InicioejemplarComponent,
		IniciopropietarioComponent,
		InicioclinicaComponent,
		IniciocamadaComponent,
		InicioservicioComponent,
		VercamadaComponent,
		VerclinicaComponent,
		VerejemplarComponent,
		VerpropietarioComponent,
		VerservicioComponent,
		EditarcamadaComponent,
		EditarclinicaComponent,
		EditarejemplarComponent,
		EditarpropietarioComponent,
		EditarservicioComponent
	

	],
	imports: [
		BrowserModule,
		FormsModule,
		HttpModule,
		routing
	],
	providers: [appRoutingProviders],
	bootstrap: [AppComponent]
})

export class AppModule { }
