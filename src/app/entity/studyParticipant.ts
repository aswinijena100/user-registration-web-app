export class StudyParticipant {
  studyId: number;

  customStudyId: String;

  studyName: String;

  appId: number;

  customAppId: String;

  appName: String;

  customLocationId: String;

  locationName: String;

  locationStatus: String;

  studyType: String = "";

  targetEnrollment: number = 0;

  registryParticipants: any[] = [];
}
