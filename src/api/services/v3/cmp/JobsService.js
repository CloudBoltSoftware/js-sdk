import crud from '../../../crudOperations'

const URL = 'v3/cmp/jobs'

export default {
  /**
   * Retrieve a list of existing jobs
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns
   */
  list: (options) => crud.getItems(URL, options),

  /**
   * Cancel one or more jobs
   * @param {object} payload
   * @param {array} payload.jobs List of Job hrefs to clone
   * @returns {Promise} resolves with a cloudbolt API Response object of Job objects
   */
  cancel: (payload) => crud.postItem(URL, payload),

  /**
   * Retrieve an existing job
   * @param {string} id or global_id
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns {Promise} resolves with a cloudbolt API Response object of Job objects
   */
  get: (id, options) => crud.getItemById(URL, id, options),

  /**
   * Clone (re-run) a job
   * @param {string} id or global_id
   * @returns {Promise} resolves with a cloudbolt API Response object of Job object
   */
  clone: (id) => crud.postItem(`${URL}/${id}/clone`, null),

  /**
   * Resume a paused job
   * @param {string} id or global_id
   * @param {object} payload
   * @param {'STEP' | 'NEXT' | 'RETURN' | 'RUNNING'} payload.resume_type Job href to resume
   */
  resume: (id, payload) =>
    crud.patchItemById(`${URL}/${id}/resume`, null, payload)
}
