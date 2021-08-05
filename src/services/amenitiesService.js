import { get } from "../adapters/xhr";
import safeCall from "./safeCall";

export const getAmenities = async () => {
  return await safeCall(
    async () => await get("amenities"),
    "error_load_amenities",
    "Unexpected error to load amenities"
  );
};
