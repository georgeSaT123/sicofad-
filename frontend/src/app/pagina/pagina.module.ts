import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { NbActionsModule, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbTabsetModule, NbTreeGridModule, NbUserModule} from '@nebular/theme';
import { PaginaRoutingModule } from './pagina-routing.module';
import { FooterComponent } from './footer/footer.component';
import { DelegadosComponent } from './formatos/delegados/delegados.component';
import { SilabosComponent } from './formatos/silabos/silabos.component';
import { BienvenidaComponent } from './bienvenida/bienvenida.component';
import { DocenteComponent } from './Registro/docente/docente.component';
import { FormsModule } from '@angular/forms';
import { CursosComponent } from './cursos/cursos.component';


@NgModule({
  declarations: [HeaderComponent, InicioComponent, FooterComponent, DelegadosComponent, SilabosComponent, BienvenidaComponent, DocenteComponent, CursosComponent ],
  imports: [
    CommonModule,
    FormsModule,
    NbUserModule,
    NbLayoutModule,
    PaginaRoutingModule,
    NbActionsModule,
    NbIconModule,
    NbMenuModule,
    NbSidebarModule,
    NbCardModule,
    NbTreeGridModule,
    NbInputModule,
    NbTabsetModule,
    NbButtonModule
  ]
})
export class PaginaModule { }
