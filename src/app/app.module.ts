import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZoomOnHoverComponent } from './zoom-on-hover/zoom-on-hover.component';
import { ParallaxComponent } from './parallax/parallax.component';

@NgModule({
  declarations: [
    AppComponent,
    ZoomOnHoverComponent,
    ParallaxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
