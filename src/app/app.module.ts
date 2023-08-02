import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { JokeListComponent } from './joke-list/joke-list.component';
import { PaginationComponent } from './pagination/pagination.component';
import { FocusDirective } from './shared/directives/focus.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    JokeListComponent,
    PaginationComponent,
    FocusDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
