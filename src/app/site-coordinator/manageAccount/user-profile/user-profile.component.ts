import { Component, OnInit, ViewChild } from '@angular/core';
import { ManageAccountService } from "../manage-account.service";
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../../../entity/user';
import { ToastrService } from 'ngx-toastr';
import { invalid } from '@angular/compiler/src/render3/view/util';

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
  passCritiria: string ='';
  @ViewChild('profile',{ static: false }) form: any;

    constructor(private manageAccountService: ManageAccountService, private route: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit() {
    this.getProfileDetails();
    this.passCritiria = `Your password must be 8 to 64 characters long.  
                        - contain a lower case letter.
                        - contain an upper case letter. 
                        - contain a number.
                        - contain a special character from the following set:
                        !"" # $ % ' () * + , - . : ; < = > ? @ [] ^_  {} |~"' `;

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
    if (this.form.invalid ) {
      return;
    }else{
      console.log(this.form.value)
      this.manageAccountService.updateProfileChanges(this.form.value).subscribe(data => {
        this.toastr.success('Profile Updated Successfully');
       // this.successMessage = "Location Added successfully."
      }, error => {
        console.log(error);
        this.toastr.error('Error', error.error.message);
        //this.errorMessage = error.error.message;
      })
    }
  }

}
