import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Quick Access'
  },
  {
    name: 'Main Dispatcher',
    url: '/quicklinks/maindispatcher',
    icon: 'icon-drop'
  },
  {
    name: 'Typography',
    url: '/theme/typography',
    icon: 'icon-pencil'
  },
  {
    name: 'Fleet View',
    url: '/quicklinks/fleetview',
    icon: 'icon-pencil'
  },
  {
    title: true,
    name: 'Components'
  },
  {
    name: 'Fleet/WorkForce',
    url: '/workforce',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'DashBoard',
        url: '/workforce/DashBoard',
        icon: 'icon-puzzle'
      },
      {
        name: 'Vehicle Models',
        url: '/workforce/vehiclemodels',
        icon: 'icon-puzzle'
      },
      {
        name: 'Vehicles',
        url: '/workforce/vehicles',
        icon: 'icon-puzzle'
      },
      {
        name: 'Packages',
        url: '/workforce/packages',
        icon: 'icon-puzzle'
      },
      {
        name: 'Drivers',
        url: '/workforce/drivers',
        icon: 'icon-puzzle'

      },
      {
        name: 'Driver Ratings',
        url: '/workforce/driverratings',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    name: 'Dispatcher',
    url: '/dispatcher',
    icon: 'icon-cursor',
    children: [
      {
        name: 'Dashboard',
        url: '/dispatcher/dashboard',
        icon: 'icon-cursor'
      },
      {
        name: 'Manage Bookings',
        url: '/dispatcher/managebooking',
        icon: 'icon-cursor'
      },
      {
        name: 'Drivers Status',
        url: '/dispatcher/driverstatus',
        icon: 'icon-cursor'
      },
      {
        name: 'Dispatch Settings',
        url: '/dispatcher/dissettings',
        icon: 'icon-cursor'
      }
    ]
  },
  {
    name: 'Revenue',
    url: '/revenue',
    icon: 'icon-star',
    children: [
      {
        name: 'DashBoard',
        url: '/revenue/dashboard',
        icon: 'icon-star',
        badge: {
          variant: 'success',
          text: 'NEW'
        }
      },
      {
        name: 'Flags',
        url: '/revenue/flags',
        icon: 'icon-star'
      },
      {
        name: 'Font Awesome',
        url: '/revenue/font-awesome',
        icon: 'icon-star',
        badge: {
          variant: 'secondary',
          text: '4.7'
        }
      },
      {
        name: 'Simple Line Icons',
        url: '/revenue/simple-line-icons',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/notifications',
    icon: 'icon-bell',
    children: [
      {
        name: 'Alerts',
        url: '/notifications/alerts',
        icon: 'icon-bell'
      },
      {
        name: 'Badges',
        url: '/notifications/badges',
        icon: 'icon-bell'
      },
      {
        name: 'Modals',
        url: '/notifications/modals',
        icon: 'icon-bell'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/widgets',
    icon: 'icon-calculator',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    divider: true
  },
  {
    title: true,
    name: 'Extras',
  },
  {
    name: 'Pages',
    url: '/pages',
    icon: 'icon-star',
    children: [
      {
        name: 'Login',
        url: '/login',
        icon: 'icon-star'
      },
      {
        name: 'Register',
        url: '/register',
        icon: 'icon-star'
      },
      {
        name: 'Error 404',
        url: '/404',
        icon: 'icon-star'
      },
      {
        name: 'Error 500',
        url: '/500',
        icon: 'icon-star'
      }
    ]
  },
  {
    name: 'Disabled',
    url: '/dashboard',
    icon: 'icon-ban',
    badge: {
      variant: 'secondary',
      text: 'NEW'
    },
    attributes: { disabled: true },
  },
  {
    name: 'Download CoreUI',
    url: 'http://coreui.io/angular/',
    icon: 'icon-cloud-download',
    class: 'mt-auto',
    variant: 'success',
    attributes: { target: '_blank', rel: 'noopener' }
  },
  {
    name: 'Try CoreUI PRO',
    url: 'http://coreui.io/pro/angular/',
    icon: 'icon-layers',
    variant: 'danger',
    attributes: { target: '_blank', rel: 'noopener' }
  }
];
