import { lodgingsUrl } from "../urls";
import findLodgingById from "../helpers/findLodgingById";

const throwError = (errorMessage) => {
  throw new Error(errorMessage);
};

export const lodgingServices = {
  async getAllLodgings() {
    const response = await fetch(lodgingsUrl);
    const lodgings = await response.json();

    if (response.ok === false) {
      throwError("Failed to fetch");
    }

    return lodgings;
  },

  async getOneLodging(lodgingId) {
    const lodgings = await this.getAllLodgings(lodgingsUrl);
    const foundLodging = findLodgingById(lodgings, lodgingId);

    if (foundLodging === null) {
      throwError("Lodging not found");
    }

    return foundLodging;
  }
};