import { baseApi } from '../../baseApi'
import DashboardService from './DashboardService'

describe('getBlueprints', () => {
  const getResponse = {
    data: {
      _links: {
        self: {
          href: '/api/v3/dashboard/blueprints/?page=1&page_size=12&sort=featured',
          title: 'List of Blueprints - Page 1 of 1'
        }
      },
      total: 3,
      count: 3,
      _embedded: {
        blueprints: [
          {
            _links: {
              self: {
                href: '/api/v3/dashboard/blueprintsBP-8jxf9scz/',
                title: 'Blueprint id 1'
              }
            },
            name: 'Custom Server',
            id: 1,
            renderedDescription: '<p>Provision a new server</p>',
            orderUrl: '/catalog/1/order/',
            imagePath:
              '/var/www/html/cloudbolt/static/uploads/blueprints/icon.png'
          },
          {
            _links: {
              self: {
                href: '/api/v3/dashboard/blueprintsBP-ckqld1ke/',
                title: 'Blueprint id 4'
              }
            },
            name: 'HTML in Description',
            id: 4,
            renderedDescription:
              '<p>&#8226;&nbsp; Add your AWS Account .\nLong description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description.</p>',
            orderUrl: '/catalog/4/order/',
            imagePath: ''
          },
          {
            _links: {
              self: {
                href: '/api/v3/dashboard/blueprintsBP-0dmaih1q/',
                title: 'Blueprint id 2'
              }
            },
            name: 'temp',
            id: 2,
            renderedDescription:
              '<p>Long description.\nLong description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description. Long description.</p>',
            orderUrl: '/catalog/2/order/',
            imagePath: ''
          }
        ]
      }
    }
  }

  beforeEach(() => {
    jest.spyOn(baseApi, 'get').mockResolvedValue(getResponse)
  })

  it('gets expected blueprints', async () => {
    const response = await DashboardService.getBlueprints()
    expect(response.items).toEqual(getResponse.data._embedded.blueprints)
  })

  it('shows the correct page data', async () => {
    const response = await DashboardService.getBlueprints()
    expect(response.pageInfo).toEqual({
      page: 1,
      nextPage: '',
      previousPage: '',
      totalElements: 3
    })
  })
})

describe('getEnvironments', () => {
  const getResponse = {
    data: {
      _links: {
        self: {
          href: '/api/v3/dashboard/environments/?page=1&sort=servers&direction=descending',
          title: 'List of Environments - Page 1 of 1'
        }
      },
      total: 8,
      count: 8,
      _embedded: {
        environments: [
          {
            _links: {
              self: {
                href: '/api/v3/dashboard/environmentsENV-di3mda2h/',
                title: 'Environment id 2'
              }
            },
            name: '(AWS) US West (Oregon) vpc-8b44fbe3',
            id: 2,
            rate: '0E-10',
            nonHistoricalServerCount: 61
          },
          {
            _links: {
              self: {
                href: '/api/v3/dashboard/environmentsENV-18ggzlnp/',
                title: 'Environment id 6'
              }
            },
            name: '(AWS) US West (Oregon) uswest2-vpc-a',
            id: 6,
            rate: '0E-10',
            nonHistoricalServerCount: 2
          },
          {
            _links: {
              self: {
                href: '/api/v3/dashboard/environmentsENV-qe3up4vv/',
                title: 'Environment id 1'
              }
            },
            name: 'Unassigned',
            id: 1,
            rate: null,
            nonHistoricalServerCount: 0
          },
          {
            _links: {
              self: {
                href: '/api/v3/dashboard/environmentsENV-52uel9w6/',
                title: 'Environment id 5'
              }
            },
            name: '(AWS) US West (Oregon) kubernetes-vpc',
            id: 5,
            rate: null,
            nonHistoricalServerCount: 0
          },
          {
            _links: {
              self: {
                href: '/api/v3/dashboard/environmentsENV-73tx7q8o/',
                title: 'Environment id 4'
              }
            },
            name: '(AWS) US West (Oregon) Koding-cloudbolt-Bootstrap',
            id: 4,
            rate: null,
            nonHistoricalServerCount: 0
          },
          {
            _links: {
              self: {
                href: '/api/v3/dashboard/environmentsENV-zjqedtyv/',
                title: 'Environment id 8'
              }
            },
            name: '(AWS) US West (Oregon) NSXT-AWS-WEST',
            id: 8,
            rate: null,
            nonHistoricalServerCount: 0
          },
          {
            _links: {
              self: {
                href: '/api/v3/dashboard/environmentsENV-fo4npjhw/',
                title: 'Environment id 3'
              }
            },
            name: '(AWS) US West (Oregon) vpc-00892501d240ee22b',
            id: 3,
            rate: null,
            nonHistoricalServerCount: 0
          },
          {
            _links: {
              self: {
                href: '/api/v3/dashboard/environmentsENV-dq42g83l/',
                title: 'Environment id 7'
              }
            },
            name: '(AWS) US West (Oregon) VPC 0003',
            id: 7,
            rate: null,
            nonHistoricalServerCount: 0
          }
        ]
      }
    }
  }

  beforeEach(() => {
    jest.spyOn(baseApi, 'get').mockResolvedValue(getResponse)
  })

  it('gets expected environment', async () => {
    const response = await DashboardService.getEnvironments()
    expect(response.items).toEqual(getResponse.data._embedded.environments)
  })

  it('shows the correct page data', async () => {
    const response = await DashboardService.getEnvironments()
    expect(response.pageInfo).toEqual({
      page: 1,
      nextPage: '',
      previousPage: '',
      totalElements: 8
    })
  })
})

// If the above two are good, the other Widget Data endpoints should be good too.

describe('widgets endpoints', () => {
  it('getWidgets calls the correct endpoint', async () => {
    const mockFn = jest
      .spyOn(baseApi, 'get')
      .mockResolvedValue({ widgets: [{ hello: 'world' }] })
    await DashboardService.getWidgets()
    expect(mockFn).toHaveBeenCalledWith('/v3/dashboard/widgets/')
  })

  it('getWidget calls the correct endpoint', async () => {
    const mockFn = jest
      .spyOn(baseApi, 'get')
      .mockResolvedValue({ widget: { hello: 'world' } })
    await DashboardService.getWidget('widget-id')
    expect(mockFn).toHaveBeenCalledWith('/v3/dashboard/widgets/widget-id/')
  })

  it('createWidget calls the correct endpoint', async () => {
    const mockFn = jest
      .spyOn(baseApi, 'post')
      .mockResolvedValue({ widget: { hello: 'world' } })
    const mockWidget = { hello: 'world' }
    await DashboardService.createWidget(mockWidget)
    expect(mockFn).toHaveBeenCalledWith('/v3/dashboard/widgets/', mockWidget)
  })

  it('updateWidget calls the correct endpoint', async () => {
    const mockFn = jest
      .spyOn(baseApi, 'put')
      .mockResolvedValue({ widget: { hello: 'world' } })
    const mockWidget = { hello: 'world' }
    await DashboardService.updateWidget('widget-id', mockWidget)
    expect(mockFn).toHaveBeenCalledWith(
      '/v3/dashboard/widgets/widget-id/',
      mockWidget
    )
  })

  it('deleteWidget calls the correct endpoint', async () => {
    const mockFn = jest.spyOn(baseApi, 'delete').mockResolvedValue({})
    await DashboardService.deleteWidget('widget-id')
    expect(mockFn).toHaveBeenCalledWith('/v3/dashboard/widgets/widget-id/')
  })

  it('getWidgetBlacklist calls the correct endpoint', async () => {
    const mockFn = jest
      .spyOn(baseApi, 'get')
      .mockResolvedValue([{ hello: 'world' }])
    await DashboardService.getWidgetBlacklist()
    expect(mockFn).toHaveBeenCalledWith('/v3/dashboard/widgets/blacklist/')
  })
})
