import { authorizedGetAsync } from "./apiUtils";

export const getUserById = (id) => authorizedGetAsync(`https://mindfulconnectionapi.azurewebsites.net/api/user/getPatient/${id}`)

export const getContactByUserId = (id) => authorizedGetAsync(`https://mindfulconnectionapi.azurewebsites.net/api/user/getContact/${id}`)