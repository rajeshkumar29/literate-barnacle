import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DegpegLiveComponent } from './components/degpeg-live/degpeg-live.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'degpeg', component: DegpegLiveComponent}
    ])
  ],
  declarations: [
    AppComponent,
    DegpegLiveComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
