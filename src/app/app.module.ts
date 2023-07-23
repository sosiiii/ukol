import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActionBarComponent } from './action-bar/action-bar.component';
import { ImagesContainerComponent } from './images-container/images-container.component';
import { PhotoItemComponent } from './images-container/components/photo-item/photo-item.component';
import { HttpClientModule } from "@angular/common/http";
import { RouterModule, Routes } from "@angular/router";

const appRoutes: Routes = [
  {path: "**", component: ImagesContainerComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ActionBarComponent,
    ImagesContainerComponent,
    PhotoItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
