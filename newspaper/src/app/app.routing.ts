import {Routes} from '@angular/router'
import { HomeprincipalComponent } from './div/homeprincipal/homeprincipal.component';
import { TopnewsComponent } from './div/topnews/topnews.component';
import { CardNewComponent } from './div/card-new/card-new.component';


export const ROUTES: Routes = [
 
    {path:'home', component:HomeprincipalComponent},
    {path:'topNews', component:TopnewsComponent},
    {path:'noticiaDetalles/:id', component:CardNewComponent},
    {path:'', pathMatch:'full', redirectTo:'home'},
    {path:'**', pathMatch:'full', redirectTo:'home'}

];