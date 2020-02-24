export class ParticipantDetail {

    id: number;

    siteId: String;

    customLocationId: String

    locationName: String;

    customStudyId: String;

    studyName: String

    customAppId: String;

    appName: String;

    onboardringStatus: String

    email: String;

    enrollments: any[] = [];

    consentHistory: any[] = [];


}