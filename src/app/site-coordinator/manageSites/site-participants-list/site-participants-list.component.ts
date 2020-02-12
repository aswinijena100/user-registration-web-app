import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ManageSitesService } from "../manage-sites.service";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-site-participants-list',
  templateUrl: './site-participants-list.component.html',
  styleUrls: ['./site-participants-list.component.scss']
})
export class SiteParticipantsListComponent implements OnInit {
  emailIdToAdd: string = "";
  modalRef: BsModalRef;
  errorMessage = '';
  successMessage = '';
  siteId: String = "1";
  @ViewChild("addParticipantForm", { static: true }) addParticipantForm: NgForm;
  constructor(private modalService: BsModalService, private manageSitesService: ManageSitesService) { }

  openModal(template: TemplateRef<any>) {
    // this.addParticipantForm.resetForm();
    this.errorMessage = '';
    this.successMessage = '';
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit() {
  }

  myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  addParticipant(form: NgForm) {
    this.errorMessage = '';
    this.successMessage = '';
    let participantToBeAdded = {
      "email": this.emailIdToAdd
    }
    this.manageSitesService.addParticipant(this.siteId, participantToBeAdded).subscribe(data => {
      this.successMessage = "Participant Added successfully.";
      this.modalRef.hide();
      form.reset();
    }, error => {
      this.errorMessage = error.error.userMessage;
      this.modalRef.hide();
      form.reset();
    });
  }
  search() {
    console.log("inside site ")
  }
}
