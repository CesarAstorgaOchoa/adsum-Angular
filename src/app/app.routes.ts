import { Routes } from '@angular/router';
import { CapturaComponent } from './pages/captura/captura.component';
import { ListaCapturaComponent } from './pages/lista-captura/lista-captura.component';

export const routes: Routes = [
    {
        path:'',
        component: CapturaComponent
    },
    {
        path:'lista',
        component: ListaCapturaComponent
    },
    {
        path:'""',
        redirectTo:'', pathMatch:'full'
    }

];
