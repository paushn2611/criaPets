import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Importar componentes
import { NavigationComponent } from "./components/navigation/navigation.component";
import { LoginComponent } from "./components/login/login.component";
import { HomeComponent } from "./components/home/home.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { EspeciesComponent } from "./components/especies/especies.component";
import { FiclinicaComponent } from "./components/fichaclinica/ficlinica.component";

const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "login", component: LoginComponent },
    { path: "home", component: HomeComponent },
    { path: "formulario", component: FormularioComponent },
    { path: "especies", component: EspeciesComponent },
    { path: "fclinica", component: FiclinicaComponent},
    { path: "**", component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

