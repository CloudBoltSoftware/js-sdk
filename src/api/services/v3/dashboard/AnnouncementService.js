import crud from '../../../crudOperations'

const BASE_URL = 'v3/dashboard/announcements'

export default {
  /**
   * Retrieves announcements that the user has permission to see.
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a cloudbolt API Response object of Announcement objects
   */
  list: (options) => crud.getItems(BASE_URL, options),

  /**
   * Retrieve a single announcement.
   * @param {string} id or global_id
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a single Announcement objects
   */
  get: (id, options) => crud.getItemById(BASE_URL, id, options),

  /**
   * Create a new Announcement.
   * Admin only.
   * @param {object} newAnnouncement New Announcement object
   * @param {string} newAnnouncement.name name of the announcement
   * @param {string} [newAnnouncement.text] text of the announcement
   * @param {boolean} [newAnnouncement.draft] whether announcement is draft or not
   * @param {string} [newAnnouncement.liveOn] start date of the announcement
   * @param {string} [newAnnouncement.expireOn] end date of the announcement
   * @param {string} [newAnnouncement.group_filter_type] type of group filter (All, None, Whitelist, Blacklist). Defaults to All.
   * @param {array[string]} [newAnnouncement.group_filter] groups to filter over. Array of group hrefs.
   * @returns {Promise} resolves with the created Announcement object
   */
  create: (newAnnouncement) => crud.createNewItem(BASE_URL, newAnnouncement),

  /**
   * Updates a Announcement.
   * Admin only.
   * @param {object} updatedAnnouncement New Announcement object
   * @param {string} updatedAnnouncement.name name of the announcement
   * @param {string} [updatedAnnouncement.text] text of the announcement
   * @param {boolean} [updatedAnnouncement.draft] whether announcement is draft or not
   * @param {string} [updatedAnnouncement.liveOn] start date of the announcement
   * @param {string} [updatedAnnouncement.expireOn] end date of the announcement
   * @param {string} [updatedAnnouncement.group_filter_type] type of group filter (All, None, Whitelist, Blacklist). Defaults to All.
   * @param {array[string]} [updatedAnnouncement.group_filter] groups to filter over. Array of group hrefs.
   * @returns {Promise} resolves with the updated Announcement object
   */
  update: (id, updatedAnnouncement) =>
    crud.updateItemById(BASE_URL, id, updatedAnnouncement),

  /**
   * Deletes a Announcement and its customized permissions.
   * Admin only.
   * @param {string} id or global_id
   * @returns {Promise} resolves with an object describing the deletion
   */
  delete: (id) => crud.deleteItemById(BASE_URL, id)
}
