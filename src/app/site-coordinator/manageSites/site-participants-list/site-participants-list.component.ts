import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ManageSitesService } from "../manage-sites.service";
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { SiteParticipant } from '../../../entity/siteParticipant';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-site-participants-list',
  templateUrl: './site-participants-list.component.html',
  styleUrls: ['./site-participants-list.component.scss']
})
export class SiteParticipantsListComponent implements OnInit {
  @ViewChild('importedFile', { static: false }) importedFile: ElementRef;

  emailIdToAdd: string = "";
  modalRef: BsModalRef;
  errorMessage = '';
  successMessage = '';
  siteId: String = "";
  selectedAll: any;
  checkedEmails: any[] = [];
  checkedEmailsIds: any[] = [];
  siteParticipants: any = {};
  siteParticipantsBackup: any = {};
  file: any;
  activeTab: string = 'all';
  noOfCheckedEmails: number;
  objectLength: any;
  @ViewChild("addParticipantForm", { static: true }) addParticipantForm: NgForm;
  selectEmails: any;
  strings: string;
  constructor( private spinner: NgxSpinnerService,private modalService: BsModalService, private router: Router, private manageSitesService: ManageSitesService, private route: ActivatedRoute, private toastr: ToastrService) { }

  openModal(template: TemplateRef<any>) {
    // this.addParticipantForm.resetForm();
    this.errorMessage = '';
    this.successMessage = '';
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {

    this.route.params.subscribe(params => {
      if (params['siteId'] != '' && params['siteId'] != 'undefined' && params['siteId'] != undefined)
        this.siteId = params['siteId'];
      console.log(this.siteId)
      this.getSiteParticipant();

    })
  }

  myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  getSiteParticipant() {
    this.siteParticipants = [];
    this.siteParticipantsBackup = [];
    this.manageSitesService.getsiteParticipants(this.siteId, this.activeTab).subscribe(data => {
      this.siteParticipants = data;
      this.siteParticipantsBackup = JSON.parse(JSON.stringify(this.siteParticipants.registryParticipants));
      console.log(this.siteParticipantsBackup)
      console.log(this.siteParticipants)
      this.objectLength = Object.keys(this.siteParticipants.registryParticipants).length != 0;
    }, error => {
      this.siteParticipants = [];
      this.siteParticipantsBackup = [];
    });
  }
  addParticipant(form: NgForm) {
    this.errorMessage = '';
    this.successMessage = '';
    let participantToBeAdded = {
      "email": this.emailIdToAdd
    }
    this.manageSitesService.addParticipant(this.siteId, participantToBeAdded).subscribe(data => {
      this.toastr.success(data.successBean.message);
      this.modalRef.hide();
      form.reset();
      this.myFunction();
      this.activeTab = "new";
      this.getSiteParticipant();
    }, error => {
      this.toastr.error(error.error.userMessage);
      this.modalRef.hide();
      form.reset();
      this.myFunction();

    });
  }
  search(filterQuery) {
    let query = filterQuery;
    if (query && query.trim() != '' && query.trim() != undefined) {
      this.siteParticipants.registryParticipants = this.siteParticipantsBackup.filter(function (a) {
        return ((a.email != null && a.email != undefined && a.email.toLowerCase().includes(query.toLowerCase())));
      });
    } else {
      this.siteParticipants.registryParticipants = this.siteParticipantsBackup;
    }
  }
  changeTab(tab) {
    this.activeTab = tab;
    this.selectedAll = false;
    this.getSiteParticipant();
  }

  redirectParticipant(userId) {
    this.router.navigate(["/user/participantDetail", userId])
  }

  rowCheckBoxChange(statusCheck) {
    this.checkedEmails = this.siteParticipants.registryParticipants.filter(u => u.newlyCreatedUser === statusCheck);
    this.noOfCheckedEmails = this.checkedEmails.length;
    if (this.noOfCheckedEmails != this.siteParticipants.registryParticipants.length) {
      this.selectedAll = false;
    } else {
      this.selectedAll = true;
    }
  }
  selectAll() {

    if (this.selectedAll) {
      this.checkedEmails = this.siteParticipants.registryParticipants;
      for (var i = 0; i < 10; i++) {
        this.checkedEmails[i].newlyCreatedUser = this.siteParticipants.registryParticipants;
      }
    } else {
      this.checkedEmails = this.siteParticipants.registryParticipants;
      for (var i = 0; i < 10; i++) {
        this.checkedEmails[i].newlyCreatedUser = '';
      }

    }
  }
  onFileChange(evt: any) {
    let file = evt.target.files[0];
    this.file = file;
    console.log(this.file.name)
  }
  importPartcipants() {
    let formData = new FormData();
    formData.append('file', this.file, this.file.name);
    console.log(formData)
    this.manageSitesService.importParticipants(this.siteId, formData).subscribe(data => {
      console.log(data)
      this.toastr.success(data.successBean.message);
      this.importedFile.nativeElement.value = "";
      this.file = {};
      this.activeTab = "new";
      this.getSiteParticipant();
      this.myFunction();
    }, error => {
      this.strings = error.error.errorBean.userMessage+"<br/><br/>Invalid Emails are <br/>"+ error.error.invalidEmails+"<br/><br/>Duplicate Emails are <br/>"+error.error.duplicateEmails;
      this.toastr.error(this.strings);
      var Invalids = {
        "InvalidEmails" : error.error.invalidEmails,
        "DuplicateEmails" : error.error.invalidEmails
                     };
     // this.toastr.error(JSON.stringify(error.error.invalidEmails));
      
      this.importedFile.nativeElement.value = "";
      this.file = {};
      this.myFunction();

    });
  }
  decommissionSite() {
    console.log(this.siteId)
    this.manageSitesService.siteDecommission(this.siteId).subscribe(data => {
      console.log(data)
      this.toastr.success(data.message);
      this.router.navigate(["/user/dashboard"])
    }, error => {
      console.log(error)
      this.toastr.error(error.error.userMessage);
    });
  }
  enableAndDisable(status) {
    this.checkedEmails = this.siteParticipants.registryParticipants.filter(u => u.newlyCreatedUser === true);
    var checkedEmailsIds = [];
    this.checkedEmails.forEach(function (checkedEmail) {
      checkedEmailsIds.push(checkedEmail.id);
    });
    let datas = {
      'id': checkedEmailsIds,
      'status': status
    };
    if (checkedEmailsIds.length > 0) {
      if (checkedEmailsIds.length > 11) {
        this.toastr.error('Please select less than 10 participants');
      } else {
        this.manageSitesService.enableDisableInvitation(this.siteId, datas).subscribe(data => {
          this.toastr.success(data.successBean.message);
          this.activeTab = "disabled";
          this.getSiteParticipant();
        }, error => {
          this.toastr.error(error.error.userMessage);
        });
      }
    } else {
      if (status === "0") {
        this.toastr.error('Please select atleast one participant to disable');
      } else {
        this.toastr.error('Please select atleast one participant for to enable');
      }
    }
  }

  sendResendInvitation() {
    this.checkedEmails = this.siteParticipants.registryParticipants.filter(u => u.newlyCreatedUser === true);
    var checkedEmailsIds = [];
    this.checkedEmails.forEach(function (checkedEmail) {
      console.log(checkedEmail.id)
      checkedEmailsIds.push(checkedEmail.id);
    });
    let datas = {
      'id': checkedEmailsIds
    };
    if (checkedEmailsIds.length > 0) {
      if (checkedEmailsIds.length > 11) {
        this.toastr.error('Please select less than 10 participants');
      } else {
        this.manageSitesService.sendAndResendInvitation(this.siteId, datas).subscribe(data => {
          this.toastr.success(data.successBean.message);
          this.changeTab('invited');
          this.getSiteParticipant();
        }, error => {
          console.log(error.error.errorBean)
          this.toastr.error(error.error.errorBean.userMessage);

        });
      }
      } else {
        this.toastr.error("Please select atleast one participant for sending invitation");
      }

    }




  }
