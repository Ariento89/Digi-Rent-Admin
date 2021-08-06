import { get } from "../adapters/xhr";
import safeCall from "./safeCall";

export const getLandlords = async () => {
  return await safeCall(
    async () => await get("users/landlords"),
    "error_load_landlords",
    "Unexpected error to load landlords"
  );
};
