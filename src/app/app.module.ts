import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoComponent } from './components/auto/auto.component';
import { ManualComponent } from './components/manual/manual.component';
import { VerseComponent } from './components/verse/verse.component';

@NgModule({
  declarations: [AppComponent, AutoComponent, VerseComponent, ManualComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
