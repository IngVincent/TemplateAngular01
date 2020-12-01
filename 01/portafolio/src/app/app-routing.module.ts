import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DocumentacionComponent } from './pages/documentacion/documentacion.component';
import { ItemComponent } from './pages/item/item.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';

const app_routes: Routes = [
  { path:'home',component: PortafolioComponent },
  { path:'about',component: AboutComponent },
  { path:'item',component: ItemComponent },
  { path:'blog',component: BlogComponent},
  { path: 'contact',component: ContactComponent},
  { path: 'documentacion', component: DocumentacionComponent},
  { path:'**', pathMatch:'full', redirectTo: 'home' },


];

@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
