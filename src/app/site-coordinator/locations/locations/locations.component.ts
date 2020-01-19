import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  public data : any;

  constructor() { 
    this.data = [
      {'name':'Anil','email':'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida, UP, India' },
      {'name':'Anil', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
      {'name':'Sunil', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
      {'name':'Alok', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
      {'name':'Tinku', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
      {'name':'XYZ', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
      {'name':'asas', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
      {'name':'erer', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' },
      {'name':'jhjh', 'email' :'anil.singh581@gmail.com', 'age' :'34', 'city':'Noida' }
     ];
  }

  ngOnInit() {
  }

}
