import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Vendor',
    icon: 'monitor-outline',
    link: 'admin',
    home: true,
    children: [
      {
        title: 'Review New Vendors',
        link: '/admin/vendor/review'
      },
    ]
  },





];
