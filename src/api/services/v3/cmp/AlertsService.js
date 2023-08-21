import crud from '../../../crudOperations'

const URL = 'api/v3/cmp/alerts'

export default {
  /**
   * Retrieve a list of existing Alerts
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a list of existing Alerts
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Retrieve an existing Alert by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the Alert object
   */
  get: (id) => crud.getItemById(URL, id),

  /**
   * Create a new Alert
   * @param {object} newAlert new Alert object definition
   * @param {string} newAlert.type required - email or Slack or Teams
   * @param {string} newAlert.name required
   * @param {string[]} [newAlert.alertCategories]
   * @param {string[]} [newAlert.recipients] used with email type alerts
   * @param {string} [newAlert.subject] used with email type alerts
   * @param {string[]} [newAlert.slackChannels] used with Slack type alerts
   * @param {string} [newAlert.slackApiToken] used with Slack type alerts
   * @returns {Promise} resolves with a new Alert object with all server-filled fields
   */
  create: (newAlert) => crud.createNewItem(URL, newAlert),

  /**
   * Update an existing Alert
   * @param {string} id or global_id
   * @param {object} updatedAlert updated Alert object definition
   * @param {string} [updatedAlert.type]
   * @param {string} [updatedAlert.name]
   * @param {string[]} [updatedAlert.alertCategories]
   * @param {string[]} [updatedAlert.recipients] used with email type alerts
   * @param {string} [updatedAlert.subject] used with email type alerts
   * @param {string[]} [updatedAlert.slackChannels] used with Slack type alerts
   * @param {string} [updatedAlert.slackApiToken] used with Slack type alerts
   * @returns {Promise} resolves with a cloudbolt API Response of the updated Alert object
   */
  update: (id, updatedAlert) => crud.patchItemById(URL, id, updatedAlert),

  /**
   * Replace an existing Alert
   * @param {string} id or global_id
   * @param {object} replacementAlert replacement Alert object definition
   * @param {string} replacementAlert.type required - email or Slack or Teams
   * @param {string} replacementAlert.name required
   * @param {string[]} [replacementAlert.alertCategories]
   * @param {string[]} [replacementAlert.recipients] used with email type alerts
   * @param {string} [replacementAlert.subject] used with email type alerts
   * @param {string[]} [replacementAlert.slackChannels] used with Slack type alerts
   * @param {string} [replacementAlert.slackApiToken] used with Slack type alerts
   * @returns {Promise} resolves with a cloudbolt API Response of the replacement Alert object
   */
  replace: (id, replacementAlert) =>
    crud.updateItemById(URL, id, replacementAlert),

  /**
   * Delete an existing Alert
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Success Response
   */
  delete: (id) => crud.deleteItemById(URL, id)
}
