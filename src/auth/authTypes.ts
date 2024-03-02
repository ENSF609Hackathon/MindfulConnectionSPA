// Claim types
export enum ClaimType {
    role = 'role',
}



// Possible User Roles
export enum UserRole {

    Admin = 'Admin',
    Provider = 'Provider',
    Patient = 'Patient',
    Anonymous = 'Anonymous',
}




// Groups of user roles.
export class UserRoles {


    static readonly Admin = [UserRole.Admin]
    static readonly ProviderOrBetter = [UserRole.Admin, UserRole.Provider]
    static readonly PatientOrBetter = [UserRole.Admin, UserRole.Provider, UserRole.Patient]
    static readonly AnonymousOrBetter = [UserRole.Admin, UserRole.Provider, UserRole.Patient, UserRole.Anonymous]
}