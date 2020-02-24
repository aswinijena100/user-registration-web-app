import { Component, OnInit } from '@angular/core';
import { ManageSitesService } from "../manage-sites.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ParticipantDetail } from '../../../entity/participantDetail';

@Component({
  selector: 'app-participant-details',
  templateUrl: './participant-details.component.html',
  styleUrls: ['./participant-details.component.scss']
})
export class ParticipantDetailsComponent implements OnInit {
  partcipantId: string = "";
  participantDetails: ParticipantDetail = new ParticipantDetail();
  particpantDetailsBackup: any[] = [];
  constructor(private manageSitesService: ManageSitesService,private route: ActivatedRoute,) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['partcipantId'] != '' && params['partcipantId'] != 'undefined' && params['partcipantId'] != undefined)
        this.partcipantId = params['partcipantId'];
        this.listDetails();
    })
  }

 listDetails(){
  this.manageSitesService.showParticipantsDetails(this.partcipantId).subscribe(
    data => {
      console.log(data)
      this.participantDetails = data;
      this.particpantDetailsBackup = JSON.parse(JSON.stringify(this.participantDetails));
  }, error => {
      this.participantDetails = new ParticipantDetail();
      this.particpantDetailsBackup = [];
  });
 }

}
