import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ManageSitesService } from "../manage-sites.service";
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from "@angular/router";
import { ToastrService } from 'ngx-toastr';

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
  siteParticipants: any = {};
  siteParticipantsBackup: any = {};
  file: any;
  Deactivate: any;
  activeTab: string = 'all';
  noOfCheckedEmails: number;
  @ViewChild("addParticipantForm", { static: true }) addParticipantForm: NgForm;
  selectEmails: any;
  constructor(private modalService: BsModalService, private manageSitesService: ManageSitesService, private route: ActivatedRoute,private toastr: ToastrService) { }

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
      this.siteParticipantsBackup = JSON.parse(JSON.stringify(this.siteParticipants));
      console.log(this.siteParticipantsBackup)
      console.log(this.siteParticipants)
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
      this.toastr.success('Participant Added successfully.');
     // this.successMessage = "Participant Added successfully.";
      this.modalRef.hide();
      form.reset();
      this.myFunction();
      this.getSiteParticipant();
    }, error => {
      this.toastr.error(error.error.userMessage);
     // this.errorMessage = error.error.userMessage;
      this.modalRef.hide();
      form.reset();
      this.myFunction();

    });
  }
  search() {
    console.log("inside site ")
  }
  changeTab(tab) {
    this.activeTab = tab;
    this.selectedAll = false;
    this.getSiteParticipant();
  }
  participantDetails(participantRegistryId) {
    console.log(participantRegistryId);
    this.Deactivate = participantRegistryId; 
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
      for (var i = 0; i < this.checkedEmails.length; i++) {
        this.checkedEmails[i].newlyCreatedUser = this.siteParticipants.registryParticipants; 
      }
    } else {
      this.checkedEmails = this.siteParticipants.registryParticipants;
      for (var i = 0; i < this.checkedEmails.length; i++) {
        this.checkedEmails[i].newlyCreatedUser = ''; 
      }
     
    }
    
   // this.noOfCheckedUsers = this.checkedEmails.length;
  }
  onFileChange(evt: any) {
    let file = evt.target.files[0];
    this.file = file;
    console.log(this.file.name)
  }
  importPartcipants() {
    console.log(this.file)
    let formData = new FormData();
    formData.append('file', this.file, this.file.name);
    console.log(formData)
    this.manageSitesService.importParticipants(this.siteId, formData).subscribe(data => {
      console.log(data)
      this.toastr.success('Participant Imported successfully.');
     // this.successMessage = "Participant Imported successfully.";
      this.importedFile.nativeElement.value = "";
      this.file = {};
      this.activeTab = "new";
       this.getSiteParticipant();
      this.myFunction();

    }, error => {
      console.log(JSON.stringify(error.error))
      //this.errorMessage = `Error In importing.`;
      this.toastr.error(JSON.stringify(error.error));
     // this.errorMessage = error.error.userMessage;
      this.importedFile.nativeElement.value = "";
      this.file = {};
      this.myFunction();

    });
  }
 decommissionSite(){
  this.manageSitesService.siteDecommission(this.siteId).subscribe(data => {
    this.toastr.success(data.message);
  }, error => {
    this.toastr.error(error.error.userMessage);
  });
 }
enableAndDisable(status){
  console.log(status)
  console.log(this.Deactivate)
  let datas={
        'id': [this.Deactivate],
        'status': status   
  };
  this.manageSitesService.enableDisableInvitation(this.siteId,datas).subscribe(data => {
    this.toastr.success(data.message);
  }, error => {
    console.log(error)
    this.toastr.error(error.error.userMessage);
  });
}

sendResendInvitation(){
      let datas={
        'id': [this.Deactivate]
    };
    console.log(datas);
    this.manageSitesService.sendAndResendInvitation(this.siteId,datas).subscribe(data => {
      console.log(data.successBean.message);
    this.toastr.success(data.successBean.message);
    this.changeTab('invited');
    }, error => {
    console.log(error)
    this.toastr.error(error.error.userMessage);
    });
}



}
