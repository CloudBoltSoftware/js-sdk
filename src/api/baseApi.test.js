// import router from '~/router'
// import store from '~/store'
// import {
//   loadingActions,
//   messagesActions,
//   sessionActions
// } from '~/store/methods'
// import { _requestInterceptor, _responseInterceptor } from './baseApi'

// describe('BaseApi', () => {
//   describe('_requestInterceptor', () => {
//     it('sets "Authorization" header when token is not expired', async () => {
//       var expDate = new Date()
//       expDate.setDate(expDate.getDate() + 5)
//       jest.spyOn(store, 'state', 'get').mockReturnValue({
//         authToken: { authToken: 'token', tokenExpiration: expDate.getTime() }
//       })
//       jest.spyOn(store, 'dispatch').mockResolvedValue()
//       const payload = {
//         headers: {}
//       }

//       const resultPayload = await _requestInterceptor(payload)

//       expect(resultPayload.headers['Authorization']).toBe('Bearer token')
//     })

//     it('does not set "Authorization" header when token is expired', async () => {
//       var expDate = new Date()
//       expDate.setDate(expDate.getDate() - 5)
//       jest.spyOn(store, 'state', 'get').mockReturnValue({
//         authToken: { authToken: 'token', tokenExpiration: expDate.getTime() }
//       })
//       jest.spyOn(store, 'dispatch').mockResolvedValue()
//       const payload = {
//         headers: {}
//       }

//       const resultPayload = await _requestInterceptor(payload)

//       expect(resultPayload.headers['Authorization']).toBeUndefined()
//     })

//     it('dispatches msg to loading/setLoadingStatus', async () => {
//       var expDate = new Date()
//       expDate.setDate(expDate.getDate() - 5)
//       jest.spyOn(store, 'state', 'get').mockReturnValue({
//         authToken: { authToken: 'token', tokenExpiration: expDate.getTime() }
//       })
//       jest.spyOn(store, 'dispatch').mockResolvedValue()
//       const payload = {
//         headers: {},
//         data: {
//           msg: 'Test message'
//         }
//       }

//       await _requestInterceptor(payload)

//       expect(store.dispatch).toBeCalledWith(
//         loadingActions.setLoadingStatus,
//         expect.objectContaining({ message: 'Test message' })
//       )
//     })
//   })

//   describe('_responseInterceptor', () => {
//     describe('success callback', () => {
//       it('dispatches session and loading actions on response', async () => {
//         jest.spyOn(store, 'dispatch')

//         await _responseInterceptor.success({})

//         expect(store.dispatch).toBeCalledWith(
//           sessionActions.setUpgradeStatus,
//           false
//         )
//         expect(store.dispatch).toBeCalledWith(loadingActions.setLoadingStatus)
//       })
//     })
//     describe('error callback', () => {
//       it('sets upgrade status for 503 and navigates to 503 page', () => {
//         jest.spyOn(router, 'currentRoute', 'get').mockReturnValue({ path: '/' })
//         jest.spyOn(router, 'push').mockImplementation(() => {})
//         jest.spyOn(store, 'dispatch')

//         const error = {
//           response: {
//             status: 503
//           }
//         }

//         _responseInterceptor.error(error)

//         expect(store.dispatch).toBeCalledWith(
//           sessionActions.setUpgradeStatus,
//           true
//         )
//         expect(router.push).toBeCalledWith('/503')
//       })

//       it('does not set dispatch or push routes for 503 error if already on 503 page', () => {
//         jest
//           .spyOn(router, 'currentRoute', 'get')
//           .mockReturnValue({ path: '/503' })
//         jest.spyOn(router, 'push').mockImplementation(() => {})
//         jest.spyOn(store, 'dispatch')

//         const error = {
//           response: {
//             status: 503
//           }
//         }

//         _responseInterceptor.error(error)

//         expect(store.dispatch).not.toBeCalledWith(
//           sessionActions.setUpgradeStatus,
//           true
//         )
//         expect(router.push).not.toBeCalledWith('/503')
//       })

//       it('dispatches a message action for 401 unauthorized', () => {
//         jest.spyOn(router, 'currentRoute', 'get').mockReturnValue({ path: '/' })
//         jest.spyOn(router, 'push').mockImplementation(() => {})
//         jest.spyOn(store, 'dispatch')

//         const error = {
//           response: {
//             status: 401
//           }
//         }

//         _responseInterceptor.error(error).catch(() => {})

//         expect(store.dispatch).toBeCalledWith(
//           messagesActions.addError,
//           'Unauthorized'
//         )
//       })

//       it('navigates to error timeout page for 504 error', () => {
//         jest.spyOn(router, 'currentRoute', 'get').mockReturnValue({ path: '/' })
//         jest.spyOn(router, 'push').mockImplementation(() => {})
//         jest.spyOn(store, 'dispatch')

//         const error = {
//           response: {
//             status: 504
//           }
//         }

//         _responseInterceptor.error(error).catch(() => {})

//         expect(router.push).toBeCalledWith('/504')
//       })

//       it('does not navigate to error timeout page for 504 error if already on page', () => {
//         jest
//           .spyOn(router, 'currentRoute', 'get')
//           .mockReturnValue({ path: '/504' })
//         jest.spyOn(router, 'push').mockImplementation(() => {})
//         jest.spyOn(store, 'dispatch')

//         const error = {
//           response: {
//             status: 504
//           }
//         }

//         _responseInterceptor.error(error).catch(() => {})

//         expect(router.push).not.toBeCalledWith('/504')
//       })

//       it('dispatches a message action for unknown errors', () => {
//         jest.spyOn(router, 'currentRoute', 'get').mockReturnValue({ path: '/' })
//         jest.spyOn(router, 'push').mockImplementation(() => {})
//         jest.spyOn(store, 'dispatch')

//         const error = {
//           response: {
//             status: 418
//           }
//         }

//         _responseInterceptor.error(error).catch(() => {})

//         expect(store.dispatch).toBeCalledWith(messagesActions.addError, error)
//       })

//       it('sets loading status to undefined/empty', () => {
//         jest.spyOn(router, 'currentRoute', 'get').mockReturnValue({ path: '/' })
//         jest.spyOn(router, 'push').mockImplementation(() => {})
//         jest.spyOn(store, 'dispatch')

//         const error = {
//           response: {
//             status: 503
//           }
//         }

//         _responseInterceptor.error(error)

//         expect(store.dispatch).toBeCalledWith(loadingActions.setLoadingStatus)
//       })

//       it('returns null for 503', () => {
//         jest.spyOn(router, 'currentRoute', 'get').mockReturnValue({ path: '/' })
//         jest.spyOn(router, 'push').mockImplementation(() => {})
//         jest.spyOn(store, 'dispatch')

//         const error = {
//           response: {
//             status: 503
//           }
//         }

//         const response = _responseInterceptor.error(error)

//         expect(response).toBeNull()
//       })

//       it('returns promise reject containing error for non 503 errors', () => {
//         jest.spyOn(router, 'currentRoute', 'get').mockReturnValue({ path: '/' })
//         jest.spyOn(router, 'push').mockImplementation(() => {})
//         jest.spyOn(store, 'dispatch')

//         const error = {
//           response: {
//             status: 401
//           }
//         }

//         _responseInterceptor.error(error).catch((err) => {
//           expect(err).toBe(error)
//         })
//       })

//       it('works when currentRoute is empty', () => {
//         jest.spyOn(router, 'currentRoute', 'get').mockReturnValue()
//         jest.spyOn(router, 'push').mockImplementation(() => {})
//         jest.spyOn(store, 'dispatch')

//         const error = {
//           response: {
//             status: 503
//           }
//         }

//         const response = _responseInterceptor.error(error)

//         expect(response).toBeNull()
//       })
//     })
//   })
// })
