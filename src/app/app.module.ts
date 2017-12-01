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
		FiclinicaComponent
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
