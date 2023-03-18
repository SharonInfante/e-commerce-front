import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { AddProductComponent } from './components/pages/add-product/add-product.component';
import { DescriptionProductComponent } from './components/pages/description-product/description-product.component';
import { EditProductComponent } from './components/pages/edit-product/edit-product.component';
import { HomeComponent } from './components/pages/home/home.component';
import { QuestionsComponent } from './components/pages/questions/questions.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { SesisonComponent } from './components/pages/sesison/sesison.component';
import { TermsComponent } from './components/pages/terms/terms.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'sobre-nosotros', component: AboutUsComponent},
  {path: 'preguntas-frecuentes', component: QuestionsComponent},
  {path: 'terminos-y-condiciones', component: TermsComponent},
  {path: 'iniciar-sesion', component: SesisonComponent},
  {path: 'registro', component: RegisterComponent},
  {path: 'añadir-producto', component: AddProductComponent},
  {path: 'descripcion-producto', component:DescriptionProductComponent},
  {path: 'editar-producto', component:EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
