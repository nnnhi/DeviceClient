import { Component, EventEmitter, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  term : string = ''

  @Output() onChangeTermEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onChange(term) {    
    this.onChangeTermEvent.emit(term);    
  }

  

}
