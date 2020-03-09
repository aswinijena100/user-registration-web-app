import {  Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ManageAccountService } from "../manage-account.service";
import { User } from '../../../entity/user';

@Component({
  selector: 'app-set-up-account',
  templateUrl: './set-up-account.component.html',
  styleUrls: ['./set-up-account.component.scss']
})
export class SetUpAccountComponent implements OnInit {
  user: User = new User();
  //profileAutoCompleteData: any = {};
 
  @ViewChild('setupaccount',{ static: false }) form: any;

  constructor(private manageAccountService: ManageAccountService,private router:Router, private route: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit() {
  }

 registerUser(){
  if (this.form.invalid ) {
    return;
  }else{
    console.log(this.form.value)
    this.manageAccountService.setUpAccount(this.form.value).subscribe(data => {
      this.toastr.success('Profile Created Successfully');
      this.router.navigate(['/userProfile'])
     // this.successMessage = "Location Added successfully."
    }, error => {
      console.log(error);
      this.toastr.error('Error', error.error.message);
      //this.errorMessage = error.error.message;
    })
  }
 }

}
