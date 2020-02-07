import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  items = [{
    id: 1,
    name: "First",
    description: "First accordion"
}, {
    id: 2,
    name: "Second",
    description: "Second accordion"
}, {
    id: 3,
    name: "Third",
    description: "Third accordion"
}];

addItem() {
    this.items.push({
        id: this.items.length + 1,
        name: "Item #" + (this.items.length + 1),
        description: "Item #" + (this.items.length + 1) + " accordion"
    });
}

}
