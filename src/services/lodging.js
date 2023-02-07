import { lodgingsUrl } from "../urls";
import "../types";

/**
 * Throws an error object, with the given message as parameter when called
 * 
 * @param {string} errorMessage 
 */
const throwError = (errorMessage) => {
  throw new Error(errorMessage);
};

export const lodgingServices = {

  /**
   * Get lodings data from fetch call
   * 
   * @throws Throw error if response.ok from fetch call is false
   * @returns {Promise<Lodgings|Error>}
   */

  async getAllLodgings() {
    const response = await fetch(lodgingsUrl);
    const lodgings = await response.json();

    if (response.ok === false) {
      throwError("Failed to fetch");
    }

    return lodgings;
  },

  /**
   * - Gets lodings data from fetch call
   * - Find lodging associated to {@link lodgingId} parameter
   * 
   * @throws Throw error if response.ok from fetch call is false
   * @returns {Promise<Lodging|Error>}
   */

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