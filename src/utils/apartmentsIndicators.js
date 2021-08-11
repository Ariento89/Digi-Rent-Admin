import { get } from "lodash";

export const getRegisteredApartments = (apartments) => apartments.length;

export const getActiveApartments = (apartments) =>
  apartments.filter((apartment) => get(apartment, "status", undefined) === "active").length;
