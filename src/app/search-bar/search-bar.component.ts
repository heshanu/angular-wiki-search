import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  term='';

  constructor() { }

  ngOnInit(): void {
  }

  onC(event:any){
      this.term=event.target.value;
  }

  onFormSubmit($event:any){
    $event.preventDefault();
    console.log(this.term);
  }
}
