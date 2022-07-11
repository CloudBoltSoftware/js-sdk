import { baseApi } from '../../../baseApi'
import AnnouncementService from './AnnouncementService'

const BASE_URL = '/v3/dashboard/announcements/'

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: [{ hello: 'world' }]
  })
  await AnnouncementService.list()
  expect(mockFn).toHaveBeenCalledWith(BASE_URL)
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await AnnouncementService.get('announcement-id')
  expect(mockFn).toHaveBeenCalledWith(`${BASE_URL}announcement-id/`)
})

test('create calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'post').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockAnnouncement = { hello: 'world' }
  await AnnouncementService.create(mockAnnouncement)
  expect(mockFn).toHaveBeenCalledWith(BASE_URL, mockAnnouncement)
})

test('update calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'put').mockResolvedValue({
    data: { hello: 'world' }
  })
  const mockAnnouncement = { hello: 'world' }
  await AnnouncementService.update('announcement-id', mockAnnouncement)
  expect(mockFn).toHaveBeenCalledWith(
    `${BASE_URL}announcement-id/`,
    mockAnnouncement
  )
})

test('delete calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'delete').mockResolvedValue({})
  await AnnouncementService.delete('announcement-id')
  expect(mockFn).toHaveBeenCalledWith(`${BASE_URL}announcement-id/`)
})
