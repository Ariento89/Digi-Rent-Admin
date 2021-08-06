import { get } from "../adapters/xhr";
import safeCall from "./safeCall";

export const getTenants = async () => {
  return await safeCall(
    async () => await get("users/tenants"),
    "error_load_tenants",
    "Unexpected error to load tenants"
  );
};
