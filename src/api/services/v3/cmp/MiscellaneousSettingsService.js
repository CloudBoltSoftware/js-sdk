import crud from '../../../crudOperations'

const URL = 'v3/cmp/miscellaneousSettings'

export default {
  /**
   * Retrieve a list of existing Miscellaneous Settings
   * @returns {Promise} resolves with a paginated list of all misc settings.
   */
  list: () => crud.getItems(URL),

  /**
   * Update existing Miscellaneous Settings
   * @param {object} updatedMiscSettings updated Miscellaneous Settings object definition
   * @returns {Promise} resolves with a cloudbolt API Response of the updated Miscellaneous Settings object
   */
  update: (updatedMiscSettings) =>
    crud.patchItemById(URL, undefined, updatedMiscSettings)
}
