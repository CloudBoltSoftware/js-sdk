import crud from '../../../crudOperations'

const URL = 'v3/cmp/rates'

export default {
  /**
   * Get the current configuration settings for Rates
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a cloudbolt API Response of the Rates Setting object
   */
  getSettings: (options) => crud.getItems(`${URL}/settings`, options),

  /**
   * Update existing Rate Configuration setting for time and currency
   * @param {object} updatedRateSettings updated Rates Setting object definition
   * @param {string} [updatedRateSettings.rateTimeUnit]
   * @param {string} [updatedRateSettings.rateCurrencyUnit]
   * @returns {Promise} resolves with a cloudbolt API Response of the updated Rates Setting object
   */
  updateSettings: (updatedRateSettings) =>
    crud.patchItemById(`${URL}/settings`, undefined, updatedRateSettings),

  /**
   * Retrieve a list of existing Parameter Rates
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a list of existing Parameter Rates
   */
  listParameterRates: (options) =>
    crud.getItems(`${URL}/parameterRates`, options),

  /**
   * Create a new Parameter Rate
   * @param {object} newParameterRate new Parameter Rate object definition
   * @param {number} newParameterRate.rate required
   * @param {string} newParameterRate.parameter required
   * @param {string} [newParameterRate.environment]
   * @param {number} [newParameterRate.poweroffRate]
   * @returns {Promise} resolves with a new Parameter Rate object with all server-filled fields
   */
  createParameterRate: (newParameterRate) =>
    crud.createNewItem(`${URL}/parameterRates`, newParameterRate),

  /**
   * Retrieve an existing Parameter Rate by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the Parameter Rate object
   */
  getParameterRate: (id) => crud.getItemById(`${URL}/parameterRates`, id),

  /**
   * Update an existing Parameter Rate
   * @param {string} id or global_id
   * @param {object} updatedParameterRate updated Parameter Rate object definition
   * @param {number} [updatedParameterRate.rate]
   * @param {string} [updatedParameterRate.parameter]
   * @param {string} [updatedParameterRate.environment]
   * @param {number} [updatedParameterRate.poweroffRate]
   * @returns {Promise} resolves with a cloudbolt API Response of the updated Parameter Rate object
   */
  updateParameterRate: (id, updatedParameterRate) =>
    crud.patchItemById(`${URL}/parameterRates`, id, updatedParameterRate),

  /**
   * Delete an existing Parameter Rate by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Success Response
   */
  deleteParameterRate: (id) => crud.deleteItemById(`${URL}/parameterRates`, id),

  /**
   * Retrieve a list of existing OS Build Rates
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a list of existing OS Build Rates
   */
  listOsBuildRates: (options) => crud.getItems(`${URL}/osBuildRates`, options),

  /**
   * Create a new OS Build Rate
   * @param {object} newOsBuildRate new OS Build Rate object definition
   * @param {number} newOsBuildRate.rate required
   * @param {string} newOsBuildRate.osBuild required
   * @param {string} [newOsBuildRate.environment]
   * @param {number} [newOsBuildRate.poweroffRate]
   * @returns {Promise} resolves with a new OS Build Rate object with all server-filled fields
   */
  createOsBuildRate: (newOsBuildRate) =>
    crud.createNewItem(`${URL}/osBuildRates`, newOsBuildRate),

  /**
   * Retrieve an existing OS Build Rate by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the OS Build Rate object
   */
  getOsBuildRate: (id) => crud.getItemById(`${URL}/osBuildRates`, id),

  /**
   * Update an existing OS Build Rate
   * @param {string} id or global_id
   * @param {object} updatedOsBuildRate updated OS Build Rate object definition
   * @param {number} [updatedOsBuildRate.rate]
   * @param {string} [updatedOsBuildRate.osBuild]
   * @param {string} [updatedOsBuildRate.environment]
   * @param {number} [updatedOsBuildRate.poweroffRate]
   * @returns {Promise} resolves with a cloudbolt API Response of the updated OS Build Rate object
   */
  updateOsBuildRate: (id, updatedOsBuildRate) =>
    crud.patchItemById(`${URL}/osBuildRates`, id, updatedOsBuildRate),

  /**
   * Delete an existing OS Build Rate by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Success Response
   */
  deleteOsBuildRate: (id) => crud.deleteItemById(`${URL}/osBuildRates`, id),

  /**
   * Retrieve a list of existing Application Rates
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a list of existing Application Rates
   */
  listApplicationRates: (options) =>
    crud.getItems(`${URL}/applicationRates`, options),

  /**
   * Create a new Application Rate
   * @param {object} newApplicationRate new Application Rate object definition
   * @param {number} newApplicationRate.rate required
   * @param {string} newApplicationRate.application required
   * @param {string} [newApplicationRate.environment]
   * @param {number} [newApplicationRate.poweroffRate]
   * @returns {Promise} resolves with a new Application Rate object with all server-filled fields
   */
  createApplicationRate: (newApplicationRate) =>
    crud.createNewItem(`${URL}/applicationRates`, newApplicationRate),

  /**
   * Retrieve an existing Application Rate by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of the Application Rate object
   */
  getApplicationRate: (id) => crud.getItemById(`${URL}/applicationRates`, id),

  /**
   * Update an existing Application Rate
   * @param {string} id or global_id
   * @param {object} updatedApplicationRate updated Application Rate object definition
   * @param {number} [updatedApplicationRate.rate]
   * @param {string} [updatedApplicationRate.application]
   * @param {string} [updatedApplicationRate.environment]
   * @param {number} [updatedApplicationRate.poweroffRate]
   * @returns {Promise} resolves with a cloudbolt API Response of the updated Application Rate object
   */
  updateApplicationRate: (id, updatedApplicationRate) =>
    crud.patchItemById(`${URL}/applicationRates`, id, updatedApplicationRate),

  /**
   * Delete an existing Application Rate by id
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Success Response
   */
  deleteApplicationRate: (id) =>
    crud.deleteItemById(`${URL}/applicationRates`, id)
}
