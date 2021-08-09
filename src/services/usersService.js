import { get } from "../adapters/xhr";
import safeCall from "./safeCall";

export const getTenants = async () => {
  return await safeCall(
    async () => await get("admin/users?role=tenant"),
    "error_load_tenants",
    "Unexpected error to load tenants"
  );
};

export const getLandlords = async () => {
  return await safeCall(
    async () => await get("admin/users?role=landlord"),
    "error_load_landlords",
    "Unexpected error to load landlords"
  );
};
