import crud from '../../../crudOperations'

const URL = 'v3/cmp/settings'

export default {
  /**
   * Retrieve Settings for mainly the Catalog
   * @param options Optionally select specific fields that can be returned alone.
   * example: '/?fields=catalogViewingMode' only returns the catalogViewingMode value
   * Full list: runQuickSetup,catalogViewingMode,catalogShowCategoriesFilter,
   * catalogShowOsBuildsFilter,catalogShowResourceTypesFilter,catalogShowGroupsFilter
   * @returns {Promise} API Response of the Settings object, or the specific fields requested
   */
  list: (options) => crud.getItems(URL, options)
}
