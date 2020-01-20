import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-coordinator',
  templateUrl: './site-coordinator.component.html',
  styleUrls: ['./site-coordinator.component.scss']
})
export class SiteCoordinatorComponent implements OnInit {

  opencloseNavval:boolean= false;

  constructor() { }

  ngOnInit() {
  }

  opencloseNav(){
    this.opencloseNavval =!this.opencloseNavval;
  }
}
