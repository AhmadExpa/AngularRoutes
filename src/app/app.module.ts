import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AboutComponent } from './components/pages/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Page404Component } from './components/pages/page404/page404.component';
import { BookingComponent } from './components/pages/booking/booking.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

import { HoverDirective } from './directives/hover.directive/hover.directive';
import { EmailValidatorDirective } from './directives/email.validator.directive/email-validator.directive';
import { LoginComponent } from './components/pages/login/login.component';
import { RouteConfigToken } from './services/other/route.config.service';
import { HeaderComponent } from './components/header/header.component';
import { SearchComponent } from './components/search/search.component';
import { SearchFilterPipe } from './pipes/search.filter/search-filter.pipe';
import { GlobalErrorHandlerService } from './services/Error Handler/global-error-handler.service';
// import { AdminModule } from './Modules/Admin Module/admin.module'; // for lazy loading

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    Page404Component,
    BookingComponent,
    ContactComponent,
    HoverDirective,
    EmailValidatorDirective,
    LoginComponent,
    HeaderComponent,
    SearchComponent,
    SearchFilterPipe,
  ],
  imports: [
    ReactiveFormsModule, // Reactive Forms
    BrowserModule,
    // AdminModule, // for lazy loading

    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: RouteConfigToken,
      useValue: { path: 'home' },
    },
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandlerService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    console.log('App Module Loaded');
  }
}
