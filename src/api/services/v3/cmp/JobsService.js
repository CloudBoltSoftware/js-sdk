import crud from '../../../crudOperations'

const URL = 'v3/cmp/jobs'

export default {
  /**
   * Retrieve a list of existing jobs
   * @param options anything parsable by URLSearchParams. See useful options here https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799
   * @returns
   */
  list: (options) =>
    crud.getItems(URL, {
      filter: 'type.iexact:functionaltest',
      page_size: 100,
      ...options
    })
}
