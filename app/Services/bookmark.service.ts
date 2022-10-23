import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookmarkService {

  bookmarklist: any[]=[];
  constructor() { }

  getBookmarks() {
    return this.bookmarklist;
  }

  addToBookmarks(bookmark:any) {
    this.bookmarklist.push(bookmark);
    return this.bookmarklist;
  }

  clearBookmarks() {
    this.bookmarklist = [];
    return this.bookmarklist;
  }
}
