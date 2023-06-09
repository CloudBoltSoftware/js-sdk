# CloudBolt API Helper

## Features

- Use idomatic js to interact with the CloudBolt API for a subset of endpoints
  - Normalizes responses for list requests
  - In-IDE documentation/intellisense for all included endpoints
- Helper methods for common tasks
- built with [axios](https://github.com/axios/axios) with through-access for advanced use cases

## Installation

```bash
npm install @cloudbolt/api-helper
```

## Usage

### Package Structure

The package exports a single function, `createApi`. This function returns an `api` instance with methods for interacting with the CloudBolt API. The `api` instance is simply an object with nested objects and methods. Important properties include:

- `api.base` - helper methods and objects for interacting with the CloudBolt API
  - `api.base.instance` - the axios instance used for all requests
  - `api.base.crud` - helper methods for interacting with the CloudBolt API at a low-level. They take an endpoint string and various other arguments and options.
  - `api.base.setAuthHeader` - set the auth header on the axios instance
  - `api.base.setErrorHandler` - set a custom error handler for failed requests
- `api.v3` - methods for interacting with the CloudBolt API v3. Generally they attempt to follow the url structure of the underlying endpoints, [as documented in Swaggerhub](https://app.swaggerhub.com/apis-docs/cloudbolt/Cloudbolt_CMP_API/). Examples are:
  - `api.v3.cmp.environments`
    - `api.v3.cmp.environments.list(options)`
    - `api.v3.cmp.environments.get(id)`
    - `api.v3.cmp.environments.create(newEnvironment)`
    - `api.v3.cmp.environments.update(id, updatedEnvironment)`
    - `api.v3.cmp.environments.replace(id, newEnvironment)`
    - `api.v3.cmp.environments.delete(id)`
    - `api.v3.cmp.environments.export(id)`
    - `api.v3.cmp.environments.getParameters(id)`
    - `api.v3.cmp.environments.setParameters(id, parameters)`
  - `api.v3.cmp.groups`
    - `api.v3.cmp.groups.list(options)`
    - `api.v3.cmp.groups.get(id)`
    - `api.v3.cmp.groups.create(newGroup)`
    - `api.v3.cmp.groups.update(id, updatedGroup)`
    - `api.v3.cmp.groups.delete(id)`
  - `api.v3.cmp.users`
    - `api.v3.cmp.users.list(options)`
    - `api.v3.cmp.users.getCurrentUser(options)`
    - `api.v3.cmp.users.getUserDetails(id)`
    - `api.v3.cmp.users.getUserPermissions(id)`
    - `api.v3.cmp.users.updatePassword(id, options)`

For an exhaustive look at what is available in `api.v3...`, see in-IDE documentation as you code or the built [types list](./types/index.d.ts). For all other API capabilities, use the `api.base.crud` methods and refer to the [Swaggerhub documentation](https://app.swaggerhub.com/apis-docs/cloudbolt/Cloudbolt_CMP_API/).

### What do endpoints return?

Refer to the examples in the [Swaggerhub documentation](https://app.swaggerhub.com/apis-docs/cloudbolt/Cloudbolt_CMP_API/) for specific endpoint examples. Generally, endpoints return a `Promise` that resolves to the response data from the API.

This package restructures responses from `list` endpoints slightly to make responses more predictable and ergonomic for a js context. If you ever need the original, unstructured response from a query, use the axios instance at `api.base.instance` and query endpoints directly. When using `api.v3...` list endpoints or the helper `api.base.crud.getItems`, the response data looks like this:

```js
{
   items: any[];
   pageInfo: {
      page: number;
      nextPage: string;
      previousPage: string;
      totalElements: number;
   };
}
```

## Examples

### Authentication

If using api-helper from within a CB Applet, the applet receives a pre-authenticated `api` instance for the currently logged in user. It will automatically refresh the auth token as needed.

If using api-helper from a stand-alone app, you will need to obtain an auth token from CloudBolt, set it on the api instance, and handle token refreshing manually.

```js
// Initialize the api helper
import { createApi } from '@cloudbolt/api-helper'
const api = createApi()

// Get an auth token from CloudBolt
const token = await api.v3.cmp.apiToken.obtainToken('username', 'password')
// If operating from within a CloudBolt UI Extension, you can use the session cookie:
// const token = await api.v3.cmp.apiToken.obtainTokenWithSessionCookie()

// Save the auth token to the api helper's axios instance
api.base.setAuthHeader(token)

// Congrat's! You're ready to start making requests to the CloudBolt API with the `api` instance

// As needed (according to the timeout set in CloudBolt or on auth failure), refresh the auth token
const newToken = await api.v3.cmp.apiToken.refreshToken()
api.base.setAuthHeader(newToken)
```

### Simple Queries

```js
// Get a list of environments
const environments = await api.v3.cmp.environments.list()
// Show all of their names
environments.items.forEach((env) => console.log(env.name))
// How many are there total?
console.log(environments.pageInfo.totalElements)

// Get a single environment
const environment = await api.v3.cmp.environments.get('ENV-12345678')
// Show its name
console.log(environment.name)
```

### Queries with options

List endpoints (and some get endpoints) take optional `options` arguments. These options are js objects that generally get converted to query parameters on the request. See [Swaggerhub documentation](https://app.swaggerhub.com/apis-docs/cloudbolt/Cloudbolt_CMP_API/) for per-endpoint available querystrings, our [API Conventions](https://docs.cloudbolt.io/articles/#!cloudbolt-latest-docs/api-conventions/a/h2__904191799) for some commonly available querystrings. For example:

```js
// Get the second page of 300 resources
const resources = await api.v3.cmp.resources.list({ page: 2, page_size: 300 })

// Get groups named "my-group"
const groups = await api.v3.cmp.groups.list({ filter: 'name:my-group' })
  .items[0]

// Get jobs ordered by endDate descending
const jobs = await api.v3.cmp.jobs.list({ ordering: '-endDate' })
```

### Querying the base API

Not all endpoints are included in the `api.v3...` helpers. For all other endpoints, use the `api.base.crud` methods. These methods are generic and can be used to query any endpoint and include the `/api` prefix. For example:

```js
// Get a list of all f5 load balancers
const loadBalancers = await api.base.crud.getItems('/v3/cmp/loadBalancers/', {
  filter: 'type:f5'
})

// Get an OS Image
const osImage = await api.base.crud.getItem('/v3/cmp/osImages/IMG-12345678/')

// Patch a tenant
const newTenant = await api.base.crud.patchItemById(
  '/v3/cmp/tenants/TNT-12345678/',
  { label: 'My Tenant Update' }
)

// Get the next page of a list result
const userPage1 = await api.v3.cmp.users.list()
const page2Url = userPage1.pageInfo.nextPage
const userPage2 = await api.base.crud.getItems(page2Url)
```

You can also use the base axios instance directly (useful if there isn't a helper method for the endpoint or verb you need, or if you have an advanced use case):

```js
// Download web logs
const logs = await api.base.instance.get('/api/v3/cmp/logs/web/')

// Delete a network
await api.base.instance.delete('/api/v3/cmp/networks/ET-12345678/')
```

## Development (for maintainers)

### How to publish a new version

1. Delete any local `types` and `lib` folder in this directory
1. Increment the version of the `package.json` for this project and do an install to be sure the `package-lock.json` is up to date as well.
   - The command `npm version patch` does this for you. It creates a git tag too.
   - If in testing, create a beta version with `npm version prepatch --preid beta`
1. Run the command `npm run build` which will create the `types` and `lib` folder for this version you are about to publish.
1. Run the command `npm publish` to publish this version
