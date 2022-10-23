import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostItemComponent } from './post-item/post-item.component';
import { HistoryComponent } from './history/history.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DirectoryComponent } from './directory/directory.component';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import{HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';
import { CreatePostComponent } from './create-post/create-post.component';
import { SignInComponent } from './sign-in/sign-in.component';
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    PostItemComponent,
    HistoryComponent,
    NavBarComponent,
    DirectoryComponent,
    BookmarksComponent,
    UsersComponent,
    CreatePostComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
