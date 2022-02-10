import axios from 'axios'
// import router from '~/router'
// import { ERROR_GATEWAY_TIMEOUT, ERROR_UPGRADING_APP } from '~/router/paths'
// import store from '~/store'
// import {
//   loadingActions,
//   messagesActions,
//   sessionActions
// } from '~/store/methods'

export const BASE_URL = '/api'

export const cloudboltApi = axios.create({
  baseURL: BASE_URL
})

// export const _requestInterceptor = async (payload) => {
//   const AUTHORIZATION = 'Authorization'
//   const token = store.state.authToken.authToken
//   const expirationTime = store.state.authToken.tokenExpiration
//   if (token && expirationTime > Date.now()) {
//     payload.headers[AUTHORIZATION] = `Bearer ${token}`
//   }

//   const { msg } = payload.data || ''
//   const loaderProps = { message: msg, visible: true }
//   await store.dispatch(loadingActions.setLoadingStatus, loaderProps)

//   return payload
// }

// export const _responseInterceptor = {
//   success: (response) => {
//     store.dispatch(sessionActions.setUpgradeStatus, false)
//     store.dispatch(loadingActions.setLoadingStatus)
//     return response
//   },
//   error: (error) => {
//     const STATUS_CODE_GATEWAY_TIMEOUT = 504
//     const STATUS_CODE_SERVICE_UNAVAILABLE = 503
//     const STATUS_CODE_UNAUTHORIZED = 401
//     const currentRoute = router?.currentRoute || {
//       currentRoute: { path: null }
//     }
//     const status = error.response?.status || 'undefined'
//     switch (true) {
//       case status === STATUS_CODE_SERVICE_UNAVAILABLE: // 503
//         if (currentRoute.path !== ERROR_UPGRADING_APP) {
//           store.dispatch(sessionActions.setUpgradeStatus, true)
//           router.push(ERROR_UPGRADING_APP)
//         }
//         break
//       case status === STATUS_CODE_UNAUTHORIZED: // 401
//         store.dispatch(messagesActions.addError, 'Unauthorized')
//         break
//       case status === STATUS_CODE_GATEWAY_TIMEOUT: // 504
//         if (currentRoute.path !== ERROR_GATEWAY_TIMEOUT) {
//           router.push(ERROR_GATEWAY_TIMEOUT)
//         }
//         break
//       default:
//         store.dispatch(messagesActions.addError, error)
//     }
//     store.dispatch(loadingActions.setLoadingStatus)
//     if (status === STATUS_CODE_SERVICE_UNAVAILABLE) {
//       return null
//     } else {
//       return Promise.reject(error)
//     }
//   }
// }

// cloudboltApi.interceptors.request.use(_requestInterceptor)

// cloudboltApi.interceptors.response.use(
//   _responseInterceptor.success,
//   _responseInterceptor.error
// )
