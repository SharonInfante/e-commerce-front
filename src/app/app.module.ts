import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutUsComponent } from './components/pages/about-us/about-us.component';
import { QuestionsComponent } from './components/pages/questions/questions.component';
import { TermsComponent } from './components/pages/terms/terms.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { SesisonComponent } from './components/pages/sesison/sesison.component';
import { RegisterComponent } from './components/pages/register/register.component';
import { AddProductComponent } from './components/pages/add-product/add-product.component';
import { EditProductComponent } from './components/pages/edit-product/edit-product.component';
import { DescriptionProductComponent } from './components/pages/description-product/description-product.component';
import { ProductosService } from './service/productos.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutUsComponent,
    QuestionsComponent,
    TermsComponent,
    ButtonsComponent,
    SesisonComponent,
    RegisterComponent,
    AddProductComponent,
    EditProductComponent,
    DescriptionProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
