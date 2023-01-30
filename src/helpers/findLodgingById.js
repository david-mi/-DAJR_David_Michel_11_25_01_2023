/**
 * Find on lodgings the one who fits the given id
 * - returns null if nothing is found
 * 
 * @param {Lodgings} lodgings
 * @param {string} lodgingId
 * @return {Lodging | null}
 */

const findLodgingById = (lodgings, lodgingId) => {
  const foundLodging = lodgings.find((lodging) => {
    return lodging.id === lodgingId;
  });

  return foundLodging || null;
};