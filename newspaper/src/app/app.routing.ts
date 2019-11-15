import {Routes} from '@angular/router'
import { HomeprincipalComponent } from './div/homeprincipal/homeprincipal.component';
import { TopnewsComponent } from './div/topnews/topnews.component';


export const ROUTES: Routes = [
 
    {path:'home', component:HomeprincipalComponent},
    {path:'topnews', component:TopnewsComponent},
    {path:'', pathMatch:'full', redirectTo:'home'},
    {path:'**', pathMatch:'full', redirectTo:'home'}

];