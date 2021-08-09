import { get } from "../adapters/xhr";
import safeCall from "./safeCall";

export const getApplications = async () => {
  return await safeCall(
    async () => await get("admin/applications"),
    "error_load_applications",
    "Unexpected error to load applications"
  );
};
