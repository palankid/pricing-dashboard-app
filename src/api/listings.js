import { get, post } from "./api";

const ENDPOINT = "http://localhost:1024";

export const fetchListings = async () => {
  return await get(`${ENDPOINT}/listings`);
};

export const fetchListing = async (id) => {
  return await get(`${ENDPOINT}/calendar/${id}`);
};

export const updateBasePrice = async (id, payload) => {
  return await post(`${ENDPOINT}/calendar/${id}`, payload);
};
