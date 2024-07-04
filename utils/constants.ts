import {
  IconBolt,
  IconBrandDiscordFilled,
  IconBrandTelegram,
  IconBrandTwitterFilled,
  IconCheckbox,
  IconCoins,
  IconCreditCard,
  IconDatabase,
  IconGiftFilled,
  IconHome,
  IconRocket,
  IconSquareRoundedPlusFilled,
  IconUser,
} from '@tabler/icons-react';
import { MenuItem } from './types/types';

export const APP_MENU: MenuItem[] = [
  {
    label: 'Home',
    icon: IconHome,
    link: '/home',
    resource: 'home',
  },
  {
    label: 'Launchpads',
    icon: IconRocket,
    link: '/launchpad',
    resource: 'analytics',
    subMenu: [
      {
        label: 'Create Token',
        icon: IconSquareRoundedPlusFilled,
        link: '/launchpads/token',
        resource: 'evaluations',
      },
      {
        label: 'Create Presale',
        icon: IconGiftFilled,
        link: '/launchpads/presale',
        resource: 'evaluations',
      },
      {
        label: 'Airdrop',
        icon: IconDatabase,
        link: '/launchpads/airdrop',
        resource: 'datasets',
      },
    ],
  },
  {
    label: 'Tokens',
    icon: IconCoins,
    link: '/tokens',
    resource: 'logs',
  },
  {
    label: 'Profile',
    icon: IconUser,
    link: '/profile',
    resource: 'logs',
  },
];

export const orgMenu: MenuItem[] = [
  {
    label: 'Docs',
    link: '/docs',
    icon: IconBolt,
    disabled: false,
    resource: 'docs',
  },
  {
    label: 'Community',
    icon: IconCreditCard,
    disabled: false,
    link: '/community',
    resource: 'community',
    subMenu: [
      {
        label: 'Twitter',
        icon: IconBrandTwitterFilled,
        resource: 'twitter',
        onClick: () => {},
      },
      {
        label: 'Discord',
        icon: IconBrandDiscordFilled,
        resource: 'discord',
        onClick: () => {},
      },
      {
        label: 'Telegram',
        icon: IconBrandTelegram,
        resource: 'telegram',
        onClick: () => {},
      },
    ],
  },
];
