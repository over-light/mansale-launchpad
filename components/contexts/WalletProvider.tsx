'use client';

import React, { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
<<<<<<< HEAD
import {
  PhantomWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
  WalletConnectWalletAdapter,
} from '@solana/wallet-adapter-wallets';
=======
import { PhantomWalletAdapter, SolflareWalletAdapter, TorusWalletAdapter, WalletConnectWalletAdapter } from '@solana/wallet-adapter-wallets';
>>>>>>> 512de5141181691291f4a85f61ac30e7dcee8016
// import { UnsafeBurnerWalletAdapter } from "@solana/wallet-adapter-wallets";

// Default styles that can be overridden by your app
require('@solana/wallet-adapter-react-ui/styles.css');

// imports here

export default function AppWalletProvider({ children }: { children: React.ReactNode }) {
<<<<<<< HEAD
  const network = WalletAdapterNetwork.Mainnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  console.log('SOLANA-ENDPOINT: ', endpoint);
=======
  const network = WalletAdapterNetwork.Devnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
>>>>>>> 512de5141181691291f4a85f61ac30e7dcee8016
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
      new TorusWalletAdapter(),
      new WalletConnectWalletAdapter({
        network,
        options: {
<<<<<<< HEAD
          relayUrl: 'wss://relay.walletconnect.com',
          // example WC app project ID
          projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_WALLET_PROJECT_ID,
          metadata: {
            name: 'Wallet App',
            description: 'Wallet App',
            url: 'https://github.com/solana-labs/wallet-adapter',
            icons: ['https://avatars.githubusercontent.com/u/35608259?s=200'],
=======
          relayUrl: "wss://relay.walletconnect.com",
          // example WC app project ID
          projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_WALLET_PROJECT_ID,
          metadata: {
            name: "Wallet App",
            description: "Wallet App",
            url: "https://github.com/solana-labs/wallet-adapter",
            icons: ["https://avatars.githubusercontent.com/u/35608259?s=200"],
>>>>>>> 512de5141181691291f4a85f61ac30e7dcee8016
          },
        },
      }),
    ],
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>{children}</WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
