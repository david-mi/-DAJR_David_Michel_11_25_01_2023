import { lodgingsUrl } from "../urls";

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

  async getLodgingById(lodgingId) {
    const lodgings = await this.getAllLodgings(lodgingsUrl);
    const foundLodging = lodgings.find((lodging) => {
      return lodging.id === lodgingId;
    });

    if (foundLodging === undefined) {
      throwError("Lodging not found");
    }

    return foundLodging;
  }
};