import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks/bookmarks.component';
import { DirectoryComponent } from './directory/directory.component';
import { HistoryComponent } from './history/history.component';
import { PostItemComponent } from './post-item/post-item.component';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { SignInComponent } from './sign-in/sign-in.component';
const routes: Routes = [
{path:'',component:PostsComponent},
{path:'History', component:HistoryComponent},
{path: 'PostItem', component:PostItemComponent},
{path:'posts',component:PostsComponent},
{path: 'Directory', component:DirectoryComponent},
{path: 'Bookmarks', component:BookmarksComponent},
{path: 'Users', component:UsersComponent},
{path: 'Sign-in', component:SignInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
