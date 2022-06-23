import AnnouncementService from './AnnouncementService'
import DashboardService from './DashboardService'
import WidgetService from './WidgetService'

export default {
  ...DashboardService,
  widgets: WidgetService
}
