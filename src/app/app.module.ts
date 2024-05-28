import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModulesModule } from './shared-modules/shared-modules.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { InterceptorService } from './interceptors/interceptor.service';
import { ErrorInterceptor } from './interceptors/errorInterceptor.service';
import { ToastrModule, provideToastr } from 'ngx-toastr';
import { ErrorpageComponent } from './features/errorpage/errorpage.component';
import { HeaderComponent } from './features/shared/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ErrorpageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModulesModule,
    HttpClientModule,
 
    ToastrModule.forRoot()
  ],
  exports:[],
  providers:  [

    provideToastr({
      timeOut: 5000,
      positionClass: 'toast-center-center',
      preventDuplicates: true,
      progressBar: true
    }),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
