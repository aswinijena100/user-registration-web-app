export class User {

    userId: number;

    userName: String;

    fName: String

    lName: String;

    email: String;

    phone: String;

    accessCode: String;

    passwordAccessCode: String;

    passwordSecurityToken:String;
    
    authKey: string;

    authId:number;

    userEnteredAccessCode: string;

    healthcareNetworkId: number;

    occupationId: number;

    specialityId: number;

    subSpecialityId: number;

    healthcareNetworkText: string;

    occupationText: string;

    specialityText: string;

    subSpecialityText: string;

    yearsInPracticeId: number=0;
    currentPassword:string ;
    
    newPassword: String;

    password: String;

    confirmPassword: string;

    update: boolean = false;

    reminderOptIn: number;

    stRole: number;

    active: number;

    archive: number;

    createdBy: String;

    modifiedBy: String;

    createdDatetime: String;

    modifiedDatetime: String;

    st_healthcare_network_name:String;

    checked:boolean=true;
}