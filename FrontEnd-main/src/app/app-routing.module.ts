import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './Components/about/about.component';
import { AddBookComponent } from './Components/add-book/add-book.component';
import { AuthorListComponent } from './Components/author-list/author-list.component';

import { AuthorOnlyComponent } from './Components/author-only/author-only.component';
import { BookContentComponent } from './Components/book-content/book-content.component';
import { BookListComponent } from './Components/book-list/book-list.component';
import { BooksByPaymentComponent } from './Components/books-by-payment/books-by-payment.component';
import { FindPurchasedBooksComponent } from './Components/find-purchased-books/find-purchased-books.component';
import { LoginComponent } from './Components/login/login.component';
import { ReaderUserFromComponent } from './Components/reader/reader.component';
import { RefundComponent } from './Components/refund/refund.component';
import { RegisterComponent } from './Components/register/register.component';
import { SearchBooksComponent } from './Components/search-books/search-books.component';
import { UpdateBookComponent } from './Components/update-book/update-book.component';
import { UpdateTestComponent } from './Components/update-test/update-test.component';

const routes: Routes = [{path:'about',component:AboutComponent},{path:'addbooks',component:AddBookComponent},
{path:'authorOnly',component:AuthorOnlyComponent},
{path:'buybook',component:ReaderUserFromComponent},
{path:'authorsList',component:AuthorListComponent},
{path:'purchasedBooks',component:FindPurchasedBooksComponent},
{path:'bookList',component:BookListComponent},
{path:'readBook',component:BookContentComponent},
{path:'payId',component:BooksByPaymentComponent},
{path:'refund',component:RefundComponent},
{path:'search',component:SearchBooksComponent},
{path:'updateBooks',component:UpdateBookComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:'updateTest',component:UpdateTestComponent}]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
