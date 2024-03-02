import {ClaimType, UserRole, UserRoles} from './authTypes';
import type {User} from '@auth0/auth0-react'


/**
 * Transforms Unix timestamp to date and returns a string value of that date
 * @param {String} date Unix timestamp
 * @returns
 */
const changeDateFormat = (date: number) => {
    const dateObj = new Date(date * 1000);
    return `${date} - [${dateObj.toString()}]`;
};

/**
 * Returns whether or not the user has the given value for the given claim.
 * @param user The user.
 * @param claimType The claim type.
 * @param claimValue The claim value.
 */
export const hasClaim = (user: User | undefined, claimType: ClaimType, claimValue: string): boolean => {

    // If the user and profile exist...
    if (user && user[claimType]) {
        // Get the claim value
        const value = user[claimType] as string
        // If the value is actually an array of values...
        if (Array.isArray(value)) {
            // Return true if the array contains the value of interest.
            return 0 <= value.indexOf(claimValue)
        }
        // The claim values are not an array so there is only one value to check
        return value === claimValue
    }
    // Return false if the user or profile do not exist
    return false
}

/**
 * Returns whether or no the user has any of the given values for the given claim.
 * @param user The user.
 * @param claimType The claim type.
 * @param claimValues The claim values.
 */
export const hasAnyClaim = (user: User | undefined, claimType: ClaimType, claimValues: string[]): boolean => {
    if (user) {
        // For each claim value in the list...
        for (const claimValue of claimValues) {
            // If the value is found
            if (hasClaim(user, claimType, claimValue)) {
                // return true
                return true
            }
            // Otherwise, check the next one.
        }
    }
    // No matching values found, return false
    return false
}


/**
 * Returns whether or not the user has any of the specific roles.
 * @param user
 * @param roles
 */
export const hasAnyRole = (user: User | undefined, roles: UserRole[]): boolean => hasAnyClaim(user, ClaimType.role, roles)



/**
 * Returns whether or not the user is authorized given the roles, company types, and user types required.
 * @param user
 * @param anyOfRoles If given, the list of roles that the user must have at least one of.
 */
export const isAuthorized = (
    user: User | undefined,
    anyOfRoles: UserRole[] | undefined,
): boolean => {
    return (
        (undefined === anyOfRoles || hasAnyRole(user, anyOfRoles))
    )
}

/**
 * Returns true if the user has admin level clearance.
 * @param user The user.
 */
export const isAdminOrBetter = (user: User | undefined): boolean => hasAnyRole(user, UserRoles.Admin)


/**
 * Returns true if the user has provider user level clearance.
 * @param user The user.
 */
export const isProviderOrBetter= (user: User | undefined): boolean => hasAnyRole(user, UserRoles.ProviderOrBetter)

/**
 * Returns true if the user has patient level clearance.
 * @param user The user.
 */
export const isPatientOrBetter= (user: User | undefined): boolean => hasAnyRole(user, UserRoles.PatientOrBetter)

/**
 * Returns true if the user is Anonoyous level clearance.
 * @param user The user.
 */
export const isAnonymousUserOrBetter= (user: User | undefined): boolean => hasAnyRole(user, UserRoles.AnonymousOrBetter)


/**
 * Returns true if the user is an admin
 * @param user The user.
 */
export const isAdmin = (user: User | undefined): boolean => hasClaim(user, ClaimType.role, UserRole.Admin)

/**
 * Returns true if the user is Provider
 * @param user The user.
 */
export const isStaff = (user: User | undefined): boolean => hasClaim(user, ClaimType.role, UserRole.Provider)

/**
 * Returns true if the user is a Patient
 * @param user The user.
 */
export const isPatient = (user: User | undefined): boolean => hasClaim(user, ClaimType.role, UserRole.Patient)

/**
 * Returns true if the user is anonymous
 * @param user The user.
 */
export const isAnonymous= (user: User | undefined): boolean => hasClaim(user, ClaimType.role, UserRole.Anonymous)
