import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ErrorModule } from './error/error.module';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { ConfigurationsService } from './shared/services/configurations.service';

@NgModule({
  declarations: [AppComponent],
  imports: [AppRoutingModule, BrowserModule, BrowserAnimationsModule, ErrorModule, HttpClientModule, NavbarModule],
  providers: [ConfigurationsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
