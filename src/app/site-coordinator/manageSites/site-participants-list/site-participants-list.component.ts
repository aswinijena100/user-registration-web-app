import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-participants-list',
  templateUrl: './site-participants-list.component.html',
  styleUrls: ['./site-participants-list.component.scss']
})
export class SiteParticipantsListComponent implements OnInit {

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

   myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }

}
