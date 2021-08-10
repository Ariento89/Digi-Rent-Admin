import { get } from "lodash";
import moment from "moment";

export const getRegisteredLandlords = (landlords) => landlords.length;

export const getActiveLandlords = (landlords) =>
  landlords.filter((landlord) => get(landlord, "status", undefined) === "active").length;

// [18-25, 26-35, 36-45, 56+, N/A]
export const getLandlordsByAge = (landlords) =>
  landlords.reduce(
    (acc, landlord) => {
      const dob = landlord.dob ? moment().diff(landlord.dob, "years") : null;

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
export const getLandlordsByGender = (landlords) =>
  landlords.reduce(
    (acc, landlord) => {
      if (landlord.gender === "female") {
        acc[0] += 1;
      } else if (landlord.gender === "male") {
        acc[1] += 1;
      } else {
        acc[2] += 1;
      }

      return acc;
    },
    [0, 0, 0]
  );
