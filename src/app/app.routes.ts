import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//Importar componentes
import { NavigationComponent } from "./components/navigation/navigation.component";
import { LoginComponent } from "./components/login/login.component";
import { MainComponent } from "./components/main/main.component";
import { HomeComponent } from "./components/home/home.component";
import { FormularioComponent } from "./components/formulario/formulario.component";
import { EspeciesComponent } from "./components/especies/especies.component";
import { FiclinicaComponent } from "./components/fichaclinica/ficlinica.component";
import { FiejemplarComponent } from "./components/fichaejemplar/fiejemplar.component";
import { FipropietarioComponent } from "./components/fichapropietario/fipropietario.component";
import { FicamadaComponent } from "./components/fichacamadas/ficamada.component";
import { FiserviciosComponent } from "./components/fichaservicios/fiservicios.component";
import { InicioejemplarComponent } from "./components/inicioejemplar/inicioejemplar.component";
import { IniciopropietarioComponent } from "./components/iniciopropietario/iniciopropietario.component";
import { InicioclinicaComponent } from "./components/inicioclinica/inicioclinica.component";
import { IniciocamadaComponent } from "./components/iniciocamada/iniciocamada.component";
import { InicioservicioComponent } from "./components/inicioservicios/inicioservicio.component";
import { VercamadaComponent } from "./components/vercamada/vercamada.component";
import { VerclinicaComponent } from "./components/verclinica/verclinica.component";
import { VerejemplarComponent } from "./components/verejemplar/verejemplar.component";
import { VerpropietarioComponent } from "./components/verpropietario/verpropietario.component";
import { VerservicioComponent } from "./components/verservicio/verservicio.component";
import { EditarservicioComponent } from "./components/editarservicio/editarservicio.component";
import { EditarclinicaComponent } from "./components/editarclinica/editarclinica.component";
import { EditarpropietarioComponent } from "./components/editarpropietario/editarpropietario.component";
import { EditarejemplarComponent } from "./components/editarejemplar/editarejemplar.component";
import { EditarcamadaComponent } from "./components/editarcamada/editarcamada.component";
import { FireservaComponent } from "./components/fichareserva/fireserva.component";


const appRoutes: Routes = [
    { path: "", component: HomeComponent },
    { path: "main", component: MainComponent },
    { path: "login", component: LoginComponent },
    { path: "home", component: HomeComponent },
    { path: "formulario", component: FormularioComponent },
    { path: "especies", component: EspeciesComponent },
    { path: "fclinica", component: FiclinicaComponent},
    { path: "fejemplar", component: FiejemplarComponent},
    { path: "fpropietario", component: FipropietarioComponent},
    { path: "fcamada", component: FicamadaComponent},
    { path: "freserva", component: FireservaComponent},
    { path: "fservicios", component: FiserviciosComponent},
    { path: "inicioejem", component: InicioejemplarComponent},
    { path: "inicioprop", component: IniciopropietarioComponent},
    { path: "inicioclin", component: InicioclinicaComponent},
    { path: "iniciocam", component: IniciocamadaComponent},
    { path: "inicioser", component: InicioservicioComponent},
    { path: "vercam", component: VercamadaComponent},
    { path: "verclin", component: VerclinicaComponent},
    { path: "verejem", component: VerejemplarComponent},
    { path: "verprop", component: VerpropietarioComponent},
    { path: "verserv", component: VerservicioComponent},
    { path: "ediserv", component: EditarservicioComponent},
    { path: "ediclin", component: EditarclinicaComponent},
    { path: "ediprop", component: EditarpropietarioComponent},
    { path: "ediejem", component: EditarejemplarComponent},
    { path: "edicam", component: EditarcamadaComponent},

    { path: "**", component: HomeComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);

