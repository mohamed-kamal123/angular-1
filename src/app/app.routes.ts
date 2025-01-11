import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { NotfindComponent } from './notfind/notfind.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path:'',redirectTo:'home', pathMatch:'full',title:'home page'},
    {path:'home',component:HomeComponent,title:'Home'},
    {path:'about',component:AboutComponent,title:'about'},
    {path:'portfolio',component:PortfolioComponent,title:'portfolio'},
    {path:'contact',component:ContactComponent,title:'contact'},
    {path:'**',component:NotfindComponent,title:'ERROR'}
];
