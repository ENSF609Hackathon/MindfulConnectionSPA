import { authorizedGetAsync } from "./apiUtils";

export const getUserById = (id) => authorizedGetAsync(`http://localhost:8080/api/user/getPatient/${id}`)

export const getContactByUserId = (id) => authorizedGetAsync(`http://localhost:8080/api/user/getContact/${id}`)