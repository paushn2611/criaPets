import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing, appRoutingProviders } from "./app.routes";
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { EspeciesComponent } from './components/especies/especies.component';
import { FiclinicaComponent } from './components/fichaclinica/ficlinica.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';

@NgModule({
	declarations: [
		AppComponent,
		LoginComponent,
		NavigationComponent,
		TopNavbarComponent,
		HomeComponent,
		FormularioComponent,
		EspeciesComponent,
		FiclinicaComponent,
		UsuariosComponent
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
