import { get } from "lodash";
import moment from "moment";

export const getRegisteredTenants = (tenants) => tenants.length;

export const getActiveTenants = (tenants) =>
  tenants.filter((tenant) => get(tenant, "status", undefined) === "active").length;

// [18-25, 26-35, 36-45, 56+, N/A]
export const getTotalByAge = (tenants) =>
  tenants.reduce(
    (acc, tenant) => {
      const dob = tenant.dob ? moment().diff(tenant.dob, "years") : null;

      if (dob >= 18 && dob <= 25) {
        acc[0] += 1;
      } else if (dob >= 26 && dob <= 35) {
        acc[1] += 1;
      } else if (dob >= 36 && dob <= 45) {
        acc[2] += 1;
      } else if (dob >= 56) {
        acc[3] += 1;
      } else {
        acc[4] += 1;
      }

      return acc;
    },
    [0, 0, 0, 0, 0]
  );

// [male, female, NA]
export const getTotalByGender = (tenants) =>
  tenants.reduce(
    (acc, tenant) => {
      if (tenant.gender === "female") {
        acc[0] += 1;
      } else if (tenant.gender === "male") {
        acc[1] += 1;
      } else {
        acc[2] += 1;
      }

      return acc;
    },
    [0, 0, 0]
  );
