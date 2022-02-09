import { path } from 'ramda'

// These constants are used to drill down into error response
const DATA = 'data'
const ENDPOINT = 'endpoint'
const EMBEDDED = '_embedded'
const ERRORS = 'errors'
const HREF = 'href'
const LINKS = '_links'
const RESPONSE = 'response'
const SELF = 'self'
const TITLE = 'title'
const TOTAL_ELEMENTS = 'total'

// TODO: incorporate i18n for these user visible strings
const SUCCESS = 'Success!'
const UNKNOWN_ERROR = 'An unknown error occurred.'

export default {
  ENDPOINT,
  HREF,
  SELF,
  getErrorMessage: (error) => {
    if (
      !error?.[RESPONSE]?.[DATA]?.[ERRORS] ||
      !Array.isArray(error[RESPONSE][DATA][ERRORS]) ||
      !error[RESPONSE][DATA][ERRORS].length
    ) {
      return logAndReturnUnknownError(error)
    }

    const errorResponseData = error[RESPONSE][DATA]
    const errorMessages = errorResponseData[ERRORS]

    // grab "message" properties from each error and join them into a single message
    const errorMessage = errorMessages
      .reduce((errArr, { message }) => {
        if (message) {
          errArr.push(message)
        }
        return errArr
      }, [])
      .join(', ')

    if (!errorMessage.length) {
      return logAndReturnUnknownError(error)
    }

    return errorMessage
  },

  getLinkHrefFromItem: (item, linkName) => {
    const link = item?.[LINKS]?.[linkName]
    return Array.isArray(link) ? link.map((item) => item.href) : link[HREF]
  },

  getLinkAttributesFromItemList: (itemList, linkAttribute) => {
    return itemList.map((item) => item[LINKS][linkAttribute])
  },

  getList: (response, listField) => {
    const selfLinkTitle = response[DATA]?.[LINKS]?.[SELF]?.[TITLE] || ''
    const hasPage = selfLinkTitle.match(/Page\s(\d+)\sof/)
    const responsePageNum = hasPage ? parseInt(hasPage[1]) : 1

    const items = response[DATA]?.[EMBEDDED]?.[listField] || []
    const pageInfo = {
      page: responsePageNum,
      totalElements: response[DATA]?.[TOTAL_ELEMENTS]
    }
    return { items, pageInfo }
  },

  getSingle: (response, responseValueField = '') => {
    const responseFieldArr = responseValueField.split('.').filter(Boolean)
    const responsePathArray = [DATA, ...responseFieldArr]
    return path(responsePathArray, response)
  },

  getDefaultSuccessMessage: () => SUCCESS
}

// Unexpected CloudBolt API error format or we got an unexpected JS error
function logAndReturnUnknownError(error) {
  // TODO: Handle/Log error to wherever we're logging errors instead of the console
  console.error(error)
  return UNKNOWN_ERROR
}
