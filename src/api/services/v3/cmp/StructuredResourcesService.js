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
    crud.postItem(`api/v3/cmp/structuredResources/${id}/addDisk`, options),

  /**
   * Fetches the details of the disk that needs to be edited for a given resource ID with specified query parameters
   * @param {string} id - The ID of the resource for which to fetch the edit disk details.
   * @param {Object} queryParams - The query parameters for the API request.
   * @param {string} queryParams.position Position of the disk which needs to be edited
   * @param {string} queryParams.uuid UUID of the disk which needs to be edited
   * @returns {Promise} resolves with a cloudbolt API Success Response
   */
  getEditDisk: (id, queryParams) => {
    crud.getItemById(
      `api/v3/cmp/structuredResources/${id}/editDisk/${queryParams.position}${queryParams.uuid}`
    )
  },

  /**
   * Saves the edited disk details for a given resource ID with specified query parameters and size.
   * @param {string} id - The ID of the resource for which to save the edited disk details.
   * @param {Object} queryParams - The query parameters for the API request.
   * @param {string} queryParams.position Position of the disk which needs to be edited
   * @param {string} queryParams.uuid UUID of the disk which needs to be edited
   * @param {Object} size - The size details of the disk which needs to be edited
   * @returns {Promise} resolves with a cloudbolt API Success Response
   */
  resizeDisk: (id, queryParams, size) =>
    crud.postItem(
      `api/v3/cmp/structuredResources/${id}/editDisk/${queryParams.position}${queryParams.uuid}`,
      size
    )
}
