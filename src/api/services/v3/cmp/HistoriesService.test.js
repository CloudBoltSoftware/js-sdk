import { baseApi } from '../../../baseApi'
import HistoriesService from './HistoriesService'

const mockListResponse = {
  _links: {
    self: {
      href: '/api/v3/cmp/histories/?page=1&page_size=2',
      title: 'List of Histories - Page 1 of 111'
    },
    next: {
      href: '/api/v3/cmp/histories/?page=2&page_size=2',
      title: 'Next List Page'
    }
  },
  total: 221,
  count: 2,
  _embedded: {
    histories: [
      {
        _links: {
          self: {
            href: '/api/v3/cmp/histories/HIS-255ugi0f/',
            title: ''
          },
          owner: {},
          job: {},
          server: {},
          resourceAction: {},
          serverAction: {},
          environment: {},
          order: {}
        },
        id: 'HIS-255ugi0f',
        eventMessage: 'An alert has been requested to be sent',
        eventType: 'SENT',
        actionTime: '2022-11-04 23:39:10.866753',
        rateChange: null,
        historyType: 'alerthistory',
        jobId: null,
        serverId: null,
        resourceId: null,
        serverActionId: null,
        resourceActionId: null,
        environmentId: null,
        orderId: null,
        serverPowerStatus: null
      },
      {
        _links: {
          self: {
            href: '/api/v3/cmp/histories/HIS-iy5r0duf/',
            title: 'experience_eCIT_10'
          },
          owner: {},
          job: {
            href: '/api/v3/cmp/jobs/JOB-f62k4gru/',
            title: 'Synchronize VMs from vCenter Job 344'
          },
          server: {
            href: '/api/v3/cmp/servers/SVR-byvtcaee/',
            title: 'experience_eCIT_10'
          },
          resourceAction: {},
          serverAction: {},
          environment: {},
          order: {}
        },
        id: 'HIS-iy5r0duf',
        eventMessage:
          "  Server record set to historical because its VM can no longer be found on resource handler 'VMware vCenter'",
        eventType: 'DECOMMISSION',
        actionTime: '2022-11-04 19:32:23.021371',
        rateChange: '0E-10',
        historyType: 'serverhistory',
        jobId: 'JOB-f62k4gru',
        serverId: 'SVR-byvtcaee',
        resourceId: null,
        serverActionId: null,
        resourceActionId: null,
        environmentId: null,
        orderId: null,
        serverPowerStatus: 'POWEROFF'
      }
    ]
  }
}

const mockGetResponse = {
  _links: {
    self: {
      href: '/api/v3/cmp/histories/HIS-iy5r0duf/',
      title: 'experience_eCIT_10'
    },
    owner: {},
    job: {
      href: '/api/v3/cmp/jobs/JOB-f62k4gru/',
      title: 'Synchronize VMs from vCenter Job 344'
    },
    server: {
      href: '/api/v3/cmp/servers/SVR-byvtcaee/',
      title: 'experience_eCIT_10'
    },
    resourceAction: {},
    serverAction: {},
    environment: {},
    order: {}
  },
  id: 'HIS-iy5r0duf',
  eventMessage:
    "  Server record set to historical because its VM can no longer be found on resource handler 'VMware vCenter'",
  eventType: 'DECOMMISSION',
  actionTime: '2022-11-04 19:32:23.021371',
  rateChange: '0E-10',
  historyType: 'serverhistory',
  jobId: 'JOB-f62k4gru',
  serverId: 'SVR-byvtcaee',
  resourceId: null,
  serverActionId: null,
  resourceActionId: null,
  environmentId: null,
  orderId: null,
  serverPowerStatus: 'POWEROFF'
}

test('list calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: [{ hello: 'world' }]
  })
  await HistoriesService.list()
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/histories/')
})

test('list parses data without issue', async () => {
  jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: mockListResponse
  })
  const result = await HistoriesService.list()
  expect(result.items).toEqual(mockListResponse._embedded.histories)
})

test('get calls the correct endpoint', async () => {
  const mockFn = jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: { hello: 'world' }
  })
  await HistoriesService.get('history-id')
  expect(mockFn).toHaveBeenCalledWith('/v3/cmp/histories/history-id/')
})

test('get parses data without issue', async () => {
  jest.spyOn(baseApi, 'get').mockResolvedValue({
    data: mockGetResponse
  })
  const result = await HistoriesService.get('history-id')
  expect(result).toEqual(mockGetResponse)
})
