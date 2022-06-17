import {
  LineStyle,

  TrendingUp,

  Storefront,

  ExitToApp,
  WorkOutline,
  Settings,
  PeopleOutline,
} from '@material-ui/icons'
export const sidebarMenu = [
  {
    id: 1,
    item: 'Home',
    icon: <LineStyle className="sidebarIcon" />,
    outlet: 'home',
    class: 'active',
  },
  {
    id: 2,
    item: 'Sales',
    icon: <TrendingUp className="sidebarIcon" />,
    outlet: 'sales',
    class: 'active',
  },
  {
    id: 3,
    item: 'Products',
    icon: <Storefront className="sidebarIcon" />,
    outlet: 'products',
    dropdowna: 'Show all',
    class: 'active',
  },
  {
    id: 4,
    item: 'Reports',
    icon: <WorkOutline className="sidebarIcon" />,
    outlet: 'reports',
    class: 'active',
  },
  {
    id: 5,
    item: 'Reports',
    icon: <PeopleOutline className="sidebarIcon" />,
    outlet: 'reports',
    class: 'active',
  },
  {
    id: 6,
    item: 'Settings',
    icon: <Settings className="sidebarIcon" />,
    outlet: 'reports',
    newclass: 'bottom',
  },
  {
    id: 7,
    item: 'Logout',
    icon: <ExitToApp className="sidebarIcon" />,
    outlet: 'reports',
  },
]
