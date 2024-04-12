import crud from '../../../crudOperations'

export default {
  /**
   * Retrieves the information about adding a disk for a structured resource.
   * @param {string} id - The ID of the structured resource.
   * @returns {Promise} resolves with a cloudbolt API Success Response
   */
  getAddDisk: (id) =>
    crud.getItemById(`api/v3/cmp/structuredResources/${id}/addDisk`),

  /**
   * Adds a disk to a structured resource.
   * @param {string} id - The ID of the structured resource.
   * @param {object} options - The options for adding the disk.
   * @returns {Promise} resolves with a cloudbolt API Success Response
   */
  saveDisk: (id, options) =>
    crud.postItem(`api/v3/cmp/structuredResources/${id}/addDisk`, options)
}
