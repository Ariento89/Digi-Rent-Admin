import { get } from "../adapters/xhr";
import safeCall from "./safeCall";

export const getApartments = async () => {
  return await safeCall(
    async () => await get("admin/apartments"),
    "error_load_apartments",
    "Unexpected error to load apartments"
  );
};
