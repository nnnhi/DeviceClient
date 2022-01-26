import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { DeviceIconComponent } from './device-icon/device-icon.component';
import { ApiService } from './services/api.service';
import { RealApiService } from './services/api.real-service';
import { FakeApiService } from './services/api.fake-service';


@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    HomeComponent,
    DeviceDetailComponent,
    SearchBarComponent,
    DeviceIconComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule,
    NgbModule
  ],
  providers: [
    { provide: ApiService, useClass: FakeApiService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
