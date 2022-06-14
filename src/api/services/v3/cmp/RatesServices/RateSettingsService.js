import crud from '../../../../crudOperations'

const URL = 'v3/cmp/rates/settings'

export default {
  /**
   * Get the current configuration settings for Rates
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a cloudbolt API Response of the Rates Setting object
   */
  get: (options) => crud.getItems(URL, options),

  /**
   * Update existing Rate Configuration setting for time and currency
   * @param {object} updatedRateSettings updated Rates Setting object definition
   * @param {string} [updatedRateSettings.rateTimeUnit]
   * @param {string} [updatedRateSettings.rateCurrencyUnit]
   * @returns {Promise} resolves with a cloudbolt API Response of the updated Rates Setting object
   */
  update: (updatedRateSettings) =>
    crud.patchItemById(URL, undefined, updatedRateSettings)
}
