import {
  IconBolt,
  IconBrandDiscordFilled,
  IconBrandTelegram,
  IconBrandTwitterFilled,
  IconCoins,
  IconCreditCard,
  IconDropletFilled,
  IconGiftFilled,
  IconHome,
  IconPhoneCall,
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
        icon: IconDropletFilled,
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
    label: 'FAQs',
    link: '/faqs',
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
  {
    label: 'Contact',
    link: '/contact',
    icon: IconPhoneCall,
    disabled: false,
    resource: 'contact',
  },
];

export const FAQS = [
  {
    question: 'What is a token launchpad on Solana?',
    answer:
      'A token launchpad on Solana is a platform that helps new projects create, distribute, and manage tokens on the Solana blockchain. It provides tools for creating SPL (Solana Program Library) tokens and often includes features for presales, airdrops, and liquidity provision.',
  },
  {
    question: 'How do I create a new token on a Solana launchpad?',
    answer:
      'To create a new token on a Solana launchpad:\n 1. Connect your wallet to the launchpad platform.\n 2. Fill in the required details such as token name, symbol, total supply, and decimals.\n 3. Confirm the transaction, which will create the token on the Solana blockchain and mint the specified total supply to your wallet.',
  },
  {
    question: 'What are the necessary details required to create a token?',
    answer:
      "Token Name: The name of the token (e.g., 'ExampleToken').\n Token Symbol: The ticker symbol for the token (e.g., 'EXM').\n Total Supply: The total number of tokens that will be created.\n Decimals: The number of decimal places the token can be divided into.",
  },
  {
    question: 'How does a token presale work on Solana?',
    answer:
      'In a token presale, the project sells a portion of its tokens to early investors before listing them on exchanges.\n Users participate by sending SOL to the presale smart contract and receiving the new tokens in return. The presale terms, such as start and end dates, token price, and contribution limits, are predefined.',
  },
  {
    question: 'How do I participate in a token presale?',
    answer:
      'To participate in a token presale:\n 1. Connect your wallet to the launchpad platform.\n 2. Select the token presale you want to participate in.\n 3. Send the required amount of SOL to the presale smart contract. 4. Receive the allocated tokens in your wallet once the transaction is confirmed.',
  },
  {
    question: 'How does the launchpad ensure the security of a token presale?',
    answer:
      'The launchpad ensures security by using audited smart contracts, implementing escrow mechanisms, and enforcing contribution limits. Funds are often held in a smart contract and only released based on predefined conditions, such as reaching a soft cap.',
  },
  {
    question: 'What is a token airdrop?',
    answer:
      'A token airdrop is a distribution event where a project gives away free tokens to a specific group of users. Airdrops are often used as a marketing strategy to increase awareness and adoption of the token.',
  },
  {
    question: 'How do I qualify for a token airdrop?',
    answer:
      'Qualification criteria for airdrops vary by project but commonly include: holding a specific amount of another cryptocurrency, participating in community activities (e.g., joining social media channels), or being an early supporter or user of the project.',
  },
  {
    question: 'How do I claim airdropped tokens?',
    answer:
      "To claim airdropped tokens:\n 1. Ensure you meet the airdrop criteria.\n 2. Connect your wallet to the launchpad or project's airdrop page.\n 3. Follow the instructions to claim your tokens, which usually involves confirming a transaction.",
  },
  {
    question: 'How do I add my new token to a Solana wallet?',
    answer:
      "To add a new token to a Solana wallet:\n 1. Open your Solana wallet (e.g., Phantom).\n 2. Click on 'Manage Token List' or a similar option.\n 3. Enter the token’s mint address and add it to your wallet.",
  },
  {
    question: 'What is the difference between a presale and a public sale?',
    answer:
      'A presale is an early sale of tokens to selected investors, often at a discounted price, before the public sale. A public sale is open to all investors and typically occurs after the presale, often at a higher price.',
  },
  {
    question: 'How do I monitor the progress of a token presale?',
    answer:
      'You can monitor the progress of a token presale by checking the launchpad platform’s dashboard, which usually displays information such as the total amount raised, the number of participants, and the remaining time for the presale. You can also query on-chain data using Solana’s blockchain explorers.',
  },
];
