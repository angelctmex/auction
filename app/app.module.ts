import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import ApplicationComponent from './components/application/application';
import StarsComponent from './components/stars/stars';
import CarouselComponent from './components/carousel/carousel';
import FooterComponent from  './components/footer/footer';
import SearchComponent from './components/search/search';
import NavbarComponent from './components/navbar/navbar';
import {ProductService} from "./services/product-service";


@NgModule({
    imports:      [ BrowserModule ],
    declarations: [ ApplicationComponent,
                    StarsComponent,
                    NavbarComponent,
                    CarouselComponent,
                    FooterComponent,
                    SearchComponent
                  ],
    providers:    [ProductService],
    bootstrap:    [ ApplicationComponent ]
})
export class AppModule { }
