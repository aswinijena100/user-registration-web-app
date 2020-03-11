import { Component, OnInit } from '@angular/core';
import { ManageSitesService } from "../manage-sites.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { StudyParticipant } from '../../../entity/studyParticipant';

@Component({
  selector: 'app-study-participants-list',
  templateUrl: './study-participants-list.component.html',
  styleUrls: ['./study-participants-list.component.scss']
})
export class StudyParticipantsListComponent implements OnInit {
  studyId: string = "";
  studyDetails: StudyParticipant = new StudyParticipant();
  participantRegistryListBackup: any[] = [];
  constructor(private manageSitesService: ManageSitesService , private router: Router,private route: ActivatedRoute, ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params['studyId'] != '' && params['studyId'] != 'undefined' && params['studyId'] != undefined)
        this.studyId = params['studyId'];
      this.getstudiesRegistryDetails();

    })


  }


  getstudiesRegistryDetails() {
    this.manageSitesService.getstudiesParticipantRegistry(this.studyId).subscribe(
      data => {
        console.log(data);
        this.studyDetails = data;
        this.participantRegistryListBackup = JSON.parse(JSON.stringify(this.studyDetails.registryParticipants));
      }, error => {
        this.studyDetails = new StudyParticipant();
        this.participantRegistryListBackup = [];
      });

  }

  participantDetails(participantRegistryId) {
    this.router.navigate(["/user/participantDetail",participantRegistryId])
    }
    
  search(filterQuery) {
    let query = filterQuery;
    if (query && query.trim() != '' && query.trim() != undefined) {
      this.studyDetails.registryParticipants = this.participantRegistryListBackup.filter(function (a) {
        return ((a.email != null && a.email != undefined && a.email.toLowerCase().includes(query.toLowerCase()) ||
          (a.locationName != null && a.locationName != undefined && a.locationName.toLowerCase().includes(query.toLowerCase()))));
      });
    } else {
      this.studyDetails.registryParticipants = this.participantRegistryListBackup;
    }
  }



}
