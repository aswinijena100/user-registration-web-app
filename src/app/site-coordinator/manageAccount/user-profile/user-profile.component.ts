import { Component, OnInit, ViewChild } from '@angular/core';
import { ManageAccountService } from "../manage-account.service";
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../entity/user';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  user: User = new User();
  profileAutoCompleteData: any = {};
  errorMessage: string = '';
  successMessage: String = '';

  @ViewChild('profile',{ static: false }) form: any;

    constructor(private manageAccountService: ManageAccountService, private route: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit() {
    this.getProfileDetails();
  }

  getProfileDetails() {
 
    this.manageAccountService.getProfileData().subscribe(
      data => {
        console.log(data);
        this.profileAutoCompleteData = data;
        this.user = this.profileAutoCompleteData;
        console.log(this.user);
      }, error => {
        this.toastr.error('Error', 'Failed to get UserDetails');
      });

  }
  updateProfile(){
    this.toastr.success('Success', 'This is Right');
    this.toastr.error('Error', 'This is not Right');
  }

}
