import axios from "axios";

const ABU = process.env.REACT_APP_API_BASE_URL;

export const USERS_URL = ABU + "/api/users";

// CREATE =>  POST: add a new user to the server
export function createCustomer(user) {
  return axios.post(USERS_URL, { user });
}

// READ
export function getAllCustomers() {  
  return axios.get(USERS_URL);
}

export function getCustomerById(userId) {
  return axios.get(`${USERS_URL}/${userId}`);
}

// Method from server should return QueryResultsModel(items: any[], totalsCount: number)
// items => filtered/sorted result
export function findCustomers(queryParams) {
  return axios.post(`${USERS_URL}/find`, { queryParams });
}

// UPDATE => PUT: update the user on the server
export function updateCustomer(user) {
  return axios.put(`${USERS_URL}/${user._id}`, { user });
}

// UPDATE Status
export function updateStatusForCustomers(ids, status) {
  return axios.post(`${USERS_URL}/updateStatusForCustomers`, {
    ids,
    status
  });
}

// DELETE => delete the user from the server
export function deleteCustomer(userId) {
  return axios.delete(`${USERS_URL}/${userId}`);
}

// DELETE Customers by ids
export function deleteCustomers(ids) {
  return axios.post(`${USERS_URL}/deleteCustomers`, { ids });
}
