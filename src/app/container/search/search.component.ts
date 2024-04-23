import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchText: string ='' ;

  //Optional 2nd argument of the @ViewChild
  //1. read : use it to read the difference token from the queired elements
  //2. static : Determines when the query is resolved
  //            True is when the view is initialized (before the first change detection) for the first time.
  //            False if we want it to be resolved after every change detection
  @ViewChild("searchInput") searchInputElement:ElementRef;

  //1. Create event
  @Output() SearchTextChange:EventEmitter<string>=new EventEmitter<string>;

  updateSearchText(){
      this.searchText = this.searchInputElement.nativeElement.value;
      this.SearchTextChange.emit(this.searchText);
  }



//  inputChanged(){
//   this.SearchTextChange.emit(this.searchText);
//  }
}
