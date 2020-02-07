import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TitleService } from './title.service';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule],
  declarations: [ AppComponent, HelloComponent ],
  providers: [
    {provide: APP_BASE_HREF, useValue : '/' },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => { },
      multi: true,
      deps: [TitleService]
    }
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
