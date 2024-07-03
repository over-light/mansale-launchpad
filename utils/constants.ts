import {
  IconActivityHeartbeat,
  IconBolt,
  IconBrandDiscordFilled,
  IconBrandTelegram,
  IconBrandTwitterFilled,
  IconCheckbox,
  IconCreditCard,
  IconDatabase,
  IconFlaskFilled,
  IconListSearch,
  IconSettings,
  IconTimeline,
  IconUsers,
} from '@tabler/icons-react';
import { MenuItem } from './types/types';

export const APP_MENU: MenuItem[] = [
  {
    label: 'Home',
    icon: IconTimeline,
    link: '/home',
    resource: 'analytics',
  },
  {
    label: 'Launchpad',
    icon: IconTimeline,
    link: '/launchpad',
    resource: 'analytics',
    subMenu: [
      {
        label: 'Create Token',
        icon: IconFlaskFilled,
        link: '/createtoken',
        resource: 'evaluations',
      },
      {
        label: 'Create Presale',
        icon: IconActivityHeartbeat,
        link: '/createpresale',
        resource: 'evaluations',
      },
      {
        label: 'Airdrop',
        icon: IconDatabase,
        link: '/airdrop',
        resource: 'datasets',
      },
      {
        label: 'Checklists',
        icon: IconCheckbox,
        link: '/evaluations/checklists',
        resource: 'checklists',
      },
    ],
  },
  {
    label: 'Tokens',
    icon: IconListSearch,
    link: '/tokens',
    resource: 'logs',
  },
];

export const orgMenu:MenuItem[] = [
  {
    label: 'Documentation',
    link:"",
    icon: IconBolt,
    disabled: false,
    resource: 'billing',
  },
  {
    label: 'Community',
    link: '/billing',
    icon: IconCreditCard,
    disabled: false,
    resource: 'billing',
    subMenu: [
        {
          label: 'Twitter',
          icon: IconBrandTwitterFilled,
          link: '/tw',
          resource: 'evaluations',
        },
        {
          label: 'Discord',
          icon: IconBrandDiscordFilled,
          link: '/discord',
          resource: 'evaluations',
        },
        {
          label: 'Telegram',
          icon: IconBrandTelegram,
          link: '/telegram',
          resource: 'datasets',
        },
        {
          label: 'Checklists',
          icon: IconCheckbox,
          link: '/evaluations/checklists',
          resource: 'checklists',
        },
      ],
  },
];
