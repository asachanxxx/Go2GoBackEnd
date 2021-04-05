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
  // {
  //   title: true,
  //   name: 'Quick Access'
  // },
  {
    name: 'Fleet Management',
    url: '/base',
    icon: 'icon-puzzle',
    children: [
      {
        name: 'Manage Drivers',
        url: '/base/managedrivers',
        icon: 'icon-puzzle'
      },
      {
        name: 'Log Viwer',
        url: '/base/logview',
        icon: 'icon-puzzle'
      },
    ]
  },
  {
    divider: true
  },


];
