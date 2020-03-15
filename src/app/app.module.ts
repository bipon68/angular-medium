import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ImageComponentComponent } from './image-component/image-component.component';
import { ImageDirective } from './directive/image';
import { SampleService } from './sample.service';
import { GalleryComponent } from './gallery/gallery.component';
import { ItemOneObserComponent } from './observable/item-one-obser/item-one-obser.component';
import { ItemTwoObserComponent } from './observable/item-two-obser/item-two-obser.component';
import { ItemThreeObserComponent } from './observable/item-three-obser/item-three-obser.component';
import { HttpClientModule } from '@angular/common/http';

import {HttpModule} from '@angular/http';
import { TestDirective } from './bipon/test.directive';
import { ListComponent } from './list/list.component';
import { MessageProvider } from './test.message';

@NgModule({
  declarations: [
    AppComponent,
    ImageComponentComponent,
    ImageDirective,
    GalleryComponent,
    ItemOneObserComponent,
    ItemTwoObserComponent,
    ItemThreeObserComponent,
    TestDirective,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [SampleService, MessageProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
