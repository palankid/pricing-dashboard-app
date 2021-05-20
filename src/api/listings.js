// import { addUrlParams } from "utils/network.utils";
import { get } from "./api";

const ENDPOINT = "http://localhost:1024";

export const fetchListings = async (params = {}) => {
  return await get(`${ENDPOINT}/listings`);
};

/* export const addPerson = async (person) => {
  return await post(`${ENDPOINT}`, person);
};

export const updatePerson = async (person) => {
  return await patch(`${ENDPOINT}/${person.id}`, person);
};
*/
