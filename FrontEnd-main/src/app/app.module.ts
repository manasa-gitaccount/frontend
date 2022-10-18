import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AboutComponent } from './Components/about/about.component';

import { ReaderUserFromComponent } from './Components/reader/reader.component';
import { AuthorOnlyComponent } from './Components/author-only/author-only.component';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { AuthorListComponent } from './Components/author-list/author-list.component';
import { FindPurchasedBooksComponent } from './Components/find-purchased-books/find-purchased-books.component';
import { BookListComponent } from './Components/book-list/book-list.component';
import { BookContentComponent } from './Components/book-content/book-content.component';
import { BooksByPaymentComponent } from './Components/books-by-payment/books-by-payment.component';
import { RefundComponent } from './Components/refund/refund.component';
import { SearchBooksComponent } from './Components/search-books/search-books.component';
import { UpdateBookComponent } from './Components/update-book/update-book.component';
import { UpdateTestComponent } from './Components/update-test/update-test.component';
import { LoginComponent } from './Components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './Components/Auth/auth.guard';

import { UserService } from './user.service';
import { RegisterComponent } from './Components/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    ReaderUserFromComponent,
    AuthorOnlyComponent,
    AddBookComponent,
    AuthorListComponent,
    FindPurchasedBooksComponent,
    BookListComponent,
    BookContentComponent,
    BooksByPaymentComponent,
    RefundComponent,
    LoginComponent,
    SearchBooksComponent,
    UpdateBookComponent,
    UpdateTestComponent,
    RegisterComponent

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule

  ],
  providers: [
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
