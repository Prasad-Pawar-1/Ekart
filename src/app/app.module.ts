import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Home/header/header.component';
import { MainComponent } from './Home/main/main.component';
import { FooterComponent } from './Home/footer/footer.component';
import { TopheaderComponent } from './Home/topheader/topheader.component';
import { HomeComponent } from './Home/home.component';
import { ProductComponent } from './product/product.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './Home/header/search/search.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    TopheaderComponent,
    ProductComponent,
    AboutComponent,
    ContactComponent,
    SearchComponent,
    
    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
