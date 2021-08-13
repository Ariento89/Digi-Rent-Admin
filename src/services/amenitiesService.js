import { get, post } from "../adapters/xhr";
import safeCall from "./safeCall";

export const getAmenities = async () => {
  return await safeCall(
    async () => await get("amenities"),
    "error_load_amenities",
    "Unexpected error to load amenities"
  );
};

export const createAmenity = async (payload) => {
  return await safeCall(
    async () => await post("amenities", payload),
    "error_create_amenity",
    "Unexpected error to create amenity"
  );
};
