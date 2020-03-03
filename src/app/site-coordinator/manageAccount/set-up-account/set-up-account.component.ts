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

  constructor(private manageAccountService: ManageAccountService, private route: ActivatedRoute,private toastr: ToastrService) { }

  ngOnInit() {
  }

 registerUser(){
   
 }

}
